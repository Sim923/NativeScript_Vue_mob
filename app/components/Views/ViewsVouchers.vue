<template>
  <StackLayout backgroundColor="#EEEEEE" ref="initialContainer" class="view-vouchers" :visibility="visible?'visible':'collapse'">
<!--
<AbsoluteLayout paddingLeft="17" paddingRight="17" height="118" backgroundColor="red">
  <Label class="title-label" text="Free wash & Vac" left="14" top="67.36"/>
  <Label class="validuntil-label" text="Valid until 01/06/2018" left="14" top="91"/>
  <Button style.textAlignment="center" class="circle-button" right="21" bottom="15" text=""/>

</AbsoluteLayout>-->

<StackLayout :visibility="!state?'visible':'collapse'"> <!-- First Screen -->
<ScrollView id="scroll" orientation="vertical" isEnabled="true" height="95%" width="100%" >

        <StackLayout width="100%" height="8000">   

            <StackLayout v-for="(item, index) in download" :key="item.id" :item="item">
<ViewsVouchersTab @itemfilled="item_filled" :index="index" :download="item" ref="viewsLittleVIPsTab"></ViewsVouchersTab>
</StackLayout>
              <Button :visibility="selected?'collapse':'visible'" @tap="send_request()" width="90%" class="redeem" text="Redeem Voucher"/>


  
</StackLayout>
  
</ScrollView>
<Button :visibility="selected?'visible':'collapse'" width="100%" @tap="send_request()" VerticalAlignment="bottom" class="redeem" text="Bottom Voucher"/>

</StackLayout> <!-- End of First screen -->

<StackLayout :visibility="state?'visible':'collapse'"> <!-- Second screen -->
  <Label text="Successflll"/>
</StackLayout> <!-- End of Second screen -->

  </StackLayout>
</template>

<script>
import ViewsVouchersTab from './ViewsVouchersTab.vue'

import VouchersService from '@/services/VouchersService'
const vouchersService = new VouchersService()

export default {
  name: 'ViewsVouchers',
  props: {
    visible: Boolean
  },
    components:{
    ViewsVouchersTab
  },
  watch:{
    visible: function(){
      this.state=false;//Resets to first state when opened
    }
  },
  mounted(){
               vouchersService.list().then((data)=>{
                console.log("I am a voucher")
                this.download = data;
               })
  },
    data(){
    return {
    'state': false,
    'selected': false,
    'download':[]
  }
},
  methods: {
    item_filled: function(index){

      //console.log(this.download[index].itemchecked);
      var items = false;
            this.download.forEach(function(element) {
        if(element.itemchecked){
                items = true;
        }
      });

            if(items){
              this.selected=true;
            }else{
              this.selected=false;
            }

    },
    send_request: function(){
      //Your request has been made and sent to our appointment people.
      var error=false; // Were using this to only display one page to see if it was a success, as were looping through
      this.download.forEach(function(element) {
        if(element.itemchecked){
          //Make the request for the elemnt as the selected ones go here
          vouchersService.redeem(element._id).then((data)=>{
            if(data.status==true){
              //Successfully redeemed one
            }else{
              error=true;
              alert(data.message);
            }
          })
        }
      });

      if(!error){
        //Change to you have successfully been sent page
        this.state=true;
      }
    },

    home: function() {

              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
.view-vouchers{
  .title-label{
color: #ffffff;
font-family: "Audi Type";
font-size: 13px;
font-weight: 700;
  }
  .validuntil-label{

color: #ffffff;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
  }
  .circle-button{
width: 68px;
height: 68px;
border-width: 4px;
border-color: white;

text-align: right;
vertical-align: right;

  border-radius: 100%;
  display: inline-block;
  }




  .lbl-selectvehicle{
    color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;

    padding-bottom: 9;
    padding-left: 1;
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

    .redeem{
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
