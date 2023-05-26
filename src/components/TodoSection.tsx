import { PlusCircle } from '@phosphor-icons/react'
import styles from './TodoSection.module.css'

export function TodoSection() {
    return (
        <div className={styles.allsection}>

            <form className={styles.task_form}>
                <textarea placeholder='Add a new task'></textarea>
                <button>Create<PlusCircle size={18} /></button>
            </form>

            <div className={styles.tasks_status}>
                <p>To Do <span className={styles.teste}>0</span></p>
                <p>Done <span>0</span></p>
            </div>

            <div className={styles.task_wrapper}></div>
        </div>
    )
}