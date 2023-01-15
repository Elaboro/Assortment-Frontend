<template>

  <b-col class="col-8">
    <div class="row">

      <div class="col-sm-6 mb-3"
        v-for="assortment in assortment_list"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ assortment.name }}</h5>
            <p class="card-text">{{ assortment.description }}</p>
            <a href="#" class="btn btn-primary">В корзину</a>
          </div>
        </div>
      </div>

    </div>
  </b-col>

</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue';
import { Assortment } from '../api/type/Type';

export default defineComponent({
  props: {
    assortment_list: {
      type: Array as PropType<Assortment[]>,
      required: true,
    }
  }
});
</script>

<style>
</style>