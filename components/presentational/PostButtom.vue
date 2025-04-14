<template>
  <div class="post-button-wrapper">
    <button class="post-button" @click="onClick">{{ text }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.post-button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-button {
  width: 100%;
  background-color: black;
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
