<template>
  <StackLayout class="ViewsCosmeticRepairsTab">

  <StackLayout @tap="open()" height="118" width="90%" backgroundColor="gray" style="background-position: center;background-size: cover;" :backgroundImage="download.image">
    <Label class="lbl-title" :text="download.title"/>
    <Label class="lbl-price" :text="download.sub_title"/>
  </StackLayout>


  <StackLayout @tap="close" :visibility="tabopen?'visible':'collapse'" height="150" width="90%" backgroundColor="gray">
     <StackLayout  height="9" width="100%" backgroundColor="white"></StackLayout>
    <Label class="lbl-subtitle" :text="download.header_title"/>
    <Label class="lbl-description" :text="download.header_content"/>
    <Button class="btn-enquire" @tap="openweb" :text="download.header_bottom"/>
  </StackLayout>

 <StackLayout  height="9" width="90%" backgroundColor="white"></StackLayout>

  </StackLayout>
</template>

<script>
var utilityModule = require("utils/utils");
export default {
  name: 'ViewsCosmeticRepairsTab',
    props: [
    'download'
  ],
  data(){
    return{
      tabopen: false
      
    }
  },
  methods: {
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
.ViewsCosmeticRepairsTab{
  .lbl-title{
    padding-top: 15;
    padding-left: 8;
color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }

  .lbl-price{
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
  .btn-enquire{

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
