<template>
<StackLayout backgroundColor="#EEEEEE" ref="page" :class="pageClasses" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
<!--   <ActionBar id="actbr" class="action-bar" style="font-size:24px">
        <FlexboxLayout>
            <Image src="res://image-41" class="action-image"></Image>
        <Label style="color:white;font-size:24px" text="Audi Club"></Label>
        </FlexboxLayout>
    </ActionBar> -->
<StackLayout width="100%" height="59" backgroundColor="red" :visibility="(state!='ViewsMenu')?'visible':'collapse'">

  <GridLayout columns="44, auto">
  <StackLayout @tap="backbutton()" height="100%" col="0" width="100%" backgroundColor="gray">
<Label text="<"/>
  </StackLayout>

      <StackLayout height="100%" col="1" width="100%" backgroundColor="white" >
            <Label text="Hiya"/>
  </StackLayout>
</GridLayout>
</StackLayout>

<StackLayout width="100%" height="50" :visibility="(state=='ViewsMenu')?'visible':'collapse'">

  <GridLayout height="100%" columns="100, auto">
  <StackLayout height="100%" col="0" width="100%" backgroundColor="red">

<StackLayout verticalAlignment="center">
    <Image width="62" height="21" src="res://logo" horizontalAlignment="center" />
</StackLayout>

  </StackLayout>

      <StackLayout height="100%" col="1" width="100%" backgroundColor="green" >
            <Label text="Audi Club NEW TEST" style="color:#FFFFFF"/>
  </StackLayout>
</GridLayout>
</StackLayout>

  <StackLayout>


    <ViewsMenu ref="ViewsMenu"
@switchViewsVouchers="switchState('ViewsVouchers')"
@switchViewsEarnRewards="switchState('ViewsEarnRewards')"
@switchViewsOwnersOffers="switchState('ViewsOwnersOffers')"
@switchViewsCosmeticRepairs="switchState('ViewsCosmeticRepairs')"
@switchViewsAccidentAssistance="switchState('ViewsAccidentAssistance')"
@switchViewsLittleVIPs="switchState('ViewsLittleVIPs')"
@switchViewsNews="switchState('ViewsNews')"
@switchViewsLocations="switchState('ViewsLocations')"
@switchViewsAudiConnect="switchState('ViewsAudiConnect')"
@switchViewsFiveStarService="switchState('ViewsFiveStarService')"
@switchViewsMyAccount="switchState('ViewsMyAccount')"
     :visible="state === 'ViewsMenu'">
     </ViewsMenu>
    
    <ViewsVouchers ref="ViewsVouchers" @home="switchState('ViewsMenu')" :visible="state === 'ViewsVouchers'"></ViewsVouchers>
    <ViewsEarnRewards ref="ViewsEarnRewards" @home="switchState('ViewsMenu')" :visible="state === 'ViewsEarnRewards'"></ViewsEarnRewards>
    <ViewsOwnersOffers ref="ViewsOwnersOffers" @home="switchState('ViewsMenu')" :visible="state === 'ViewsOwnersOffers'"></ViewsOwnersOffers>
    <ViewsCosmeticRepairs ref="ViewsCosmeticRepairs" @home="switchState('ViewsMenu')" :visible="state === 'ViewsCosmeticRepairs'"></ViewsCosmeticRepairs>
   
    <ViewsAccidentAssistance ref="ViewsAccidentAssistance" @home="switchState('ViewsMenu')" :visible="state === 'ViewsAccidentAssistance'"></ViewsAccidentAssistance>

    <ViewsLittleVIPs ref="ViewsLittleVIPs" @home="switchState('ViewsMenu')" :visible="state === 'ViewsLittleVIPs'"></ViewsLittleVIPs>
    <ViewsNews ref="ViewsNews" @home="switchState('ViewsMenu')" :visible="state === 'ViewsNews'"></ViewsNews>
    <ViewsLocations ref="ViewsLocations" @home="switchState('ViewsMenu')" :visible="state === 'ViewsLocations'"></ViewsLocations>
    <ViewsAudiConnect ref="ViewsAudiConnect" @home="switchState('ViewsMenu')" :visible="state === 'ViewsAudiConnect'"></ViewsAudiConnect>
    <ViewsFiveStarService ref="ViewsFiveStarService" @home="switchState('ViewsMenu')" :visible="state === 'ViewsFiveStarService'"></ViewsFiveStarService>





    <ViewsMyAccount ref="ViewsMyAccount"
    @home="switchState('ViewsMenu')"
    @switchViewsVehicleDetails="switchState('ViewsVehicleDetails')"
    @switchViewsContactDetails="switchState('ViewsContactDetails')"
    @switchViewsEnquiryForm="switchState('ViewsEnquiryForm')"
    :visible="state === 'ViewsMyAccount'"></ViewsMyAccount>

<!--     <ViewsVehicleDetails @download='download' ref="ViewsVehicleDetails" @home="switchState('ViewsMyAccount')" :visible="state === 'ViewsVehicleDetails'"></ViewsVehicleDetails>

    <ViewsContactDetails ref="ViewsContactDetails" @home="switchState('ViewsMyAccount')" :visible="state === 'ViewsContactDetails'"></ViewsContactDetails>

    <ViewsEnquiryForm ref="ViewsEnquiryForm" @home="switchState('ViewsMyAccount')" :visible="state === 'ViewsEnquiryForm'"></ViewsEnquiryForm> -->


</StackLayout>

</StackLayout>
</template>
<script>
import * as platformModule from 'tns-core-modules/platform'
import * as enums from 'ui/enums'

import ViewsMenu from './ViewsMenu.vue'

import ViewsVouchers from './ViewsVouchers.vue'
import ViewsEarnRewards from './ViewsEarnRewards.vue'
import ViewsOwnersOffers from './ViewsOwnersOffers.vue'
import ViewsCosmeticRepairs from './ViewsCosmeticRepairs.vue'
import ViewsAccidentAssistance from './ViewsAccidentAssistance.vue'

import ViewsLittleVIPs from './ViewsLittleVIPs.vue'
import ViewsNews from './ViewsNews.vue'
import ViewsLocations from './ViewsLocations.vue'
import ViewsAudiConnect from './ViewsAudiConnect.vue'
import ViewsFiveStarService from './ViewsFiveStarService.vue'

import ViewsMyAccount from './ViewsMyAccount.vue'

import ViewsVehicleDetails from './ViewsVehicleDetails.vue'
import ViewsContactDetails from './ViewsContactDetails.vue'
import ViewsEnquiryForm from './ViewsEnquiryForm.vue'

export default {
  components: {
    ViewsMenu,
    ViewsVouchers,
ViewsEarnRewards,
ViewsOwnersOffers,
ViewsCosmeticRepairs,
ViewsAccidentAssistance,
ViewsLittleVIPs,
ViewsNews,
ViewsLocations,
ViewsAudiConnect,
ViewsFiveStarService,
ViewsMyAccount
  },
  data() {
    return {
      state: 'ViewsMenu',
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
    switchState: function(state){
      console.log(state)
      this.state=state;
    },
    backbutton: function(){
      this.state="ViewsMenu"
    }
  },
  mounted() {

    console.log('LOGIN mounted, from view class')
  }
}
</script>

<style lang="scss">
</style>