<template lang="html">
  <div>

    <MySecondComponent
      myFirstProp="somePropVal"/>

    <p>This value is from Store: {{someComputedValueFromStore}}</p>

  </div>
</template>

<script>
import MySecondComponent from './MySecondComponent'

export default {
  components: {
    MySecondComponent
  },
  data () {
    return {
      // myVar: myVal
    }
  },
  methods: {
    /*
      incrementByOne: function (val) {
        return val + 1
      }
    */
    dispatchSomething: function () {
      this.$store.dispatch('myFirstAction', {foo: 'bar'})
    }
  },
  computed: {
    /*
      someComputedValue: function () {
        return this.myVar + <someValue>
      }
    */
    someComputedValueFromStore: function () {
      return this.$store.getters.getSomeVarInStore
    }
  },
  // lifecycle method example:
  created () {
    this.dispatchSomething()
  }
  // see https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  // for the whole list

}
</script>

<style lang="scss" scoped>
p {
  color: pink;
}
</style>
