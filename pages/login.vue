<template>
  <div class="login-wrapper">
    <div class="login">
      <LogoAndImage />
      <div class="login-form-wrapper">
        <FormLayout class="login-form">
          <TitleAndTextbox
            v-for="constant in container.constants"
            :title="constant.title"
            :type="constant.type"
          />
        </FormLayout>
        <NuxtLink to="/register" class="register-link">新規登録へ</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLoginContainer } from "@/components/composables/containers/loginContainer";

const container = useLoginContainer();
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  .login-form-wrapper {
    padding: 20px;
    border: solid 1px #ccc;
    border-radius: 8px;
    width: 16vw;
  }

  .login-form {
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
