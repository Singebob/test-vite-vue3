<template>
    <div class="flex flex-row justify-center pt-5">
        <button class="text-center text-white bg-red-600 w-1/12 rounded-full">
            <p>Fini</p>
            <archiveIcon class="w-4"></archiveIcon>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArchiveIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'FinishButton',
  components: { ArchiveIcon }
})
</script>