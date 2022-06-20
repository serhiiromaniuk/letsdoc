import './style.css'
import React from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import "prismjs/components/prism-markdown"
import "prismjs/themes/prism.css"
import showdown from 'showdown'
import { Header } from '../../../Header'

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
      <Header/>
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
      <div style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 24,
          outline: 1,
        }} className="editor" dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}
