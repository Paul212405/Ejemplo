
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {useState,useEffect} from 'react'

function App(){
   
  return <div>
    <TaskForm /> 
    <TaskList />
    </div> 
}
export default App
