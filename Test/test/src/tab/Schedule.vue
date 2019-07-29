<template>

  <div class="row">
    <div class="col-6">
      <h3>Draggable</h3>
      <draggable
        v-model="rows"
        tag="v-layout"
        class="row wrap fill-height align-center sortable-list"
    
      >
        <v-flex
          v-for="row in rows"
          :key="row.index"
          class="sortable"
          xs12
          my-2
          
        >
          <draggable
            :list="row.items"
            tag="v-layout"
            :group="{ name: 'row' }"
            class="row wrap justify-center"
          >
            <v-flex
              v-for="item in row.items"
              :key="item.title"
              pa-6
              class="row-v "
            >
              
              <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-top fill-height">{{ item.title }}</v-card-title>
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

            </v-flex>
          </draggable>
        </v-flex>
      </draggable>
    </div>
 
    <rawDisplayer class="col-6" :value="rows" title="List" />
  
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default {
  name: "functional",
  display: "Functional third party",
  order: 17,
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      rows: [
        {
          index: 1,
          items: [
            {
              title: "item 1"
            }
          ]
        },
        {
          index: 2,
          items: [
            {
              title: "item 2"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
/*--background--*/
.row-v {
  height: 200px;
  width: 200px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
/*--Card--*/
.sortable {
    margin-left: 350px;
}
.row-item {
  height: 100px;
  width: 400px;
  margin: 25px;
  background: rgb(139, 193, 238);  
}
</style>