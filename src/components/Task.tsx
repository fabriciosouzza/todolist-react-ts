import styles from './Task.module.css'
import { Trash } from "@phosphor-icons/react"

export function Task() {
    return (
        <div className={styles.task_container}>
            <input type="checkbox" name="" id="" />
            <p>Lorem ipsum - task atividade -blabla</p>
            <Trash />
        </div>
    )
}