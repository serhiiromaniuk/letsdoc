import './style.css'
import React from 'react'
import Editor from 'react-simple-code-editor'
import { Grammar, highlight, languages } from 'prismjs'
// import "prismjs/components/prism-markup"
import "prismjs/components/prism-markdown"
import "prismjs/themes/prism.css"


const code = `## 123
# 123
#123
`
 
const hightlightWithLineNumbers = (input, grammar, language) => {
  return highlight(input, grammar, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n")
  }

export function Component() {
  const [codeValue, setCodeValue] = React.useState(code)
  
  var showdown  = require('showdown')
  const converter = new showdown.Converter()
  const render = converter.makeHtml(codeValue)
  return (
    <>
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
      <div className="editor" dangerouslySetInnerHTML={{ __html: `${render}` }} />

    </>
  )
}
