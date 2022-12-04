<template>
  <div class="header">
    <div class="title">训练记录</div>
    <span>{{count}}个动作</span><span>,{{groups}}组</span>
    <div class="calendar">{{today}}</div>
  </div>
</template>

<script>
export default {
  name: "TrainHeader",
  computed: {
    today: function () {
      let date = new Date();
      return date.getMonth() + 1 + "月" + date.getDate() + "日";
    },
    count: function () {
      return this.$store.state.trainList.length;
    },
    groups: function () {
      let groupCount = 0;
      this.$store.state.trainList.forEach((element) => {
        groupCount += element.detailList.length;
      });
      return groupCount;
    },
  },
};
</script>

<style lang='less' scoped>
@import "~styles/color.less";
.header {
  background-color: @bgcolor;
  position: relative;
  line-height: 2rem;
  padding: 0 1rem;
  font-size: 1rem;
  .title {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    line-height: 3rem;
  }
  .calendar {
    font-size: 1rem;
    position: absolute;
    top: 3rem;
    right: 1rem;
  }
  div {
    font-size: 1rem;
  }
}
</style>