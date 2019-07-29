<template>
  <div>
    <b-form-select v-model="selected" class="mb-6" style="width: 400px;">
      <option :value="null">Please select card type</option>
      <option value="BANNER_PROMO_CARD_V1" style="font-size: 13px;">BANNER_PROMO_CARD_V1</option>
      <option value="GROUPED_CAROUSEL_CARD_V2" style="font-size: 13px;">GROUPED_CAROUSEL_CARD_V2</option>
    </b-form-select>

    <div class="mt-2">Selected: <strong>{{ selected }}</strong></div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null
      }
    }
  }
</script>