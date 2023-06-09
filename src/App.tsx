import { Header } from './components/Header'
import { TodoSection } from './components/TodoSection'


import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div className={styles.container}>
      <Header />
      <TodoSection />
    </div>
  )
}
