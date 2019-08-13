<template>


  <StackLayout backgroundColor="black" ref="initialContainer" class="MainMenu" :visibility="visible?'visible':'collapse'">


<GridLayout rows="*, auto" width="100%" height="100%">
    <StackLayout row="0" width="90%">
  <button style="padding-top:43;" class="btn-menuitem" @tap="navPage('ViewsVouchers')" text="Vouchers"></button>
  <StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsEarnRewards')" text="Earn Rewards"></button>
  <StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsOwnersOffers')" text="Owners Offers"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsCosmeticRepairs')" text="Cosmetic Repairs"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsAccidentAssistance')" text="Accident Assistance"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsLittleVIPs')" text="Little VIPs"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsNews')" text="News"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsLocations')" text="Locations"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsAudiConnect')" text="Audi Connect"></button>
<StackLayout backgroundColor="#707070" class="btn-bottomborder"></StackLayout>
  <button class="btn-menuitem" @tap="navPage('ViewsFiveStarService')" text="Five Star Service"></button>
    </StackLayout>

<StackLayout row="1" class="group-bottombuttons">
  <DockLayout width="100%" height="35"stretchLastChild="false">

  <StackLayout dock="left" @tap="myaccount()" backgroundColor="red" height="100%" width="123">
    <Label text="My Account"/>
  </StackLayout>

    <StackLayout dock="right" @tap="logout()" backgroundColor="blue" height="100%" width="123">
          <Label text="Logout"/>
  </StackLayout>
  </DockLayout>
</StackLayout>

</GridLayout>
</StackLayout>

</template>

<script>
import LoginService from '@/services/LoginService'


const loginService = new LoginService()

export default {
  name: 'ViewsMenu',
  props: {
    visible: Boolean
  },
  methods: {
    logout: function(){
      loginService.logout()
      this.$router.push('/login')
    },
    myaccount: function(){
      this.$emit('switchViewsMyAccount')
    },
    navPage: function(page) {
      console.log(page);
              this.$emit('switch'+page);
    }
  }
}
</script>

<style lang="scss">
.MainMenu{
  DockLayout{
    vertical-align: bottom;
  }
.btn-menuitem{
  color: #ffffff;
font-family: "Audi Type";
font-size: 18px;
font-weight: 400;
horizontal-align: left;
}
.btn-bottomborder{
  height: 1;
  width: 100%;
  padding-top: 8;
  paddig-bottom: 8;
}
.group-bottombuttons{
  padding-bottom: 12;
  padding-right: 18;
  padding-left: 18;
}
}
</style>