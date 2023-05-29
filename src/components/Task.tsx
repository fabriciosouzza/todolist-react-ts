import styles from './Task.module.css'
import { Trash } from "@phosphor-icons/react"

export function Task() {
    return (
        <div className={styles.task_container}>
            <label className={styles.label}><input type="checkbox" className={styles.checkbox}/><span></span></label>
            <p>Lorem ipsum - task atividade  - activity - teste teste</p>
            <button className={styles.delete_button}><Trash size={20}/></button>
        </div>
    )
}