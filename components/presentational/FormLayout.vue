<template>
  <div class="form-layout-wraper">
    <slot />
    <PostButtom text="ログイン" />
  </div>
</template>

<script lang="ts" setup></script>

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
