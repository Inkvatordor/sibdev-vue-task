<template>
  <el-container class="Login">
    <LoginForm/>
  </el-container>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>