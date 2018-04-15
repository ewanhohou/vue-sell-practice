<template>
  <div id="app">

    <!-- 頭部 -->
    <Myheader :poiInfo='poiInfo'></Myheader>    
      
    <!-- 導航 -->
    <Mynav></Mynav>
    <!-- 主體內容 -->
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import Myheader from "./components/header/Header";
import Mynav from "./components/nav/nav";
export default {
  name: "App",
  components: {
    Myheader,
    Mynav
  },
  data() {
    return {
      //header組件需要的信息
      poiInfo: {}
    };
  },
  created() {
    var that = this;
    //發起異步請求 獲取數據
    // Make a request for a user with a given ID
    this.$axios
      .get("/api/goods")
      .then(function(response) {
        // console.log(response);
        var dataSource = response.data;
        if(dataSource.code == 0) {
            that.poiInfo = dataSource.data.poi_info;
        }
      })
      .catch(function(error) {
        // console.log(error);
      });
  }
};
</script>

<style>

</style>
