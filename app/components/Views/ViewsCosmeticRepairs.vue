<template>
  <StackLayout ref="initialContainer" class="CosmeticRepairs" :visibility="visible?'visible':'collapse'">

    <Label text="Cosmetic Repairs" class="initial-label"></Label>

  <button @tap="home()" text="home"></button>

<ScrollView id="scroll" orientation="vertical" isEnabled="true" width="100%" height="100%">
        <StackLayout width="100%" height="8000">   

            <StackLayout v-for="item in download" :key="item.id" :item="item">
              <ViewsCosmeticRepairsTab :download="item" ref="viewsCosmeticRepairsTab"></ViewsCosmeticRepairsTab>
            </StackLayout>

          </StackLayout>
        </ScrollView>

  </StackLayout>
</template>

<script>

import ContentBlockService from '@/services/ContentBlockService'
const contentBlockService = new ContentBlockService()
import ViewsCosmeticRepairsTab from './ViewsCosmeticRepairsTab.vue'
export default {
  name: 'ViewsCosmeticRepairs',
  props: {
    visible: Boolean
  },
    components:{
    ViewsCosmeticRepairsTab
  },
    data(){
    return {
    'download':[]
  }
},
mounted(){
contentBlockService.load("cosmetic-repairs").then((data)=>{
  this.download = data.data;
})
},
  methods: {
    home: function() {
              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
.CosmeticRepairs{
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
