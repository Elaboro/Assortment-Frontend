<template>

  <b-col class="col-4">
    <b-list-group vertical header="Menu"
      v-for="item in category_list"
    >
      <b-button block squared variant="outline-info"
        @click="selectCategory(item.id)"
      >{{ item.name }}</b-button>
    </b-list-group>
  </b-col>

</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue';
import { Category } from '../api/type/Type';

export default defineComponent({
  props: {
    category_list: {
      type: Array as PropType<Category[]>,
      required: true,
    }
  },
  methods: {
    selectCategory(id: Category["id"]) {
      this.$emit("selection", id);
    }
  }
});
</script>

<style>
</style>