import styles from './Task.module.css'
import { Trash, CheckCircle } from "@phosphor-icons/react"

export function Task() {
    return (
        <>
        <div className={`${styles.task_container}`}>
            <button className={`${styles.check_button}`}>
                {/* <CheckCircle size={20} weight="duotone" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" opacity="0.2"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            </button>

            <p>Lorem ipsum - task atividade  - activity - teste teste</p>
            <button className={styles.delete_button}><Trash size={20}/></button>
        </div>
        </>
    )
}