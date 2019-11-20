<template>
    <v-container fluid fill-height class="Stats">
        <v-layout justify-center align-center column pa-5>
            <h1>Selamat Datang di Form Pengecekan Dokumen!</h1>
            <p>Silahkan masukan NIM anda</p>
            <v-container fluid>
                <v-row
                    justify= "space-between"
                >
                <v-col
                        cols= "12"
                        md="12"
                    >
                <v-layout justify-center align-center>
                    <v-col
                        cols="6"
                        md="2">
                        <v-text-field
                                    v-model= "nim"
                                    :rules="rulesNim"
                                    label="NIM"
                                    required
                                ></v-text-field>
                    </v-col>
                </v-layout>
                </v-col>
                </v-row>
                <v-row>
                    <v-layout justify-center>
                    <v-btn
                    :disabled= "!nim"
                     @click="submitForm">
                    Submit
                    </v-btn>
                     </v-layout>
                </v-row>
            <v-col
                        cols= "12"
                        md="12"
                    >
                <v-layout justify-center align-center>
                    <v-col
                        cols="12"
                        md="6">
<div v-if="status != null">
<v-card>
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Keperluan Mahasiswa</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in status" :key="i">
            <td>{{ item.keperluanMhs }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</v-card>

<!-- <v-overlay
                                :absolute="absolute"
                                :value="overlay"
                            >
                                <v-card
                                    class="ma-6 pa-6"
                                    raised
                                    shaped
                                    color="blue darken-1"
                                >
                                    <h3>Apakah anda yakin akan submit pengajuan dokumen?</h3>
                                    <v-row align="center" justify="center">
                                        <v-btn
                                            color= "success"
                                            class= "ma-6 mr-4"
                                            @click="Close"
                                        >
                                            Iya
                                        </v-btn>
                                        <v-btn
                                            class= "ma-6 mr-4"
                                            @click= "overlay=!overlay"
                                        >
                                            Tidak
                                        </v-btn>
                                    </v-row>
                                </v-card>
                            </v-overlay> -->
</div>

<div v-else>
</div>
                    </v-col>
                </v-layout>
</v-col>

            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import confirmation from '@/pages/confirmation'

export default {
    name: 'Stats',
    data: () => ({
        absolute: true,
        overlay: false,
        valid: true,

        dense: false,
        fixedHeader: true,
        height: 200,

        status:null,

        nim: '',
        rulesNim: [
            v => !!v || 'NIM is required',
            v => (v && v.length == 8) || 'Your NIM is unrecognizeable'
        ]
    }),

    methods: {
        clearAll (){
            this.nim = ''
        },
        async submitForm (){
          var queryNim = (this.nim);
          const urlQuery ='/api/daftarRequest/'+queryNim;
          const response = await axios.get(urlQuery);
          console.log(response.data);
          if (response.data!=null){
          this.status = response.data;
          } else {
            overlay != overlay;
            //   response.data.keperluanMhs = "Tidak ada data" ;
            //   response.data.status= "" ;
            //   this.status=response.data ;
          }
        }
    }
}
</script>

<style scoped>
.Stats {
    width: 100%;
    height: 100%;
}
</style>
