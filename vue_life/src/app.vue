<template>
  <div>
    <ele-header></ele-header>
    <div class="nav-wrap">
      <ul class="nav">
        <li class="nav-item"><a href="#">首页</a></li>
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
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    .tab-item
      display: inline-block
      .v-link-active
        color: #ff0000
</style>
