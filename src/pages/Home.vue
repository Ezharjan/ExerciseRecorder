<template>
  <div>
      <router-view></router-view>
      <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from '@/components/Footer'
import Train from './Train/Train'
export default {
    name:'Home',
    components:{
        HomeFooter
    }
}
</script>

<style>

</style>