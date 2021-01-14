<template>
  <div>
    <button @click="onToggleTreeView">treeview</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const emit = defineEmit(['toggleTreeView'])

const onToggleTreeView = () => {
  emit('toggleTreeView')
}
</script>

<style>

</style>