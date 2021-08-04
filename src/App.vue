<template>
  <div>
    <h1 class="text-secondary text-center uppercase text-5xl italic p-10">Todo List</h1>
    <div class="flex flex-row justify-center">
      <input placeholder="Nouvelle tache" class="rounded-l-full" v-model="nextTasks" @keypress.enter="addTask"/>
      <button class="bg-tertiary rounded-r-full" @click="addTask">
        <img src="./assets/plus.svg"/>
      </button>
    </div>
    <div class="flex flex-row justify-center pt-5">
      <button class="text-center text-white bg-red-600 w-1/12 rounded-full" @click="taskFinish">Fini</button>
    </div>
    <div class="flex flex-col items-center pt-10" v-for="task in tasks" :key="task">
      <task :taskMsg="task" @change="selected"></task>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Task from './components/Task.vue'

export default defineComponent({
  components: { Task },
  name: 'App',
  setup() {
    const taskSelected = reactive([]) as string[]
    const nextTasks = ref("")
    const tasks = reactive(["oui", "non"])
    return { tasks, nextTasks, taskSelected }
  },
  methods: {
    addTask() {
      this.tasks.push(this.nextTasks)
      this.nextTasks = ""
    },
    selected(event: any){
      this.taskSelected.push(event.target.value)
    },
    taskFinish() {
      this.taskSelected.forEach(item => this.tasks.splice(this.tasks.indexOf(item), 1))
      this.taskSelected.splice(0, this.taskSelected.length)
    }
  }
})
</script>

