import { Task } from './Task'
import { Empty } from './Empty'
import { PlusCircle } from '@phosphor-icons/react'
import styles from './TodoSection.module.css'

export function TodoSection() {
    return (
        <div className={styles.allsection}>

            <form className={styles.task_form}>
                <textarea placeholder='Add a new task'></textarea>
                <button><p>Add</p><PlusCircle size={20} /></button>
            </form>

            <div className={styles.tasks_status}>
                <p className={styles.todoview}>To Do <span>0</span></p>
                <p className={styles.doneview}>Done <span>2 of 5</span></p>
            </div>

            <div className={styles.task_wrapper}>
                <Empty />
                <Task />
                <Task />
            </div>
        </div>
    )
}