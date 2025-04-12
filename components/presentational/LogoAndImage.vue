<template>
  <div class="logo-and-image-wrapper">
    <h1 class="logo-and-image_text">Let's 自炊！</h1>
    <img class="logo-and-image_image" src="/images/flyingpan.png" alt="フライパンの画像" />
  </div>
</template>

<style lang="scss" scoped>
.logo-and-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-and-image {
  &_text {
    margin: 0;
  }
  &_image {
    width: 80%;
    height: auto;
  }
}
</style>
