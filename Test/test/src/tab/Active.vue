<template>
<div id="container">
    <b-card-group deck >
    <b-card 
      style="max-width: 540px; margin: 0 auto; text-align: left;" 
      img-src="https://placekitten.com/300/300" 
      img-alt="Card image" 
      img-left class="mb-3"
      border-variant="secondary"
      header-bg-variant="secondary"
      header-text-variant="white"
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    </b-card-group>
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-top fill-height">Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-text>
      <span>Number 10</span><br>
      <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  
  </div>

  

</template>

<style>


</style>

