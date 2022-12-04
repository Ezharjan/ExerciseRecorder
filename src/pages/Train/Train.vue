<template>
<div>
    <train-header></train-header>
    <train-list></train-list>
</div>
    
</template>

<script>
import TrainHeader from './components/Header'
import TrainList from './components/List'
export default {
    name:'Train',
    components:{
        TrainHeader,
        TrainList
    }
}
</script>

<style>

</style>