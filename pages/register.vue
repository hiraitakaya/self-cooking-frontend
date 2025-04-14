<template>
  <div class="register-wrapper">
    <div class="register">
      <LogoAndImage />
      <div class="register-form-wrapper">
        <FormLayout class="register-form" text="新規登録" :onClick="container.register">
          <TitleAndTextbox
            v-for="constant in container.constants"
            :title="constant.title"
            :type="constant.type"
            v-model="constant.model"
          />
        </FormLayout>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRegisterContainer } from "@/components/composables/containers/registerContainer";

const container = useRegisterContainer();
</script>

<style lang="scss" scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  .register-form-wrapper {
    padding: 20px;
    border: solid 1px #ccc;
    border-radius: 8px;
  }

  .register-form {
    width: 100%;
    margin-bottom: 20px;
    max-width: 600px;
  }

  .register-link {
    color: #007bff;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
