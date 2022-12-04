<template>
  <div class="footer">
      <div :class="{record:true, select:switchSelect(index)}" 
      v-for="(item, index) in footerList" 
      :key="index"
    @click="handleClick(index)">
          <router-link :to="item.link" tag="div">
            <div class="iconfont record-icon" v-if="switchSelect(index)" v-html="item.icon"></div>
            <div class="iconfont record-icon" v-else v-html="item.SelectedIcon"></div>
            <div class="iconfont record-icon-selected" v-else v-html="item.SelectedIcon"></div>
            <!-- <div class="title">{{item.title}}</div> -->
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeFooter',
    data() {
        return {
            footerList:[
                {
                    icon:'&#xe701;',
                    SelectedIcon:'&#xe702;',
                    title:'记录',
                    link:'/home/train'
                },
                {
                    icon:'&#xe732;',
                    SelectedIcon:'&#xe731;',
                    title:'回顾',
                    link:'/home/review'
                }
            ],
            isSelected:true,
            selectedIndex:0
        }
    },
    computed: {
        
    },
    methods: {
        handleClick(key){
            this.selectedIndex=key
        },
        switchSelect(index){
            return index==this.selectedIndex
        }
    },
    mounted() {
        
    },
}
</script>

<style lang="less" scoped>
    @import '~styles/color';
    .footer{
        z-index: 2;
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: @bgcolor;
        height: 3rem;
        width: 100%;
        border-top: .1rem solid #666;
        .record,.review{
            text-align: center;
            flex: 1;
            .iconfont{
                font-size: 2rem;
                line-height: 3rem;
            }
        }
        .select{
        
            background-color:rgb(220, 245, 247);
        }
    }
</style>