<template>
  <div id="nav">
    <b-card no-body>
      <b-tabs v-model="tabIndex" card align="center" justified>
        <b-tab title="Active Card" :title-link-class="linkClass(0)">
          <active />
        </b-tab>
        <b-tab title="Scheduled Card" :title-link-class="linkClass(1)">
          <schedule />
        </b-tab>
        <b-tab title="New Card" :title-link-class="linkClass(2)">
          <addCard />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import active from './tab/Active'
import schedule from './tab/Schedule'
import addCard from './tab/AddCard'


export default {
  name: 'form',
  components: {
    active,
    schedule,
    addCard
  }, 
  data() {
      return {
        tabIndex: 0
    }
  },
  methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-white', 'border border-bottom-0']
        } else {
          return ['bg-light', 'text-info', 'border border-info border-bottom-0']
        }
      }
    }
  }
</script>

<style>
b-tab {
  padding: 10px;
}
</style>
