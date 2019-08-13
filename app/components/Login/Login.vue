<template>

<StackLayout ref="page" :class="pageClasses" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  <GridLayout class='login'>
    <!-- background -->
    <GridLayout ref="background" scaleX="1.4" scaleY="1.4" class="background" ></GridLayout>
    <!-- initial login button -->
    <LoginInitial height="100%" ref="loginInitial" @accidentassistance="showAccidentAssistance()" @login="showMainContent()" :visible="state === 'initial'"></LoginInitial>


    <LoginMain ref="loginMain" :visible="state === 'main'"></LoginMain>


    <!-- The fruit logo -->
   <!-- <AbsoluteLayout marginTop="-260" ref="logoContainer" class="logo-container">
      <Image translateY="0" src="res://logo_login" stretch="none"></Image>
    </AbsoluteLayout>-->

  </GridLayout>
</StackLayout>
</template>
<script>
import * as platformModule from 'tns-core-modules/platform'
import LoginInitial from './LoginInitial.vue'
import LoginMain from './LoginMain.vue'

import * as enums from 'ui/enums'

export default {
  components: {
    LoginInitial,
    LoginMain
  },
  data() {
    return {
      state: 'initial'
    }
  },
  computed: {
    pageClasses: function () {
      return {
        // add top class so we can apply styles to specific platforms
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      }
    }
  },
  methods: {
    showInit: function(){
      this.state = 'initial'
    },
    showAccidentAssistance: function(){
      this.state= 'ViewsAccidentAssistance'
    },
    showMainContent: function() {
      console.log('showMainContent')
          console.log('switching from ' + this.state + ' to main')
          this.state = 'main'
    },
  },
  mounted() {
    console.log('LOGIN mounted')
  }
}
</script>

<style lang="scss">
.login {
  .background {
    width: 100%;
    height: 100%;
    background-color: blue;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .logo-container {
    horizontal-align: center;
    height: 80;
  }
}
</style>
