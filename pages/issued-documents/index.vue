<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-container>
      <div class="headline mt-5">Dokumen Terbit</div>
      <v-card elevation="2" class="mt-4">
        <v-simple-table>
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
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td class="hidden-sm-and-down">{{ $moment(item.request_date).format('Do MMMM YYYY, HH:mm:ss') }}</td>
              <td class="hidden-sm-and-down">{{ $moment(item.issued_date).format('Do MMMM YYYY, HH:mm:ss') }}</td>
              <td>
                <a :href="`/api/documents/download/${item.id}`" style="text-decoration: none">
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

export default {
  name: "index",
  components: {AppNavigation, HomeHero},
  head: {
    title: "Dokumen Terbit"
  },
  data() {
    return {
      documents: [
        {
          id: "71f888f7-d1ce-4cf5-8ade-c255079e32fa",
          name: "Surat Izin Tidak Mengikuti Kuliah untuk Gemastik 12",
          type: "Surat Izin",
          request_date: Date.parse("2019-11-11T16:30:12+07:00"),
          issued_date: Date.parse("2019-11-13T12:47:38+07:00"),
        },
        {
          id: "bf02041c-a979-49b4-898e-0ad65a763f86",
          name: "Keterangan Mahasiswa Aktif untuk COMPFEST XI",
          type: "Surat Keterangan",
          request_date: Date.parse("2019-09-01T09:13:26+07:00"),
          issued_date: Date.parse("2019-09-03T14:23:51+07:00"),
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
