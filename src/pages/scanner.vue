<template>
  <f7-page name="scanner">
    <!-- Top Navbar -->
    <f7-navbar large>
      <f7-nav-title>Scanner Demo</f7-nav-title>
      <f7-nav-title-large>Scanner</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link back icon-f7="arrow_left" text="Back"></f7-link>
      <f7-link href="/camera/">
          Next<f7-icon f7="arrow_right" ></f7-icon>
      </f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-block-title>Scan Action</f7-block-title>
    <f7-block strong>
      <button class="button button-fill" @click="scan">
          Read Barcode
      </button>
    </f7-block>
    <f7-block-title>Scan informations</f7-block-title>
    <f7-block >
      <p class="info">
          <span class="h1">
              <f7-icon f7="barcode"></f7-icon>
              Barcode:
          </span>
          {{barcode}}
      </p>
    </f7-block>

  </f7-page>
</template>
<script>
export default {
  name: 'Scanner',
  data(){
    return {
      barcode: ""
    }
  },
  methods: {
    scan(){
      let self = this; // refers this to the Vue instance 
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          //alert("We got a barcode\n Result: " + result.text + "\n"); result is JSON object
            self.barcode = result.text;            
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        // Camera options 
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
        );
    }
  }
}
</script>
<style lang="css">
  .info{
    font-size: 1.25rem;
  }
  .h1 {
    font-weight: bold;
  }
</style>