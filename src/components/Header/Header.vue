<template>
  <el-container>
    <el-header class="header">
      <img src="./img/sibdev-logo.svg" class="header__logo" />
      <router-link  class="header__search" tag='span' to="/">Поиск</router-link>
      <router-link class="header__favourite" tag='span' to="/favourite">Избранное</router-link>
      <router-link class="header__logout" tag='span' to="/login">Выйти</router-link>

    </el-header>
  </el-container>
</template>

<script src="./Header.js"></script>
<style src="./Header.css"></style>