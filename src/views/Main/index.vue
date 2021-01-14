<template>
  <div class="container">
    <Topbar @toggleTreeView="visible = !visible"/>
    <div class="main">
      <TreeView v-if="visible"/>
      <Toolbar/>
      <Workspace/>
      <RightPanel/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'

import TreeView from './TreeView/index.vue'
import Topbar from './Topbar/index.vue'
import Toolbar from './Toolbar/index.vue'
import Workspace from './Workspace/index.vue'
import RightPanel from './RightPanel/index.vue'

const visible = ref(false)

</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex: auto;
  }
}

</style>
