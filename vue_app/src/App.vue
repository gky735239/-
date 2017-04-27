<template>
  <div>
    <life-header></life-header>
    <div class="nav-wrap">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/goods">首页</router-link>
        </li>
        <li class="nav-item"><a href="#">家务</a></li>
        <li class="nav-item"><a href="#">下厨</a></li>
        <li class="nav-item"><a href="#">家居服</a></li>
        <li class="nav-item"><a href="#">生活</a></li>
        <li class="nav-item"><a href="#">软装</a></li>
        <li class="nav-item"><a href="#">床品</a></li>
        <li class="nav-item"><a href="#">工作</a></li>
        <li class="nav-item"><a href="#">旅行</a></li>
        <li class="nav-item"><a href="#">了解LifeVC</a></li>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {

  components: {
    'life-header': header
  }
}
</script>

<style scoped>
  /*导航条*/
  .nav-wrap{
    height: 48px;
    width: 100%;
    background: white;
    position: relative;
    overflow: hidden;
  }
  .nav{
    height: 48px;
    float: left;
    width: 800px;
  }
  .nav-item{
    box-sizing: border-box;
    height: 48px;
    width: 80px;
    text-align: center;
    float: left;
    border-bottom: 2px solid #ddd;
  }
  .nav-item a{
    height: 48px;
    font-size:16px;
    line-height: 48px;
  }
  .nav-item-active{
    color: #80b532;
    border-bottom: 2px solid #80b532;
  }

</style>
