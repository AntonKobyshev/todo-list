import { ref, watch, computed } from 'vue'
import { uid } from 'uid'

const todoList = ref([])

watch(
  todoList,
  () => {
    setTodoListLocalStorage()
  },
  {
    deep: true
  }
)

const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem('todoList'))
  if (savedTodoList) {
    todoList.value = savedTodoList
  }
}

fetchTodoList()

const setTodoListLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
}

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null
  })
}
const toggleTodoComplete = (todoPos) => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
}
const toggleEditTodo = (todoPos) => {
  todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing
}
const updateTodo = (todoVal, todoPos) => {
  todoList.value[todoPos].todo = todoVal
}
const deleteTodo = (todoId) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
}

const todoCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted)
})

export {
  todoList,
  todoCompleted,
  createTodo,
  toggleTodoComplete,
  toggleEditTodo,
  updateTodo,
  deleteTodo
}
