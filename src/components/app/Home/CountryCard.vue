<template>
  <al-card link :to="`/detail/${country.name}`" elevated rounded>
    <template #image>
      <al-img
        aspect-ratio="5 / 3"
        :alt="`${country.name}'s flag`"
        width="100%"
        max-height="250px"
        :src="country.flag"
      />
    </template>
    <template #title>
      {{ country.name }}
    </template>

    <template #text>
      <ul class="list-style-none mt-3 mb-6">
        <li>
          <span class="font-semibold text-sm mr-2">Population:</span>
          <span class="text-sm font-light">{{
            country.population | prettyNumbers
          }}</span>
        </li>
        <li>
          <span class="font-semibold text-sm mr-2">Region:</span>
          <span class="text-sm font-light">{{ country.region }}</span>
        </li>
        <li>
          <span class="font-semibold text-sm mr-2">Capital:</span>
          <span class="text-sm font-light">{{ country.capital }}</span>
        </li>
      </ul>
    </template>
  </al-card>
</template>

<script>
import AlCard from "../../core/Card/AlCard.vue";
import AlImg from "../../core/Image/AlImg.vue";
import Presenter from "../../../mixins/Presenter";

export default {
  components: { AlCard, AlImg },
  name: "CountryCard",
  mixins: [Presenter],
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>
