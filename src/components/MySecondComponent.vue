<template lang="html">
  <div v-if="myFirstProp">I received a prop: {{myFirstProp}}</div>
</template>

<script>
export default {
  props: ['myFirstProp'],
  created () {}
}

</script>

<style lang="scss" scoped>

</style>
