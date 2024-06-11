import React, { useContext } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/snippets/javascript"
import "ace-builds/src-min-noconflict/ext-language_tools"
import { EditorContext } from '../../context/context';



export default function JsEditor() {
  const {js, setJs} = useContext(EditorContext)

  return (
  <AceEditor
  placeholder='Write your JS code here!'
  mode='javascript'
  theme='monokai'
  name='editor_js'
  value={js}
  onChange={value => setJs(value)}
  fontSize='26'
  height={'100%'}
  width={'100%'}
  showPrintMargin={false}
  showGutter={true}
  highlightActiveLine = {true}
  setOptions={{
    enableBasicAutocompletion:true,
    enableLiveAutocompletion:true,
    enableSnippets:true,
    tabSize:2


  }}

  />
  )
}
