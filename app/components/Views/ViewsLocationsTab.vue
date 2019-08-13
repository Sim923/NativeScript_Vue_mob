<template>
  <StackLayout><!-- Stack Layout for the template -->

     <StackLayout  @tap="open()" ref="maintab" height="50" width="90%" backgroundColor="gray"> <!-- Defaulty open tab content goes here -->
    <Label class="lbl-title" ref="competitions" :text="download.hob"/>

</StackLayout>


  <StackLayout tap="close" :visibility="tabopen?'visible':'collapse'"  width="90%" backgroundColor="gray"><!-- expandable tab content goes here -->
    <Label text="Image here"/>
<Label ref="competitions" :text="download.name"/>
<Label ref="competitions" :text="download.googlelink"/>

    <Label text="Address line 1"/>
    <Label text="Address line 2"/>
    <Label text="Address line 3"/>
    <Label text="Address line 4"/>

    <Label text="Phone Number"/>
    <Label text="Map"/> <!-- Needs to link to a google maps page -->

<button @tap="salestap()" text="Sales"/>
<button @tap="servicetap()" text="Service"/>

<StackLayout :visibility="!service?'visible':'collapse'"> <!-- Sales Tab -->
  <Label text="Sales"/>
<Label text="Phone Number"/>

  <Label text="Monday - 123"/>
  <Label text="Tuesday - 345"/>
  <Label text="Wednesday - 567"/>
  <Label text="Thursday - 678"/>
  <Label text="Friday - 789"/>
  <Label text="Saturday - 890"/>
  <Label text="Sunday - 079"/>
</StackLayout>

<StackLayout :visibility="service?'visible':'collapse'"><!-- Service Tab -->
  <Label text="Service"/>
  <Label text="Phone Number"/>

  <Label text="Monday - 987"/>
  <Label text="Tuesday - 567"/>
  <Label text="Wednesday - 536"/>
  <Label text="Thursday - 3453"/>
  <Label text="Friday - 4324"/>
  <Label text="Saturday - 636"/>
  <Label text="Sunday - 234"/>
</StackLayout>

    <Label class="lbl-subtitle" :text="download.header_title"/>
    <Label class="lbl-description" :text="download.header_content"/>
    <Button class="btn" :text="download.header_bottom"/>


  </StackLayout>


    </StackLayout> <!-- End of stack Layout for the template -->
</template>

<script>
import ContentBlockService from '@/services/ContentBlockService'
const contentBlockService = new ContentBlockService()
const observableModule = require("data/observable");
var utilityModule = require("utils/utils");
export default {
  name: 'ViewsLittleVIPsTab',
  props: [
    'download'
  ],
  mounted(){
      this.$refs.maintab.nativeView.backgroundImage=this.download.image;
  },
  watch: {
    image: function(val){
      //this.image = "https://s3.eu-west-2.amazonaws.com/sytner-club-assets/Audi/imgs/little-vips/ride-on-mobile.png";
      this.$refs.maintab.nativeView.backgroundImage=this.download.image;
    }
    



  },
  data(){
  	return{
      tabopen: false,
      service: false
  	}
  },
  methods: {
    salestap: function(){
      this.service=false;
    },
    servicetap: function(){
this.service=true;
    },
    openweb: function(){
      utilityModule.openUrl(this.download.header_bottom_link);
    },
    open: function(){
      this.tabopen = !this.tabopen;
    },
    close: function(){
this.tabopen = false;
    }
  }
}

</script>

<style lang="scss">
.lv{

  .lbl-title{
    padding-top: 15;
    padding-left: 8;
color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }

  .lbl-minisubtitle{
        padding-top: 9;
    padding-left: 8;
color: #ffffff;
font-family: "Audi Type";
font-size: 12;
font-weight: 400;
  }
  .lbl-subtitle{

color: #000000;
font-family: "Audi Type";
font-size: 15;
font-weight: 400;
  }
  .lbl-description{
    width:100%;
    padding-top: 18;
    white-space: normal;
color: #1a1a1a;
font-family: "Audi Type";
font-size: 13px;
font-weight: 400;
padding-bottom:32;
  }
  .btn{

    width: 100%;
height: 39;
border: 1 solid #000000;
background-color: #000000;

    color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }
}
</style>
