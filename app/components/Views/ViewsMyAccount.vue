<template>
  <StackLayout width="90%" height="100%" ref="viewsMyAccount" class="MyAccount" :visibility="visible?'visible':'collapse'">


<StackLayout :visibility="(accountstate === 'first')?'visible':'collapse'"> <!-- Layout -->

    <Label class="tb-title" text="Vehicle Details"></Label>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>

  <Label class="vd-co" text="Current Owner?"/>
  <Label class="vd-co" text="Yes No"/>
  <StackLayout v-for="item in download.cars" :key="item._id" :item="item">

<Label class="vd-title" :text="item.Model"></Label>
  <DockLayout width="100%" height="39"stretchLastChild="false">
  <GridLayout dock="left" height="39" width="200" columns="125,5,70, 25">
      <!-- Do a grid layout for the cars -->
      <StackLayout height="100%" width="125" backgroundColor="red" col="0">
        <Label :text="item.Regno"/>

      </StackLayout>
      <Button class="btn" col="2" @tap="vehicledetails()" width="70" text="View"></Button>
  </GridLayout>

  <GridLayout dock="right" height="39" width="45" columns="17, 11, 17">

      <StackLayout height="100%" width="17" backgroundColor="red" col="0"></StackLayout>
      <StackLayout height="100%" width="17" backgroundColor="red" col="2"></StackLayout>
  </GridLayout>
</DockLayout>


</StackLayout>



<StackLayout> <!-- Begining of personal details -->
      <Label class="tb-title" text="Personal Details"></Label>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>

<StackLayout width="100%" height="3"></StackLayout>
    <Label class="pd-lbl-title" text="First Name"></Label>
    <Label class="pd-lbl-data" :text="download.Firstnam"></Label>
<StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

    <Label class="pd-lbl-title" text="Surname"></Label>
<Label class="pd-lbl-data" :text="download.Surname"></Label>
<StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

    <Label class="pd-lbl-title" text="Mobile"></Label>
<Label class="pd-lbl-data" :text="download.mobile"></Label>
<StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

    <Label class="pd-lbl-title" text="Email"></Label>
<Label class="pd-lbl-data" :text="download.Email"></Label>
<StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>


</StackLayout>
<StackLayout width="100%" height="22"></StackLayout>
    <Button class="btn" @tap="contactdetails()" text="View More Details"></Button>
    <StackLayout width="100%" height="9"></StackLayout>
    <Button class="btn" @tap="enquiryform()" text="Contact Us"></Button>



  <button @tap="home()" text="home"></button>

</StackLayout>

<StackLayout :visibility="(accountstate === 'ViewsVehicleDetails')?'visible':'collapse'"> <!-- second-->
  <ViewsVehicleDetails :download='car' ref="ViewsVehicleDetails" @home="returnaccountstate()"></ViewsVehicleDetails>
  </StackLayout>

  <StackLayout :visibility="(accountstate === 'ViewsContactDetails')?'visible':'collapse'"> <!-- second-->
  <ViewsContactDetails :download='car' ref="ViewsContactDetails" @home="returnaccountstate()"></ViewsContactDetails>
  </StackLayout>

  <StackLayout :visibility="(accountstate === 'ViewsEnquiryForm')?'visible':'collapse'"> <!-- second-->
  <ViewsEnquiryForm :visible="accountstate === 'ViewsEnquiryForm'" :download='car' ref="ViewsEnquiryForm" @home="returnaccountstate()"></ViewsEnquiryForm>
  </StackLayout>

  </StackLayout>
</template>

<script>
import ViewsVehicleDetails from './ViewsVehicleDetails.vue'
import ViewsContactDetails from './ViewsContactDetails.vue'
import ViewsEnquiryForm from './ViewsEnquiryForm.vue'

import AccountsService from '@/services/AccountsService'
const accountsService = new AccountsService()
export default {
  name: 'ViewsMyAccount',
  props: {
    visible: Boolean
  },
    components: {
ViewsVehicleDetails,
ViewsContactDetails,
ViewsEnquiryForm
  },
      watch:{
    visible: function(){
      this.accountstate='first';//Resets to first state when opened
    }
  },
  mounted(){
    console.log("mounted my account")
               accountsService.get().then((data)=>{
                console.log("accoutns service worked")
                console.log(data.Firstnam)
                this.download = data;
               })
  },
      data(){
    return {
    'accountstate': 'first',
    'download':[],
    'car':[]
  }
},
  methods: {
    vehicledetails: function(){
      this.car=this.download.cars[0];
      console.log(this.car.Model)
      this.accountstate = 'ViewsVehicleDetails';
    //this.$emit('switchViewsVehicleDetails', download);
    },
    returnaccountstate: function(){
      this.accountstate = 'first';
    },
    contactdetails: function(){
this.accountstate = 'ViewsContactDetails';
    },
    enquiryform: function(){
      this.accountstate = 'ViewsEnquiryForm';
      //this.$emit('switchViewsEnquiryForm');
    },
    home: function() {
              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
.MyAccount{
  .vd-title{
color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-bottom: 9;
  }
  .vd-reg{
color: #1a1a1a;
font-family: "Audi Type";
font-size: 20px;
font-weight: 700;
text-transform: uppercase;
  }
  .vd-yesno{

  }
  .vd-co{
    color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 700;
    text-align:right;
    horizontal-alignment: right;
  }

  .tb-title{
    color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
padding-bottom:8;
  }
  .pd-lbl-title{
    color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-top:18;
padding-bottom: 9;
  }
  .pd-lbl-data{
    color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-bottom: 4;
  }

  .btn-bottomborder{
  height: 1;
  width: 100%;
  padding-top: 8;
  paddig-bottom: 8;
}
    .bottomborder{
  height: 1;
  width: 100%;
  padding-top: 8;
  paddig-bottom: 8;
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
