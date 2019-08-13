<template>
  <StackLayout width="100%" height="100%" ref="initialContainer" class="VehicleDetails">

    <Label class="lbl-title" text="Brand"/>
    <Label class="lbl-data" :text="download.brand"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Model"/>
    <Label class="lbl-data" :text="download.Model"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Description"/>
    <Label class="lbl-data" :text="download.Desc"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Order Date"/>
    <Label class="lbl-data" :text="download.brand"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Delivery Date"/>
    <Label class="lbl-data" :text="download.Deldate"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Registration Date"/>
    <Label class="lbl-data" :text="download.Regdate"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Registration No."/>
    <Label class="lbl-data" :text="download.brand"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="Next Service"/>
    <Label class="lbl-data" :text="download.Nextserv"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

        <Label class="lbl-title" text="MOT Due Date"/>
    <Label class="lbl-data" :text="download.Motdate"/>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

  <button @tap="home()" text="home"></button>

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsVehicleDetails',
  props: [
    'download'
  ],
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
.VehicleDetails{

  .lbl-title{
    padding-top: 14;
color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;

    text-align:left;
    horizontal-alignment: left;

  }
  .lbl-data{
    padding-top: 9;
    padding-bottom: 4;
color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
text-transform: uppercase;

    text-align:left;
    horizontal-alignment: left;
  }



  Label{
    text-align:left;
    horizontal-alignment: left;
  }
    .bottomborder{
  height: 1;
  width: 100%;
  padding-top: 8;
  paddig-bottom: 8;
}
}
</style>
