<template>
  <div>
    <menu-header></menu-header>
    <menu-sport-list :tempMenu="tempMenu"></menu-sport-list>
    <menu-footer :tempMenu="tempMenu" @addSport="handelAddSport"></menu-footer>
  </div>
</template>

<script>
import MenuFooter from "./components/Footer";
import MenuHeader from "./components/Header";
import MenuSportList from "./components/SportList";

export default {
  name: "Menu",
  components: {
    MenuFooter,
    MenuHeader,
    MenuSportList,
  },
  data() {
    return {
      menuData: { name: 1 },
      tempMenu: [],
    };
  },
  methods: {
    handelAddSport() {
      this.$store.commit("addSport", this.tempMenu);
      this.tempMenu = [];
      this.$router.push("./home/train");
    },
    // deepClone(obj) {
    //   // 利用JSON对象实现深度拷贝
    //   return JSON.parse(JSON.stringify(obj))
    // },
    deepClone(obj){
      // 该方法数组与对象通用
      // 为了保持与原数据的结构一致，需要检测当前的是一个数组，还是一个对象
      const newObj= obj.constructor === Array? []:{}

      for(const key in obj){
        if(obj.hasOwnProperty(key)){
          if(typeof obj[key] === 'object'){
            // 由于typeof函数中，数组与对象均返回‘object’，
            // 所以真正判断的是该属性是否是引用类型变量（是否还能遍历）
            newObj[key]=this.deepClone(obj[key])
          }else{
            // 当newObj是一个数组时，obj中对应的key值也是一个数字下标
            // 当newobj是一个对象时，key值则是对象属性的key值
            newObj[key]=obj[key]
          }
        }
      }

      return newObj
    }
  },
  beforeMount() {
    // 此处传输的是地址值，所以每次得到的都是vuex中的menu地址
    // 在菜单组件被加载时判断vuex中的模板是否已经得到初始化，
    // 如果state.tempList=[]  则使用深度拷贝对菜单进行一次拷贝
    // this.tempMenu = this.$store.state.menu;

    // 由于列表的加载依赖于this.tempMenu数组，所有需要在进行数据绑定之前就准备好数据
    this.tempMenu = this.deepClone(this.$store.state.menu);
  },
  destroyed() {
    this.tempMenu = [];
  },
};
</script>

<style>
</style>