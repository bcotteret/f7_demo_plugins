<template>
    <f7-page name="localisation">
        <!-- Top Navbar -->
        <f7-navbar large>
        <f7-nav-title>Geo Localisation</f7-nav-title>
        <f7-nav-title-large>Geo Localisation</f7-nav-title-large>
        </f7-navbar>
        <!-- Toolbar-->
        <f7-toolbar bottom>
            <f7-link back icon-f7="arrow_left" text="Back"></f7-link>
            <f7-link href="/scanner/">
                Next<f7-icon f7="arrow_right"></f7-icon>
            </f7-link>
        </f7-toolbar>        
        <f7-preloader v-if="isLoading" :size="42" color="white"></f7-preloader>  
        <div id="map"></div>
    </f7-page>
</template>
<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix for icon problem with webpack
  // See https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-261904061
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
export default {
    name: 'Localisation',
    data(){
        return{
            map: null,
            isLoading: true
        }
    },
    methods: {
        stopLoading(){
            this.isLoading = false;
        },
        getUserLocation(){
            // Retrieve the current user location
            if (navigator.geolocation) {
            // If the geolocation is available
            navigator.geolocation.getCurrentPosition((position) => {
                // Get the current user position, and create a marker on the map.
                // Pssst, look at the position object there is a lot of more information
                let user_position = [position.coords.latitude, position.coords.longitude];
                L.marker(user_position).addTo(this.map);

                // Set the view on the user position at a correct zoom level
                this.map.setView(user_position, 18);
                this.stopLoading();
            }, () => {
                // If the geolocation plugin got no answer or if we reach the timeout
                this.stopLoading();
                alert("Position is not available");
            });
            }else{
            // If the browser is not compatible
            alert("Position can not be retrived");
            this.stopLoading();
            }
        }
    },
    mounted(){
      // Init the leaflet map
      this.map = L.map('map').setView([47.47121, -0.55198], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      this.getUserLocation();
    },
    beforeDestroy(){
      // Destroy the map object on leave
      if(!(this.map === undefined)){
        this.map.remove();
      }
    }
}
</script>
import 
<style scoped>
  #map {
    width: 100%;
    height: calc(100vh - 50%);
    z-index: 1;
  }
</style>