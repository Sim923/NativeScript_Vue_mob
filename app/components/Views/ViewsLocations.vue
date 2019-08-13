<template>
  <StackLayout width="90%" ref="initialContainer" class="Locations" :visibility="visible?'visible':'collapse'">

<ScrollView id="scroll" orientation="vertical" isEnabled="true" width="100%" height="100%">
        <StackLayout width="100%" height="8000">  

    <Label text="Find Nearest Centre" class="lbl-fnc"></Label>
    <Label text="Enter Postcode" class="lbl-ep"></Label>

    <TextField width="90%" class="txt-postcode" hint=""/>
    <Button class="btn-ucl" text="Use Current Location"/>

<StackLayout height="50" width="90%" backgroundColor="white"/>
<!--<StackLayout>

  <StackLayout class="tab-locations">
    <Label class="tab-location-title" text="Audi City London"/>
  </StackLayout>

<StackLayout height="5" width="90%" backgroundColor="white"/>



  <StackLayout class="tab-locations">
    <Label class="tab-location-title" text="Bradford Audi"/>
  </StackLayout>


<StackLayout height="6" width="90%" backgroundColor="white"/>

<StackLayout height="225" width="90%" backgroundColor="red"/>
</StackLayout>

<Label text="54-75 Piccadilly"/>
<Label text="London"/>
<Label text="Greater London"/>
<Label text="W1J 8HU"/>

<FlexBoxLayout>
  <Label text="<INSERT PHONE LOGO HERE>"/>
  <Label text="0207 495 0000"/>
</FlexBoxLayout>

<FlexBoxLayout>
  <Label text="<INSERT MAP LOGO HERE>"/>
  <Label text="Map"/>
</FlexBoxLayout>

<FlexBoxLayout>
  <Button height="35" width="50%" text="Sales" backgroundColor="white"/>
  <Button height="35" width="50%" text="Service" backgroundColor="gray"/>
</FlexBoxLayout>

<FlexBoxLayout>
  <Label text="<INSERT PHONE LOGO HERE>"/>
  <Label text="0207 495 0000"/>
</FlexBoxLayout>

<GridLayout columns="2, auto, *" rows="7, auto, *" width="100%" height="132" backgroundColor="lightgray" >
    <Label text="Monday" row="0" col="0" backgroundColor="red"/>
    <Label text="Tuesday" row="1" col="0" backgroundColor="green"/>
    <Label text="Wednesday" row="2" col="0" backgroundColor="blue"/>
    <Label text="Thursday" row="3" col="0" backgroundColor="yellow"/>
    <Label text="Friday" row="4" col="0" backgroundColor="orange"/>
    <Label text="Saturday" row="5" col="0" backgroundColor="pink"/>
    <Label text="Sunday" row="6" col="0" backgroundColor="purple"/>

    <Label text="09:00 - 19.00" row="0" col="1" backgroundColor="green"/>
    <Label text="09:00 - 19.00" row="1" col="1" backgroundColor="green"/>
    <Label text="09:00 - 19.00" row="2" col="1" backgroundColor="blue"/>
    <Label text="09:00 - 19.00" row="3" col="1" backgroundColor="yellow"/>
    <Label text="09:00 - 19.00" row="4" col="1" backgroundColor="orange"/>
    <Label text="09:00 - 19.00" row="5" col="1" backgroundColor="pink"/>
    <Label text="09:00 - 19.00" row="6" col="1" backgroundColor="purple"/>



  </GridLayout>-->

            <StackLayout v-for="item in download" :key="item._id" :item="item">
              <ViewsLocationsTab :download="item" ref="viewsLittleVIPsTab"></ViewsLocationsTab>
              <StackLayout height="10" width="100%"/>
            </StackLayout>


  </StackLayout>


</ScrollView>

  </StackLayout>
</template>

<script>
import LocationService from '@/services/LocationService'
const locationService = new LocationService()
import ViewsLocationsTab from './ViewsLocationsTab.vue'

export default {
  name: 'ViewsLocations',
  props: {
    visible: Boolean
  },
    components:{
    ViewsLocationsTab
  },
  data(){
    return {
    'download': []
    }
  },
    mounted(){
               locationService.list().then((data)=>{
                this.download = data.data;
      })
  },
  methods: {
  }
}
</script>

<style lang="scss">
.Locations{
  .lbl-fnc{
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
padding-top: 14;
padding-left: 16;
  }
  .lbl-ep{
color: rgba(0, 0, 0, 0.5);
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
padding-top: 11;
padding-left:16;
  }
  .txt-postcode{
padding-top:9;
    border-bottom-width: 1;
    border-bottom-color: black;

    color: #1a1a1a;
font-family: "Audi Type";
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
height:20;
  }

    .btn-ucl{

    width: 100%;
height: 39;
border: 1 solid #000000;
background-color: #000000;

    color: #ffffff;
font-family: "Audi Type";
font-size: 15px;
font-weight: 700;
  }

.tab-locations{
  width:100%;
height: 54;
background-color: #f2f2f2;
}

.tab-location-title{
  color: #000000;
font-family: "Audi Type";
font-size: 18;
font-weight: 400;
padding-left:20;
verticalAlignment: center;
}


}
</style>