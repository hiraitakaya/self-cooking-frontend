<template>
  <div class="title-and-textbox-wrapper">
    <div class="title-and-textbox">
        <h1 class="title-and-textbox_title">{{ title }}</h1>
        <input class="title-and-textbox_textbox" :type="type"></input>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style lang="scss" scoped>
.title-and-textbox-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-and-textbox {
  &_title {
    font-size: 12px;
    margin: 0;
  }
  &_textbox {
    width: 100%;
    resize: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
}
</style>
