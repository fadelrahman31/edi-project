<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-container>
      <v-form @submit.prevent="$router.push(`/issued-documents/${nim}`)">
        <div class="headline mt-5">Dokumen Terbit</div>
        <div class="subtitle mt-3">Masukkan NIM Anda untuk melihat dokumen</div>
        <v-text-field class="mt-4" v-model="nim" outlined label="NIM"></v-text-field>
        <v-btn color="primary" type="submit">Lihat Dokumen</v-btn>
      </v-form>
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
  data() {
    return {
      nim: ""
    }
  },
  methods: {
    load() {

    }
  },
}
</script>

<style scoped>

</style>
