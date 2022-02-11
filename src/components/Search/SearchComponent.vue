<template>
  <main class="search-wrapper">
    <span class="search__title">Поиск видео</span>
    <div class="search__input-wrapper">
      <el-input v-model="search_input"  placeholder="Что хотите посмотреть?"></el-input>
      <el-button @click="submit_search" type="primary" class="search__button">Найти</el-button>
    </div>
  </main>
</template>

<script src="./SearchComponent.js"></script>
<style src="./SearchComponent.css"></style>