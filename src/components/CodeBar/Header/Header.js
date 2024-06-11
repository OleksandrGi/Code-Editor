import React, { useState } from 'react'
import styles from "./Header.module.css"
import  Webcam  from 'react-webcam'
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'
import Draggable from 'react-draggable'
export default function Header() {
    const [camera, setCamera] = useState(false)

  return (
 <div>
<header className={styles.header}>
    <button
    onClick={()=>  setCamera(!camera)}
    className={styles.button}>
        {camera ? <BsFillCameraVideoFill fill='#fff' size={23}/> : <BsFillCameraVideoOffFill fill='#fff' size={23} />}
    </button>
   </header>

    {
      camera ?
    < Draggable>
    <Webcam
      className={styles.camera}
      audio={false}
      width={300}
      height={300}
      videoConstraints={{
        width: 300,
        height:300,
        facingMode:"user"
      }}
      />
    </Draggable>
      : null
    }
   </div>
  )
}
