<template>
  <div class="header">
      <div class="title">回顾</div>
  </div>
</template>

<script>
export default {
    name:'ReviewHeader',
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
    }
</style>