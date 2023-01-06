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
      <b-col class="col-4">
        <b-list-group vertical header="Menu">
          <b-button block squared variant="outline-info">item</b-button>
          <b-button block squared variant="outline-info">item</b-button>
        </b-list-group>
      </b-col>

      <b-col class="col-8">
        <div class="row">

          <div class="col-sm-6 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">name</h5>
                <p class="card-text">description</p>
                <a href="#" class="btn btn-primary">button</a>
              </div>
            </div>
          </div>

        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
</style>