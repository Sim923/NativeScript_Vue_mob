<template>
  <StackLayout height="100%" ref="initialContainer" :visibility="visible?'visible':'collapse'">


  	<StackLayout verticalAlignment="top" width="100%" height="50" backgroundColor="red">
  		<Label text="Audi Club"/>
  	</StackLayout>

<Label text="Welcome to Audi Club"/>


    <StackLayout verticalAlignment="bottom">


    <StackLayout @tap="accidentassistancebutton()" class="initial-button">
      <Label text="Accident Assistance" class="initial-button-label"></Label>
    </StackLayout>
  
    <StackLayout @tap="login()" class="initial-button">
      <Label text="Centres" class="initial-button-label"></Label>
    </StackLayout>

    <StackLayout @tap="login()" class="login-button">
      <Label text="Login" class="initial-button-label"></Label>
    </StackLayout>

    </StackLayout>

  </StackLayout>
</template>

<script>
export default {
  name: 'login-initial',
  props: {
    visible: Boolean
  },
  methods: {
    accidentassistancebutton: function(){
      this.$emit('accidentassistance');
    },
    login: function() {
      // fadeout and notify parent element when finished
      this.$refs.initialContainer.nativeView.animate({
        opacity: 0,
        duration: 500
      }).then( () => {
        console.log('emitting login')
        this.$emit('login');
      })
    }
  }
}
</script>

<style lang="scss">
// vue scoped styles are not working with this rollup config, and
// that's why we scope with this '.login' class
.login {
  .login-button{
        border-color: white;
        border-width: 1;
    color: #CB1D00;
    height: 45;
    width: 275;
    vertical-align: center;
  }


  .initial-label {
    color: white;
    horizontal-align: center;
    margin-bottom: 80;
  }

  .initial-button {
            border-color: white;
        border-width: 1;

    color: #CB1D00;
    height: 45;
    width: 275;
    vertical-align: center;
  }

  .initial-button-label {
    horizontal-align: center;
    font-weight: bold;
  }
}

.platform-ios .login {
  .initial-label {
    font-size: 40;
    letter-spacing: 0.2;
  }
}

.platform-android .login {
  .initial-container {
    margin-top: 290;
  }

  .initial-label {
    font-size: 36;
    letter-spacing: 0.35;
  }
}

</style>
