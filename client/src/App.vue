<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <div class="container d-flex flex-row justify-content-right w-100">
      <p>Get the latest news!</p>
      <button @click="subscribe" class="btn btn-success">Subscribe</button>
    </div>
    <p class="text-h2 my-1">Employee Database</p>
    <img alt="no image" src="/images/employees.jpg" class="my-5" style="width: 60%" />
    <div v-if="offline" class="alert text-center fw-bold alert-danger w-100">You are offline</div>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"> </CardView>
  </div>
</template>

<script>
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
      offline: false,
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
    updateAvailable() {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    },
    async subscribe() {
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(
          'BGiXVWLfnjvogeHNKlXOl_QPH0RD79RTSky1Rge0lMp-ET3n7XsvM1HxXRs-R0Ee-j_UP8m1p6uTFz87J4aIL8Q',
        ),
      });
      await axios.post('/subscribe', subscription);
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable);
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
  },
};
</script>

<style></style>
