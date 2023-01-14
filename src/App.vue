<template>

  <b-container>
    <b-jumbotron>
      <template #header>Ассортимент</template>

      <template #lead>
        Это простое приложение, работающее на Vue и Bootstrap!
      </template>

      <hr class="my-4">

      <p>
        Вы можете выбрать интересующую вас категорию, и тогда вы увидите товары в ней.
      </p>
      <p>
        Создайте учетную запись для создания и редактирования категорий и продуктов!
      </p>

      <b-button class="mr-2" variant="primary" href="#">Регистрация</b-button>
      <b-button class="mr-2" variant="success" href="#">Войти</b-button>

    </b-jumbotron>

    <b-row align-v="stretch">

      <MenuList />
      <AssortmentList />

    </b-row>
  </b-container>

</template>

<script lang="ts">
import MenuList from '@/components/MenuList.vue';
import AssortmentList from '@/components/AssortmentList.vue';
import { defineComponent } from 'vue';

import AssortmentService from './api/AssortmentService';
const assortmentList = AssortmentService.getList();

export default defineComponent({
  components: {
    MenuList,
    AssortmentList,
  },
  name: 'App',
});
</script>

<style>
</style>