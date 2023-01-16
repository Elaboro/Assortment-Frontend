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

      <MenuList
        :category_list="categoryList"
        @selection="selectCategory"
      />
      <AssortmentList :assortment_list="assortmentList"/>

    </b-row>
  </b-container>

</template>

<script lang="ts">
import MenuList from '@/components/MenuList.vue';
import AssortmentList from '@/components/AssortmentList.vue';
import { defineComponent } from 'vue';

import {
  Assortment,
  Category,
  CategoryWithAssortment,
} from './api/type/Type';
import CategoryService from './api/CategoryService';

export default defineComponent({
  name: 'App',
  components: {
    MenuList,
    AssortmentList,
  },
  data() {
    return {
      categoryList: [] as Category[],
      assortmentList: [] as Assortment[],
      categoryWithAssortmentList: [] as CategoryWithAssortment[],
    }
  }, 
  methods: {
    async getCategoryListWithAssortment() {
      this.categoryList = this.categoryWithAssortmentList = await CategoryService.getListWithAssortment();

      const id = this.categoryWithAssortmentList[0].id;
      this.assortmentList = this.getAssortmentListById(id);
    },
    selectCategory(id: Category["id"]) {
      this.assortmentList = this.getAssortmentListById(id);
    },
    getAssortmentListById(id: Category["id"]) {
      const [ one_category ] = this.categoryWithAssortmentList.filter((category) => { 
        if(id === category.id) return category;
      });
      return one_category.assortment;
    },
  },
  async mounted() {
    this.getCategoryListWithAssortment();
  },
});
</script>

<style>
</style>