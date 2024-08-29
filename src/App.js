import styles from "./styles/App.module.css"
import './styles/App.css'

import { GrAddCircle } from "react-icons/gr"
import { CiRead } from "react-icons/ci"
import { IoPencil } from "react-icons/io5"
import { MdDelete } from "react-icons/md"

import ScreenCreate from "./pages/ScreenCreate"
import ScreenRead from "./pages/ScreenRead"
import ScreenUpdate from "./pages/ScreenUpdate"
import ScreenDelete from "./pages/ScreenDelete"

import React, { useState } from "react"

function App() {
  const [select, setSelect] = useState("crud")

  //Select page
  const functionSelect = (page) => {
    setSelect(page)
  }

  return (
    <div>
      {select === "crud" && (
        <div className={styles.container_general}>
          <div className={styles.container_main}>C R U D</div>
          <div className={styles.container_commands}>create read update delete</div>
          <div className={styles.container_options}>
            <div className={styles.class_icon}>
              <button
                onClick={() => functionSelect("create")}
                className={styles.class_button}
              >
                <GrAddCircle className={styles.icons} />
              </button>
            </div>
            <div className={styles.class_icon}>
              <button
                onClick={() => functionSelect("read")}
                className={styles.class_button}
              >
                <CiRead className={styles.icons} />
              </button>
            </div>
            <div className={styles.class_icon}>
              <button
                onClick={() => functionSelect("update")}
                className={styles.class_button}
              >
                <IoPencil className={styles.icons} />
              </button>
            </div>
            <div className={styles.class_icon}>
              <button
                onClick={() => functionSelect("delete")}
                className={styles.class_button}
              >
                <MdDelete className={styles.icons} />
              </button>
            </div>
          </div>
        </div>
      )}
      {
        select === 'create' && (
          <ScreenCreate/>
        )
      }
      {
        select === 'read' && (
          <ScreenRead/>
        )
      }
      {
        select === 'update' && (
          <ScreenUpdate/>
        )
      }
      {
        select === 'delete' && (
          <ScreenDelete/>
        )
      }
    </div>
  )
}

export default App
