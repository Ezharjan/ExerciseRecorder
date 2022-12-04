<template>
  <div class="header">
      <router-link to="/home/train" tag="div" class="iconfont return">&#xe842;</router-link>
      <div class="title">动作菜单</div>
  </div>
</template>

<script>
export default {
    name:'MenuHeader',
}
</script>

<style lang='less' scoped>
    @import '~styles/color';
    .header{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        height: 3rem;
        background-color: @bgcolor;
        .title{
            text-align: center;
            color: #fff;
            font-size: 1.2rem;
            line-height: 3rem;
        }
        .return{
            color: #fff;
            line-height: 3rem;
            position: absolute;
            left: .5rem;
            font-size: 2rem;
        }
    }
</style>