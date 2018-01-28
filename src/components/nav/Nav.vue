<template>
  <div class="nav">
    <router-link to="/goods" class="nav-item">
    點菜
    <i class="line"></i>
    </router-link>
    <router-link to="/ratings" class="nav-item">
    評價
      <i class="line"></i>
    </router-link>
    <router-link to="/seller" class="nav-item">
    商家
      <i class="line"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
    .nav {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #e4e4e4;
    }

    .nav .nav-item{
      flex: 1;
      text-align: center;
      font-size: 13px;
      text-decoration: none;
      color: #666666;
      position: relative;
    }

    /* 選中後樣式 */
    .nav .active{
      color: #FFBB22;
    }

    .nav .active .line{
      width: 20px;
      height: 2px;
      display: inline-block;
      background: #FFBB22;
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: -10px;
    }

</style>