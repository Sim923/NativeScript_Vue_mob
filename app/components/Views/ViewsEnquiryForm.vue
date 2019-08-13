<template>
  <StackLayout width="100%" height="100%" ref="initialContainer" class="VehicleDetails">

<StackLayout :visibility="!state?'visible':'collapse'"> <!-- First Screen -->


      <Label class="lbl-titles" text="First Name"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>


      <Label class="lbl-titles" text="Surname"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

      <Label class="lbl-titles" text="Email"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>


      <Label class="lbl-titles" text="Subject"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>


      <Label class="lbl-titles" text="Details of Enquiry"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout style="padding-bottom:26;" backgroundColor="#707070" class="bottomborder"></StackLayout>

<StackLayout style="padding-top:26;" >
  <DockLayout  width="100%" height="39" stretchLastChild="false">
 <button dock="left" class="btn" width="135" height="100%" @tap="submit()" text="Submit"></button>

  <button dock="right" class="btn-cancel" width="135" height="100%" @tap="cancel()" text="Cancel"></button>
</DockLayout>
</StackLayout>

</StackLayout> <!-- End of first screen -->

<StackLayout :visibility="state?'visible':'collapse'"> <!-- Second screen -->
<Label text="Thank you for submitting your enquiry, we will get back to you soon"/>
</StackLayout> <!-- End of second screen -->

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsEnquiryForm',
  props: [
    'download'
  ],
  mounted(){

  },
    props: {
    visible: Boolean
  },
    watch:{
    visible: function(){
      this.state=false;//Resets to first state when opened
    }
  },
      data(){
    return {
    'state': false
  }
},
  methods: {
  	    cancel: function() {
    	this.$emit("home");
    },
    submit: function() {
    	this.state=true;
    }
  }
}
</script>

<style lang="scss">
.VehicleDetails{

  .lbl-titles{
        text-align:left;
    horizontal-alignment: left;
    color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-bottom: 9;
padding-top:25;
  }

        .btn-cancel{
    width: 100%;
height: 39;
border-width: 1;
border-color: #000000;
background-color: #eeeeee;
    color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }
  .txt-input{
color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
width:100%;
padding-bottom: 4;
  }
    .bottomborder{
  height: 1;
  width: 100%;
  
}
}
</style>
