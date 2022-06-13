import './style.css'
import React from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import "prismjs/components/prism-markdown"
import "prismjs/themes/prism.css"
import showdown from 'showdown'
import { Header } from '../../../Header'
import { encode, decode } from 'js-base64'
import { api, opt, getUserData, domain } from '../../../Components/Func'
import axios from 'axios'

const sampleCode = `Showdown Tutorial
=================

This is a showdown tutorial. 

Showdown supports a number of cool features, namely:

  - headers 
  - lists
  - and other stuff too
  
It is also possible to include code:
\`\`\`
var foo = 'bar';
...
var baz = {
  markdown: 'is great',
  showdown: 'is awesome'
}
\`\`\`
Don't forget to check the [extensions wiki][1].

[1]: https://github.com/showdownjs/showdown/wiki/extensions

`
function publish(e, code) {
  e.preventDefault()

  const urlGet       = api.post.doc.page.get
  const urlCreate    = api.post.doc.page.create
  const urlUpdate    = api.post.doc.page.update
  const urlDomGet    = api.post.user.domains.get
  const urlDomUpsert = api.post.user.domains.upsert

  const hostname = domain
  const uuid     = getUserData().token

  const dataDoc = {
    owner:   uuid,
    content: encode(code)
  }

  const dataDom = {
    name: uuid + '.' + hostname,
    owner: uuid,
    value: hostname
  }

  axios.post(urlGet, dataDoc, opt)
    .then(
      function(res) {
        axios.post(urlUpdate, dataDoc, opt)
          .then(
            function(res) {
              console.log(res)
            }
          ).catch(e => console.log(e.response))
      }
    ).catch(
      function(err) {
        if (err.response.status === 400) {
          axios.post(urlCreate, dataDom, opt)
            .then(
              function(res) {
                console.log(res)
              }
            ).catch(e => console.log(e.response))
        }
      }
    )
  axios.post(urlDomUpsert, dataDom, opt)
    .then(
      function(res) {
        console.log(res)
      }
    ).catch(
      function(e) {
        console.log(e.response)
      }
    )
}

export function Component() {
  const [codeValue, setCodeValue] = React.useState(sampleCode) // code
  
  const hightlightWithLineNumbers = (input, grammar, language) => {
    return highlight(input, grammar, language)
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n")
  }
  
  const converter = new showdown.Converter({
    'omitExtraWLInCodeBlocks': true,
    'parseImgDimensions': true,
    'simplifiedAutoLink': true,
    'literalMidWordUnderscores': true,
    'strikethrough': true,
    'tables': true,
    // 'ghCodeBlocks': true,
    'tasklists': true,
    'smoothLivePreview': true,
    'ghCompatibleHeaderId': true,
    'smartIndentationFix': true,
    'emoji': true,
    'simpleLineBreaks': true,
    'ghMentions': true
  })
  
  const html = converter.makeHtml(codeValue)
  showdown.setFlavor('github')

  return (
    <>
      <Header auth={(e) => publish(e, codeValue)}/>
      <Editor
        value={codeValue}
        onValueChange={code => setCodeValue(code)}
        highlight={code => hightlightWithLineNumbers(code, languages.markdown, 'markdown')}
        padding={10}
        textareaId="codeArea"
        className="editor"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          outline: 0
        }}
      />
      <p>Preview</p>
      <div style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 24,
          outline: 1,
        }} className="editor" dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}
