<script setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
defineEmits(['toggle-complete', 'edit-todo', 'update-todo', 'delete-todo'])
</script>
<template>
  <li>
    <input type="checkbox" :checked="todo.isCompleted" @input="$emit('toggle-complete', index)" />
    <div class="todo">
      <input
        type="text"
        :value="todo.todo"
        v-if="todo.isEditing"
        @input="$emit('update-todo', $event.target.value, index)"
      />
      <span v-else :class="{ 'completed-todo': todo.isCompleted }">
        {{ todo.todo }}
      </span>
    </div>
    <div class="todo-actions">
      <Icon
        v-if="todo.isEditing"
        icon="ic:twotone-done-outline"
        class="icon"
        color="green"
        width="24"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="mi:edit"
        class="icon"
        color="green"
        width="24"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        icon="octicon:trash-16"
        class="icon"
        color="red"
        width="24"
        @click="$emit('delete-todo', todo.id)"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 10px;
  border-radius: 4px;
  background-color: $secondary;
  transition: $animation;

  &:hover {
    box-shadow: $main-shadow;
  }

  input[type='checkbox'] {
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: $background;
    border-radius: 50%;
    transition: $animation;
    &:hover {
      box-shadow: $main-shadow;
      scale: 1.05;
    }

    &:checked {
      background-color: $accent;
    }
  }

  .todo {
    flex: 1;

    .completed-todo {
      text-decoration: line-through;
    }

    input[type='text'] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid transparent;
      border-radius: 4px;
      transition: $animation;
      &:hover {
        border: 2px solid $accent;
      }
      &:focus {
        outline: none;
      }
    }
  }

  .todo-actions {
    display: flex;
    gap: 8px;

    .icon {
      opacity: 0.5;
      transition: $animation;
      cursor: pointer;
      &:hover {
        opacity: 1;
        scale: 1.1;
      }
    }
  }
}
</style>
