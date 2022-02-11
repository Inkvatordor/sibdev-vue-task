<template>
  <el-container class="wrapper">
    <el-form class="form">
      <img src="./img/sibdev-logo.svg" class="form__logo" />
      <h3 class="form__login-title">Вход</h3>
      <el-form-item>
        <el-input
          class="form__login-input"
          placeholder="Логин"
          v-model="login_input"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="form__password-input"
          placeholder="Пароль"
          v-model="password_input"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="form__submit-button" type="primary" @click="submit_login">Войти</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script src="./LoginForm.js"></script>
<style src="./LoginForm.css"></style>