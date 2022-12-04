<template>
  <div>
    <review-header></review-header>
    <review-list></review-list>
  </div>
</template>

<script>
import ReviewHeader from "./components/Header";
import ReviewList from './components/List'
export default {
  name: "Review",
  components: {
    ReviewHeader,
    ReviewList
  }
};
</script>

<style>
</style>