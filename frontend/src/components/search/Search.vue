<template>

<button id="show-modal" @click="showModal = true">Show Modal</button>

<Modal v-if="showModal" @close="showModal = false">
  <template v-slot:header>
    asdasd
  </template>
  <template v-slot:body>
    asdasd
  </template>
</Modal>

</template>

<script>

import Modal from '../modal/Modal.vue'

export default {
    components: {
        Modal,
    },
    data() {
        return {
            showModal: false,
        }
    }
}

</script>

<style scoped>

</style>