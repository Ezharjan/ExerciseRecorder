<template>
  <div class="todoListWraper" ref="listWrapper">
    <div class="todoList">
      <transition-group name="list" tag="div">
      <div class="item" v-for="(item,itemIndex) in this.$store.state.trainList" :key="item.id">
        <div class="itemTitle">
          <span class="title">{{item.title}}</span>
          <span class="iconfont deleteSport" @click="deleteSport(itemIndex)">&#xe84a;</span>
        </div>
        <!-- <transition-group name="list" tag="form"> -->
        <form
          action="submit"
          class="todoDetail"
          v-for="(detail, groupIndex) in item.detailList"
          :key="groupIndex"
        >
          <div class="groups">
            <input
              type="text"
              class="input-text"
              name="times"
              id="times"
              v-model="detail.times"
              placeholder="0"
            />
            <label for="times" class="input-lable">次</label>
            <input
              type="text"
              class="input-text"
              name="weight"
              id="weight"
              v-model="detail.weight"
              placeholder="0"
            />
            <label for="times" class="input-lable">kg</label>
            <input type="checkbox" v-model="detail.finish" />
            <input
              type="button"
              class="input-delete"
              value="删除"
              @click="deleteGroup(itemIndex,groupIndex)"
            />
          </div>
        </form>
        <!-- </transition-group> -->
        <input type="button" class="btn-addGroup" value="添加一组" @click="addGroup(itemIndex)" />
      </div>
      </transition-group>
      <div>
        <router-link to="/menu" tag="div" class="iconfont finish">&#xe839;</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import PullDown from "@better-scroll/pull-down";

Bscroll.use(PullDown);
export default {
  name: "TrainList",
  computed: {
    showFinishCheck: function (times, weight) {
      if (times && weight) {
        return true;
      }
      return false;
    },
  },
  methods: {
    addGroup(index) {
      this.$store.commit("addGroup", index);
    },
    deleteGroup(itemIndex, groupIndex) {
      this.$store.commit("deleteGroup", [itemIndex, groupIndex]);
    },
    deleteSport(index) {
      
      this.$store.commit("deleteSport", index);
    },
    pullingDownHandler() {
      // console.log("pulling down");
      // console.log(this.$store.state.trainList);
      this.$store.commit("finishTrain");
      // 结束下拉事件，回到正常位置
      this.scroll.refresh()   //重新计算位置
      this.scroll.finishPullDown();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.listWrapper, {
        click: true,
        tap: true,
        pullDownRefresh: {
          threshold: 30, //触发事件的阈值
          stop: 20,
        },
      });
      this.scroll.on("pullingDown", this.pullingDownHandler);
    });
  },
};
</script>

<style lang='less' scoped>
@import "~styles/color";
.todoListWraper {
  overflow: hidden;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 3.5rem;
  box-sizing: border-box;
  .todoList {
    .item {
      background: @itembgcolor;
    //   -webkit-appearance: checkbox;
      font-size: 1rem;
      margin: 1rem 1rem 1rem 1rem;
      border-radius: 0.3rem;
    }
    .list-enter-active,.list-leave-active{
      transition: all .5s;
    }
    .list-enter, .list-leave-to{
      opacity: 0;
      transform: translateX(2rem);
    }
    .itemTitle {
      font-size: 1rem;
      padding: 0 0.5rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
      .title {
        width: 100%;
      }
      .deleteSport {
        font-size: 1rem;
        padding: auto auto;
        border: none;
        line-height: 1rem;
        font-size: 1rem;
        position: absolute;
        right: 1rem;
        text-align: center;
      }
    }
    .todoDetail {
      .groups {
        display: flex;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        padding: 0 0.5rem;
        .input-text {
          border-radius: 0.3rem;
          width: 4rem;
          height: 1rem;
        }
        .input-lable {
          margin: 0 2rem 0 0.2rem;
        }
        .input-delete {
          line-height: 0.5rem;
          font-size: 0.5rem;
          margin: auto auto;
          height: 1rem;
          color: rgb(red, green, blue);
        }
        input {
          margin: auto 0;
        }
      }
    }
    .btn-addGroup {
      font-size: 0.5rem;
      height: 1rem;
      line-height: 0.5rem;
      margin: 0.5rem 0.5rem;
    }
    .finish {
      text-align: center;
      font-size: 2rem;
      color: red;
      margin: 1rem 1rem;
      border-radius: 0.3rem;
      background: @itembgcolor;
    }
  }
}
</style>