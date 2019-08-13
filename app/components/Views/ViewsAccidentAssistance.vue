<template>
  <StackLayout width="90%" ref="initialContainer" class="AccidentAssistance" :visibility="visible?'visible':'collapse'">

    <Label text="Accident Assistance" class="initial-label"></Label>

  <button @tap="home()" text="home"></button>

  <StackLayout class="top-image" height="100" width="100%" style="background-position: center;background-size: cover;" backgroundImage="res://styner-assist">
  </StackLayout>

  <Label class="lbl-title" text="Accident Management Care"/>
<FlexBoxLayout>
  <Label class="lbl-numbers-title" text="Day: "/>
  <Label class="lbl-numbers" text="0333 321 5962"/>
</FlexBoxLayout>

<FlexBoxLayout>
  <Label class="lbl-numbers-title" text="Evening: "/>
  <Label class="lbl-numbers" text="0845 078 4573"/>
</FlexBoxLayout>

  <Label class="lbl-pom" text="Peace of Mind"/>

  <Label class="lbl-muyfc" text="Make us your first call"/>

  <Label class="lbl-para" text="At Sytner we pride ourselves on not 
only supplying you with the perfect car
but also providing great after sales 
service and care."/>

<Button class="btn-enquire"text="Enquire Now"/>


  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsAccidentAssistance',
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
.AccidentAssistance{
  .top-image{
    padding-top: 9;
  }
  .lbl-title{
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
padding-top:19;
padding-bottom:10;
  }

.lbl-numbers-title{
  width: 218px;
height: 53px;
color: #000000;
font-family: "Audi Type";
font-size: 20px;
font-weight: 700;
line-height: 30px;
}
  .lbl-numbers{
font-family: "Audi Type";
font-weight: 400;
  }
  .fb-numbers{
    padding-top:10;
  }

  .lbl-pom{
    padding-top: 17;
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
  }

  .lbl-muyfc{
    padding-top: 10;
color: #000000;
font-family: "Audi Type";
font-size: 13px;
font-weight: 700;
  }
  .lbl-para{
    padding-top: 10;
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
    white-space: normal;
        padding-bottom:35;
  }
  .btn-enquire{
    background-color: black;
    height: 39;
    width:100%;
color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }
}
</style>
