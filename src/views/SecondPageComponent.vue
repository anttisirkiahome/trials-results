<template lang="html">
  <div>
    <h1>Hello world from page 2!</h1>
    <MyFirstComponent/>
  </div>
</template>

<script>
import MyFirstComponent from './../components/MyFirstComponent'

export default {
  components: {
    MyFirstComponent
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
