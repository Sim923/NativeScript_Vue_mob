<template>
  <StackLayout ref="initialContainer" class="FiveStarService" :visibility="visible?'visible':'collapse'">

    <Label text="Five Star Service" class="initial-label"></Label>
<StackLayout width="90%">
  <Label class="lbl-titles" text="Customer Name"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>

  <Label class="lbl-titles" text="Centre Location"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
  <Label class="lbl-titles" text="Member of Staff"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
  <Label class="lbl-titles" text="Date of Visit"/>

  <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
  <Label class="lbl-titles" text="Reason for Visit"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
  <Label class="lbl-titles" text="Feedback"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>

<GridLayout  style="padding-top:26" columns="3" rows="1" width="100%" height="100%" backgroundColor="lightgray" >
  <Button row="0" col="0" width="40%" class="btn-main"text="Submit"/>
<StackLayout row="0" col="1" height="100%" width="15" backgroundColor="blue"><label text="test"/></StackLayout>
<Button row="0" col="2" width="40%" class="btn-cancel"text="Cancel"/>

  </GridLayout>



</StackLayout>


  <button @tap="home()" text="home"></button>

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsFiveStarService',
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
.FiveStarService{
  .lbl-titles{
color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-bottom:9;
padding-top:25;
  }

  .btn-main{

width: 135px;
height: 100%;
border: 1 solid #000000;
background-color: #000000;

    color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;

  }

  .btn-cancel{
width: 135px;
height: 100%;
border: 1 solid #000000;
border-color: black;
border-width: 1;
background-color: #ffffff;

    color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }

    .txt-postcode{
padding-top:9;
    border-bottom-width: 1;
    border-bottom-color: black;

    color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
height:20;
  }

    .txt-input{
    color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
  border-bottom-color: 707070;
  border-bottom-width: 1;
  }

}
</style>
