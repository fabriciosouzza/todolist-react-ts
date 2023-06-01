import { Task } from './Task'
import { Empty } from './Empty'

import { PlusCircle } from '@phosphor-icons/react'
import styles from './TodoSection.module.css'
import { useState } from 'react'


// interface Task {
//     id: number,
//     content: string,
//     isDone: boolean
// }

// const tasks = [
//     {
//         id: 1,
//         content: "sdfasdf",
//         isDone: true
//     }
// ]

export function TodoSection() {

    const [tasks, setTasks] = useState([]);
    const [newTaskContent, setNewTaskContent] = useState('')

    const [newTaskId, setNewTaskId] = useState(1)

    function handleNewTask() {
        handleNewTaskId()
        
        event.preventDefault()
        setTasks([...tasks, {id: newTaskId, content: newTaskContent, status: false}])
        setNewTaskContent('')     
    }
    
    function handleNewTaskContent() {
        
        setNewTaskContent(event?.target.value)
    }
    
    function handleNewTaskId() {
        setNewTaskId(newTaskId + 1)
    }

    function deleteTask(id) {
        const tasksUpdated = tasks.filter(item => {
            return item.id != id;
        })
        setTasks(tasksUpdated);
    }

    function changeStatus(id) {
        const tasksWithDone = tasks.map(item => {
            if (item.id == id) {
                item.status = item.status ? false : true
                return item
            } else {
                return item
            }
        })
        setTasks(tasksWithDone);
    }

//  todo vies -> two functions that iterates the task array

    
    return (
        <div className={styles.allsection}>

            <form className={styles.task_form} onSubmit={handleNewTask}>
                <textarea placeholder='Add a new task' value={newTaskContent} onChange={handleNewTaskContent}></textarea>
                <button type='submit'><p>Add</p><PlusCircle size={20} /></button>
            </form>

            <div className={styles.tasks_status}>
                <p className={styles.todoview}>To Do <span>0</span></p>
                <p className={styles.doneview}>Done <span>2 of 5</span></p>
            </div>

            <div className={styles.task_wrapper}>
                {tasks.map(item => {
                    return <Task key={item.id} id={item.id} content={item.content} status={item.status} onDeleteTask={deleteTask} onChangeStatus={changeStatus} />
                })}
            </div>
        </div>
    )
}