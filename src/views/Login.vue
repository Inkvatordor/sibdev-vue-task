<template>
  <el-container class="Login">
    <LoginComponent/>
  </el-container>
</template>

<script>
import LoginComponent from '@/components/LoginComponent/LoginComponent.vue'

export default {
  name: 'Login',
  components: {
    LoginComponent
  }
}
</script>