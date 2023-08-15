<script setup>
import { Icon } from '@iconify/vue'
import {
  todoList,
  todoCompleted,
  createTodo,
  toggleTodoComplete,
  toggleEditTodo,
  updateTodo,
  deleteTodo
} from '../store/store'


import TodoCreator from '../components/TodoForm.vue'
import TodoItem from '../components/TodoItem.vue'

</script>

<template>
  <main>
    <h1>Add Todo</h1>
    <TodoCreator @create-todo="createTodo"></TodoCreator>
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p class="todo-msg" v-else>
      <Icon icon="noto:empty-nest" width="25" />
      <span>No todo's here! Add one at least.</span>
    </p>

    <p v-if="todoCompleted && todoList.length > 0" class="todo-msg">
      <Icon icon="twemoji:partying-face" />
      <span>You have completed all your todos!</span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todo-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
