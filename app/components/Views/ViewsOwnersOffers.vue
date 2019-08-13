<template>
  <StackLayout backgroundColor="#F2F2F2" ref="initialContainer" class="OwnersOffers" :visibility="visible?'visible':'collapse'">
  <button @tap="home()" text="home"></button>

<ScrollView id="scroll" orientation="vertical" isEnabled="true" width="100%" height="100%">
        <StackLayout width="100%" height="8000">               



            <StackLayout v-for="item in download" :key="item.id" :item="item">
  <StackLayout height="260" width="90%" >
  <StackLayout stretch="aspectFill" :backgroundImage="item.image" height="224" width="100%" class="imagelayout" backgroundColor="gray"></StackLayout>
    <Label class="lbl-title" HorizontalAlignment="center" :text="item.title" :style="item.title_style"/>
  </StackLayout>
   <StackLayout  height="9" width="100%" backgroundColor="white"></StackLayout>
  </StackLayout>


                  </StackLayout>
    </ScrollView>



</StackLayout>
</template>

<script>
import ContentBlockService from '@/services/ContentBlockService'
const contentBlockService = new ContentBlockService()
export default {
  name: 'ViewsOwnersOffers',
  props: {
    visible: Boolean
  },
    data(){
    return {
    'download':[]
    }
  },
    mounted(){
                     contentBlockService.load("owners-offers").then((data)=>{
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
.OwnersOffers{
  .tab{
  }
  imagelayout{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  lbl-title{
verticalAlignment: center;
color: #000000;
font-family: "Audi Type";
font-size: 15px;
font-weight: 400;
  }
}
</style>
