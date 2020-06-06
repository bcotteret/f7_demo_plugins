<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large>
      <f7-nav-title>F7 Demo Plugins</f7-nav-title>
      <f7-nav-title-large>F7 Demo Plugins</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link icon-f7="barcode" text="Scan" href="/scanner/"></f7-link>
      <f7-link @click="openDialog">Right Link</f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-block strong>
      <p>
        <h3>Demo Framework7 app.</h3> 
        Please use links below.
      </p>
    </f7-block>
    <f7-block-title>Features</f7-block-title>
    <f7-list>
      <f7-list-item title="Barcode Scanner">
        <f7-icon slot="media" f7="barcode"></f7-icon>
        <f7-link href="/scanner/" icon-f7="arrow_right_circle"></f7-link>
      </f7-list-item>
      <f7-list-item title="Camera">
        <f7-icon slot="media" f7="camera"></f7-icon>
        <f7-link href="/camera/" icon-f7="arrow_right_circle"></f7-link>
      </f7-list-item>
      <f7-list-item title="Geolocation">
        <f7-icon slot="media" f7="location"></f7-icon>
        <f7-link href="/scanner/" icon-f7="arrow_right_circle"></f7-link>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    openDialog() {
      this.$f7.dialog.alert('Hello There!')
    }
  }
}
</script>