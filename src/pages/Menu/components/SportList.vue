<template>
  <div class="sportList">
    <ul class="menuList">
      <li
        :class="{menuItem:true,selected:isMenuSelected(index)}"
        v-for="(data, index) in this.tempMenu"
        :key="index"
        @click="hanleMenuClick(index)"
      >{{data.type}}</li>
    </ul>
    <div class="itemListWrap" ref="itemListWrapper">
      <ul class="itemList">
        <li
          v-for="(item,index) in this.tempMenu[this.menuIndex].detail"
          :key="index"
          @click="handleItemClick(item)"
          :class="{item,selected:item.Selected}"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bscroll from "better-scroll";
export default {
  name: "MenuSportList",
  data() {
    return {
      menuIndex: 0,
    };
  },
  props: {
    tempMenu: Array,
  },
  methods: {
    hanleMenuClick(index) {
      this.menuIndex = index;
      // 切换菜单项时，列表重新回到顶部
      // this.scroll.refresh()
      this.scroll.scrollTo(0,0)
    },
    isMenuSelected(index) {
      return index === this.menuIndex;
    },
    // getMenuInfo() {
    //   axios.get("/api/menu.json").then((res) => {
    //     res = res.data;
    //     if (res.ref && res.data) {
    //       // console.log(res.data.menu);;
    //       // 发送请求并放到vuex中进行统一管理
    //       this.$store.state.menu = res.data.menu;
    //     }
    //   });
    // },
    handleItemClick(item) {
      // this.$store.commit('switchSelected',item)
      /*
                此处直接修改了vuex内部的数据，没有通过commit方法进行修改
                没有解决问题
                
             */
      item.Selected = !item.Selected;
    },
  },
  mounted() {
    /**
     * *如果是动态生成的标签，需要在dom加载完成之后再操作dom，现在methods之中定义方法，然后在created里的this.$nextTick()中去调用这个方法，如果不使用this.$nextTick()，可能会出现如下报错
        bscroll.esm.js?1906:994 [BScroll warn]: Can not resolve the wrapper DOM. vue.esm.js?efeb:628 [Vue warn]: Error in created hook: "TypeError: Cannot read property 'children' of undefined"
        *better-scroll的滚动区域要比其父元素的高度高，才能滚动
        *滚动区域的父元素只对其下的第一个子元素产生作用，其余自动忽略
     */
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.itemListWrapper, {
        click: true,
        tap: true,
      });
      this.scroll.hasVerticalScroll=true
    });
    // 使用betterscroll后，出现一次点击，触发多次点击效果的问题
    // 第一次点击正常，后面几次的点击都会触发多次点击事件

    // 如果在mouted和update中同时绑定一个bscroll，可以解决无法滚动的问题
    //  只在mouted中绑定时，浏览器报错Can not resolve the wrapper DOM
    // 如果同时绑定，会出现点击监听错误的问题
  },
};
</script>

<style lang='less' scoped>
@import "~styles/color.less";
.sportList {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3.11rem;
  top: 3rem;
  .menuList {
    flex: 1;
    background-color: @bgcolor;
    left: 0;
    top: 3rem;
    bottom: 3rem;
    text-align: center;
    height: 100%;
    .menuItem {
      border: none;
      line-height: 3rem;
      font-size: 1.2rem;
    }
    .selected {
      background-color: #fff;
    }
  }
  .itemListWrap {
    // left: 0;
    // top: 0;
    overflow: hidden;
    flex: 4;
    .itemList {
      right: 0;
      text-align: left;
      // height: 100%;
      .item {
        padding-left: 0.5rem;
        font-size: 1.2rem;
        line-height: 3rem;
      }
      .selected {
        background-color: #f2f2f2;
      }
    }
  }
}
</style>