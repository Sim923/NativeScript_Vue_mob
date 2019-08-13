<template>
  <StackLayout width="100%" height="100%" ref="initialContainer" class="EarnRewards" :visibility="visible?'visible':'collapse'">

    <StackLayout height="50%"/>
    <Label text="Awaiting Client's Content" class="initial-label"></Label>

  <button @tap="home()" text="home"></button>

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsEarnRewards',
  props: {
    visible: Boolean
  },
  mounted(){

  },
  methods: {
    home: function() {
              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
.EarnRewards{
  Label{
    text-align:center;
    horizontal-alignment: center;
    vertical-alignment: center;
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
  }
}
</style>
