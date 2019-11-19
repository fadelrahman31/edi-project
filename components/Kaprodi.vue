<template>
  <v-app>
    <v-container>
      <div class="headline mt-5">Daftar Permintaan</div>
      <v-card elevation="2" class="mt-4">
        <v-simple-table v-if="!loading">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Jenis</th>
              <th class="text-left">NIM</th>
              <th class="text-left hidden-sm-and-down">Nama Mahasiswa</th>
              <th class="text-left hidden-sm-and-down">Status</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody v-for="item, i in documents" :key="i">
            
                <tr @click="toggle(item.idDocs)" :class="{ opened: opened.includes(item.idDocs) }">
                <td>{{ item.keperluanMhs }}</td>
                <td>{{ item.nim }}</td>
                <td class="hidden-sm-and-down">{{ item.namaMhs }}</td>
                <td class="hidden-sm-and-down">{{ item.status }}</td>
                <td>
                    <v-btn color="primary" dark @click="approve(item.idDocs)">Accept
                        <v-icon dark right>check_circle</v-icon>
                    </v-btn>
                    <v-btn color="red" dark @click="reject(item.idDocs)">Decline
                        <v-icon dark right>block</v-icon>
                    </v-btn>
                </td>
                </tr>
                <tr v-if="opened.includes(item.idDocs)">
                    <td colspan="5"><br /><p><b>ID Permintaan:</b> {{item.idDocs}}</p><p><b>Alamat Mahasiswa:</b> {{item.alamatMhs}}</p><p><b>Email Mahasiswa:</b> {{item.emailMhs}}</p><p><b>Jurusan:</b> {{item.jurusanMhs}}</p><p><b>Keterangan Keperluan:</b> {{item.ketKeperluan}}</p><p><b>Tanggal Pengajuan:</b> {{ $moment(item.submitDate).utcOffset('+0700').format('Do MMMM YYYY, HH:mm:ss') }}</p></td>
                </tr>
            
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import confirmation from '@/pages/confirmation'

export default {
    name: 'Kaprodi',
    mounted(){
        this.load()
    },

    methods: {
        load(){
            this.loading = true;
            axios.get("/api/daftarRequest/pendingApproval/")
                .then(response => {
                    this.documents = response.data;
                })
                .catch(e => {
                    alert("Error: " + e.toString());
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        approve(id) {
            this.loading = true;
            axios.post("/api/daftarRequest/"+id+"/approve")
                .then(response => {
                    this.load();
                })
                .catch(e => {
                    alert("Error: " + e.toString());
                })
        },
        reject(id) {
            this.loading = true;
            axios.post("/api/daftarRequest/"+id+"/reject")
                .then(response => {
                    this.load();
                })
                .catch(e => {
                    alert("Error: " + e.toString());
                })
        },
        toggle(id) {
            const index = this.opened.indexOf(id);
            if (index > -1) {
                this.opened.splice(index, 1)
            } else {
                this.opened.push(id)
            }
        },
        dummyTest(){
            //TODO - It has to be like this : this.$router.push(confirmation?nim);
            this.$router.push(confirmation);
        }
    },
    data () {
        return {
            loading: false,
            documents: [],
            opened:[]
        }
    }
}
</script>

<style scoped>
.home-hero {
    width: 100%;
    height: 100%;
}
</style>
