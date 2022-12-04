<template>
  <div class="review-list-wrapper" ref="listWrapper">
    <ul class="review-list">
      <li class="review-noitem" v-show="!this.$store.state.reviewList.length">暂无训练记录</li>

      <li
        v-for="(item, itemIndex) in this.$store.state.reviewList"
        :key="itemIndex"
        class="review-item"
      >
        <div class="review-item-date" @click="showDetail(itemIndex)">{{item.date}}</div>
        <!-- <transition name="list" tag="div"> -->
          <div
            class="review-item-sport"
            v-for="(sport, sportIndex) in item.list"
            :key="sportIndex"
            v-show="isShowDetail(itemIndex)"
          >
            <div class="review-item-sport-title">{{sport.title}}</div>
            <div
              class="review-item-sport-detail"
              v-for="(detail,index) in sport.detailList"
              :key="index"
            >
              <span>{{detail.times}}次&nbsp&nbsp</span>
              <span>{{detail.weight}}kg</span>
            </div>
          </div>
        <!-- </transition> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "ReviewList",
  data() {
    return {
      itemIndex: "",
    };
  },
  computed: {},
  methods: {
    isShowDetail(itemIndex) {
      return this.itemIndex === itemIndex;
    },
    showDetail(index) {
      if (this.itemIndex === index) {
        this.itemIndex = "";
      } else {
        this.itemIndex = index;
      }
    },
  },
  mounted() {
    // 强制开启滚动后还是无法滚动， 无法
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.listWrapper, {
        click: true,
        tap: true,
        // scrollY:true
      });
      this.scroll.hasVerticalScroll=true //强制开启滚动
    });
  },
  updated() {
    this.scroll.refresh();
  },
};
</script>

<style lang='less' scoped>
@import "~styles/color";
.review-list-wrapper {
  overflow: hidden;
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  box-sizing: border-box;
  .review-list {
    // height: 100rem;
    .review-noitem {
      background-color: @itembgcolor;
      margin: 1rem 1rem;
      padding-bottom: 0.2rem;
      border-radius: 0.3rem;
      font-size: 1.1rem;
      line-height: 2rem;
      text-align: center;
    }
    // .list-enter-active,.list-leave-active{
    //   transition: all .2s;
    // }
    // .list-enter,.list-leave-to {
    //   transform: scale(0,0)
    //   // height: 2rem;
    // }
    .review-item {
      overflow: hidden;
      background-color: @itembgcolor;
      margin: 1rem 1rem;
      padding-bottom: 0.2rem;
      border-radius: 0.3rem;
      .review-item-date {
        color: #000;
        font-size: 1.1rem;
        padding: 0.2rem 1rem;
        line-height: 1.5rem;
      }
      .review-item-sport {
        background-color: #ccc;
        border-radius: 0.3rem;
        color: #000;
        margin: 0 0.5rem 0.5rem 0.5rem;
        padding: 0.1rem 0.5rem;
        .review-item-sport-title {
          margin-top: 0.2rem;
        }
        .review-item-sport-detail {
          margin: 0.2rem;
        }
      }
    }
  }
}
</style>