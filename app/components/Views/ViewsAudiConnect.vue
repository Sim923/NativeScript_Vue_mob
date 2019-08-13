<template>
  <StackLayout ref="initialContainer" class="initial-container" :visibility="visible?'visible':'collapse'">

    <WebView src="https://www.google.com" width="100%" height="90%"></WebView>
  <button @tap="home()" text="home"></button>

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsAudiConnect',
  props: {
    visible: Boolean
  },
  methods: {
    home: function() {
              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
</style>
