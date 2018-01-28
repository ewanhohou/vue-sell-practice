<template>
  <div id="app">

    <!-- 頭部 -->
    <Myheader></Myheader>    
      
    <!-- 導航 -->
    <Mynav></Mynav>
    <!-- 主體內容 -->
    <div class="content">
      content
    </div>
  </div>
</template>

<script>

import Myheader from './components/header/Header';
import Mynav from './components/nav/nav';

export default {
  name: 'App',
  components: {
    Myheader,Mynav
  }
}
</script>

<style>

</style>
