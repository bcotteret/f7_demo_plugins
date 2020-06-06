<template>
  <f7-page name="camera">
    <!-- Top Navbar -->
    <f7-navbar large>
      <f7-nav-title>Camera Demo</f7-nav-title>
      <f7-nav-title-large>Camera</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link back icon-f7="arrow_left" text="Back"></f7-link>
      <f7-link>
          Next<f7-icon f7="arrow_right" ></f7-icon>
      </f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-block-title>Camera Action</f7-block-title>
    <f7-block strong>
      <button class="button button-fill" @click="takePicture">
          Take a Picture
      </button>
    </f7-block>
    <f7-block-title>Picture</f7-block-title>
    <f7-block >
      <img
        class="camera"
        :src="imagePath" 
        v-if='imagePath !==""'
        alt="Camera Picture"/>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
    name: 'Camera',
    data(){
       return{
           imagePath: ""
       }
    },
    methods:{
        takePicture() {
        if (navigator.camera) {
          navigator.camera.getPicture(this.setPicture, this.error, {});
        }else{
          // If the navigator.camera is not available display generic error to the user.
          this.error();
        }
      },
      // Set the picture path in the data of the vue
      // this action will automatically update the view.
      setPicture(imagePath){
        this.imagePath = imagePath;
      },
      error(){
        alert("Error while taking the picture");
      }
    }
}
</script>
<style lang="css">
 img.camera{
    width: 50%;
    display: block;
    margin: auto; 
 }
</style>