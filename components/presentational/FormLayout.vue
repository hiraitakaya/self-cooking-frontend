<template>
  <div class="form-layout-wraper">
    <slot />
    <PostButtom :text="text" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.form-layout-wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
}
</style>
