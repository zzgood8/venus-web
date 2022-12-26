<template>
  <div class="login-card">
    <n-card>
      <n-form>
        <n-form-item path="age" label="年龄">
          <n-input v-model:value="loginForm.username" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="loginForm.password" type="password" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-button>登录</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const loginForm = reactive({
  username: '',
  password: ''
})
</script>

<style lang="less">
.login-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .n-card {
    width: 30vw;
  }
}
</style>
