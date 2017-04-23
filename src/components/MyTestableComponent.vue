<template>
  <p>Static text<span class="some-class" v-if="msg">, props text: {{ msg }}</span></p>
</template>
<script>
  export default {
    props: ['msg'],
    created () {},
    methods: {
      someMethod: function () {
        return 'someValue from someMethod'
      }
    }
  }
</script>
