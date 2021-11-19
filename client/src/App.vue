<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    fetchData() {
      console.log('fetchData called');
    },
    delEmployee() {
      console.log('delEmployee called');
    },
  },
};
</script>

<style></style>
