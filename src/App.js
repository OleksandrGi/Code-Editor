import React from 'react';
import styles from './App.module.css'
import { EditorProvider } from './context/context';
import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/CodeBar/Header/Header';
import Preview from './components/Preview/Preview';


function App() {
  return (
  <EditorProvider>
   
<CodeBar/>

<div className={styles.main}>
<Header/>
<Preview/>
</div>
  </EditorProvider>
  )
}

export default App;
