<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <h3>Willkommen bei der Service Worker Untersuchung!</h3>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"> </CardView>
  </div>
</template>

<script>
import dotenv from 'dotenv';
import axios from 'axios';
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
      serverAddress: process.env.VUE_APP_SERVER,
    };
  },
  methods: {
    async fetchData() {
      let result = await axios({
        url: this.serverAddress + '/employees',
        method: 'GET',
      });
      this.employees = result.data;
    },
    async delEmployee(e) {
      const employeeId = e.id;
      await axios({
        url: this.serverAddress + `/employees/${employeeId}`,
        method: 'DELETE',
      });
      this.fetchData();
    },
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    dotenv.config();
  },
};
</script>

<style></style>
