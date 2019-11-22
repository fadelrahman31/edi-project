<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-container>
      <div class="headline mt-5">Dokumen Terbit</div>
      <v-card elevation="2" class="mt-4">
        <v-simple-table v-if="!loading">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Nama Dokumen</th>
              <th class="text-left">Jenis</th>
              <th class="text-left hidden-sm-and-down">Tanggal Permintaan</th>
              <th class="text-left hidden-sm-and-down">Tanggal Penerbitan</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item, i in documents" :key="i">
              <td>{{ item.title }}</td>
              <td>{{ item.type }}</td>
              <td class="hidden-sm-and-down">{{ $moment(item.requestedDate).format('Do MMMM YYYY, HH:mm:ss') }}</td>
              <td class="hidden-sm-and-down">{{ $moment(item.issuedDate).format('Do MMMM YYYY, HH:mm:ss') }}</td>
              <td>
                <a :href="`/api/documents/download/${item.uuid}`" target="_blank" style="text-decoration: none">
                  <v-btn icon color="primary"><v-icon>save</v-icon></v-btn>
                </a>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HomeHero from '@/components/HomeHero';

const axios = require('axios');

export default {
  name: "index",
  components: {AppNavigation, HomeHero},
  head: {
    title: "Dokumen Terbit"
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      const nim = this.$route.params.nim;

      this.loading = true;
      axios.get(`/api/documents/issued/${nim}`)
        .then(response => {
          this.documents = response.data;
        })
        .catch(e => {
          alert("Error: " + e.toString());
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  data() {
    return {
      loading: false,
      documents: []
    }
  }
}
</script>

<style scoped>

</style>
