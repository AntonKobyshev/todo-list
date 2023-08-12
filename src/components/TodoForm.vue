<template>
  <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <input type="text" v-model="todoState.todo" />
    <TodoButton @click="createTodo()">Create</TodoButton>
  </div>
  <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<script setup>
import { reactive } from "vue";
import TodoButton from "./AddButton.vue";

const emit = defineEmits(["create-todo"]);

const todoState = reactive({
  todo: "",
  invalid: null,
  errMsg: "",
});

const createTodo = () => {
  todoState.invalid = null;
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo);
    todoState.todo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = 'Please add data and tap "Create"';
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.input-wrap {
  display: flex;
  transition: $animation;
  border-radius: 4px;
  border: 2px solid $secondary;
  &.input-err {
    border-color: $error;
  }

  &:hover {
    border: 2px solid $accent;
    box-shadow: $main-shadow;
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: $error;
}
</style>
