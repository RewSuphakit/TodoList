import {useContext} from 'react'
import TodoContext from '../contexts/TodoContext'


function useTodoContext() {
    return useContext(TodoContext)
}
export default useTodoContext