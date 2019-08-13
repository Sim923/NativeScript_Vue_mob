<template>
  <StackLayout ref="initialContainer" class="lv" :visibility="visible?'visible':'collapse'">

    <Label text="Little VIPs" class="initial-label"></Label>

  <button @tap="home()" text="home"></button>


<!--<ListView for="item in download">
  <v-template>
  	
  </v-template>
</ListView>-->
<ScrollView id="scroll" orientation="vertical" isEnabled="true" width="100%" height="100%">
        <StackLayout width="100%" height="8000">   


            <StackLayout v-for="item in download" :key="item.id" :item="item">
            	<ViewsLittleVIPsTab :download="item" ref="viewsLittleVIPsTab"></ViewsLittleVIPsTab>
            </StackLayout>
          </StackLayout>
        </ScrollView>
</StackLayout>
</template>

<script>
import ContentBlockService from '@/services/ContentBlockService'
const contentBlockService = new ContentBlockService()
import ViewsLittleVIPsTab from './ViewsLittleVIPsTab.vue'

const observableModule = require("data/observable");
export default {
  name: 'ViewsLittleVIPs',
  props: {
    visible: Boolean,
    items: Array
  },
  components:{
  	ViewsLittleVIPsTab
  },
  data(){
  	return {
    'download': []
  	}
  },
  mounted(){
 //  	this.d.image="https://s3.eu-west-2.amazonaws.com/sytner-club-assets/Audi/imgs/little-vips/ride-on-mobile.png";
	// this.d.title = "test"
	// this.d.sub_title="subtitle"
	// this.d.header_title="test";
	// this.d.header_content="test";
//	this.d.header_bottom="test";  	    	     	
//this.$refs.listview.nativeView.refresh();
  	    	     contentBlockService.load("little-vips").then((data)=>{
                this.download = data.data;
  	    	     	console.log("I AM DATA REEEEEEEEEEEEEEEEEEE")
  	    	    // 	this.download = data;
  	    	   //  this.$refs.viewsLittleVIPsTab.nativeView.image=this.image;
    	      	// console.log()
    	      	// console.log(data[1].title)
    	      	//this.items=["hiya", "hia", "hiya"]
    	      	 console.log("Actual title ^");
        // for (var i =0; i < this.contentdata.length; i++) {
        //           console.log(this.contentdata[i].title)
              
        // }


      })


  },
  methods: {
  	loaded: function(){

  	},
    home: function() {
              this.$emit('home');
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
