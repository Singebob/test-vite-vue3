<template>
  <div class="p-5 bg-tertiary flex flex-row justify-start rounded-full w-2/3">
    <input type="checkbox" class="h-6 w-6" :value="taskMsg">
    <label class="text-white ml-5">{{ taskMsg }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Task',
  props: {
    taskMsg: {
      type: String,
      required: true
    }
  }
})
</script>