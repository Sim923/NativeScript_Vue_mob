<template>
  <StackLayout>
     <StackLayout  @tap="open()" ref="maintab" height="118" width="90%" style="background-position: center;background-size: cover;" :backgroundImage="download.image">
    <Label class="lbl-title" ref="competitions" :text="download.title"/>
    <Label class="lbl-minisubtitle" ref="minisubtitle" :text="download.sub_title"/>
</StackLayout>


  <StackLayout tap="close" :visibility="tabopen?'visible':'collapse'" height="150" width="90%" backgroundColor="gray">
    <Label class="lbl-subtitle" :text="download.header_title"/>
    <Label class="lbl-description" :text="download.header_content"/>
    <Button class="btn" :text="download.header_bottom"/>
  </StackLayout>

<StackLayout  height="9" width="90%" backgroundColor="white"/>

    </StackLayout>
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
