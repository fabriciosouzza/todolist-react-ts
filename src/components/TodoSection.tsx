import { Task } from './Task'
import { Empty } from './Empty'

import { PlusCircle } from '@phosphor-icons/react'
import styles from './TodoSection.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


interface Task {
    id: string,
    content: string,
    status: boolean
}


export function TodoSection() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskContent, setNewTaskContent] = useState('')


    function handleNewTask(event: FormEvent) {

        const taskToAdd: Task = {
            id: uuidv4(),
            content: newTaskContent,
            status: false
        }

        
        event.preventDefault()
        setTasks([...tasks, taskToAdd])
        setNewTaskContent('')     
    }
    
    function handleNewTaskContent(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTaskContent(event.target.value)
    }
    

    function deleteTask(id: string) {
        const tasksUpdated = tasks.filter(item => {
            return item.id != id;
        })
        setTasks(tasksUpdated);
    }

    function changeStatus(id: string) {
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

    function numberOfTasksDone() {
        const tasksDone = tasks.filter(item => {
            if (item.status) {
                return item;
            }
        })

        return tasksDone.length;
    }

    const isEmpty = tasks.length == 0 ? true: false
    
    return (
        <div className={styles.allsection}>

            <form className={styles.task_form} onSubmit={handleNewTask}>
                <textarea placeholder='Add a new task' value={newTaskContent} onChange={handleNewTaskContent} required></textarea>
                <button type='submit'><p>Add</p><PlusCircle size={20} /></button>
            </form>

            <div className={styles.tasks_status}>
                <p className={styles.todoview}>To Do <span>{`${tasks.length - numberOfTasksDone()}`}</span></p>
                <p className={styles.doneview}>Done <span>{`${numberOfTasksDone()} of ${tasks.length}`}</span></p>
            </div>

            <div className={styles.task_wrapper}>
                {isEmpty ?  <Empty /> : tasks.map(item => {
                    return <Task key={item.id} id={item.id} content={item.content} status={item.status} onDeleteTask={deleteTask} onChangeStatus={changeStatus} />
                })}
            </div>
        </div>
    )
}