<template>
  <div class="footer">
    <router-link to='/home/train' tag="div" class="return">返回</router-link>
    <div @click="handleAdd" class="add">添加</div>
  </div>
</template>

<script>
export default {
    name:'MenuFooter',
    methods: {
        handleAdd(){
            this.$emit('addSport')
        }
    },
    props:{
        tempMenu:Array
    }
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
        .return,.add{
            text-align: center;
            flex: 1;
            font-size: 1rem;
            line-height: 3rem;
        }
        .return{
            color: #666;
        }
    }
</style>