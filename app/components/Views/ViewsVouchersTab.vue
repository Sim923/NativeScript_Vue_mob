<template>
  <StackLayout>

  <StackLayout width="90%" height="118" style="background-position: center;background-size: cover;" :backgroundImage="download.imageBg">
      <Label class="title-label" :text="download.title" left="14" top="67.36"/>
  <Label class="validuntil-label" :text="download.dateExpires" left="14" top="91"/>
  <Button @tap="open()" horizontalAlignment="right" class="circle-button" right="21" bottom="15" text=""/>
  </StackLayout>

  <StackLayout width="90%" height="8" backgroundColor="#EEEEEE"></StackLayout>




<StackLayout :visibility="tabopen?'visible':'collapse'" width="90%">
    <Label class="lbl-selectvehicle" text="Select Vehicle"/> <!-- text -->
  <TextField class="txt-input" width="100%" height="19"> <!-- Text Box -->
  <StackLayout width="20" height="12" backgroundColor="blue" horizontalAlignment="right" verticalAlignment="center"></StackLayout> <!-- Icon -->
    </TextField>
  <StackLayout width="100%" height="13" backgroundColor="#EEEEEE"></StackLayout>

  <Label class="lbl-selectvehicle" text="Appointment Date"/> <!-- text -->

  <DatePicker width="100%" verticalAlignment="center"></DatePicker>


  <StackLayout width="100%" height="13" backgroundColor="#EEEEEE"></StackLayout>

    <Label class="lbl-selectvehicle" text="Appointment Time"/> <!-- text -->

  <!--<TextField class="txt-input" width="100%" height="19"> ext Box -->
<TimePicker width="100%" verticalAlignment="center"></TimePicker>

  <StackLayout width="20" height="12" backgroundColor="blue" horizontalAlignment="right" verticalAlignment="center"></StackLayout> <!-- Icon -->
    </TextField>
<StackLayout height="10" width="100%" backgroundColor="#EEEEEE"></StackLayout>

</StackLayout>


  </StackLayout>
</template>

<script>
import ContentBlockService from '@/services/ContentBlockService'
const contentBlockService = new ContentBlockService()

export default {
  name: 'ViewsVouchersTab',
  props: [
    'download',
    'index'
  ],
  mounted(){
  },
  data(){
    return{
      tabopen: false
      
    }
  },
  methods: {
    open: function(){
      this.download.itemchecked = !this.tabopen;
      this.$emit("itemfilled", this.index)
      this.tabopen = !this.tabopen;
    },
    close: function(){
this.tabopen = false;
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
}
</style>
