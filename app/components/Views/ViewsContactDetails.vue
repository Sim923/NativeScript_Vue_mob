<template>
  <StackLayout width="100%" height="100%" ref="initialContainer" class="VehicleDetails">

<ScrollView id="scroll" orientation="vertical" isEnabled="true" width="100%" height="100%">
        <StackLayout width="100%" height="8000">   


      <Label class="lbl-titles" text="Title"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

      <Label class="lbl-titles" text="First Name"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Surname"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Address Line 1"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Address Line 2"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Town"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Country"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Postcode"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Telephone"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Mobile"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Email"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="My Audi Centre"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Preferred Service Centre"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

          <Label class="lbl-titles" text="Change Password"/>
    <TextField class="txt-input" width="100%" height="18"> <!-- Text Box --> </TextField>
    <StackLayout backgroundColor="#707070" class="bottomborder"></StackLayout>

<StackLayout style="padding-top:24;" >
  <DockLayout width="100%" height="39" stretchLastChild="false">
 <button dock="left" class="btn" width="135" height="100%" text="Edit"></button>

  <button dock="right" class="btn-cancel" width="135" height="100%" text="Back"></button>
</DockLayout>
</StackLayout>


  <button @tap="home()" text="home"></button>
        </StackLayout>
      </ScrollView>

  </StackLayout>
</template>

<script>
export default {
  name: 'ViewsContactDetails',
  props: [
    'download'
  ],
  mounted(){

  },
  methods: {
    home: function() {
              this.$emit('home');
    }
  }
}
</script>

<style lang="scss">
.VehicleDetails{

  .lbl-titles{
    color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
  }

    .btn-bottomborder{
  height: 1;
  width: 100%;
  padding-top: 8;
  paddig-bottom: 8;
}
}
</style>
