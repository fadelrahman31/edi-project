<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <h1>Selamat Datang di Form Pengajuan Dokumen!</h1>
            <p>Silahkan isi form berikut sesuai dengan data yang benar</p>
            <v-container fluid>
                <v-row 
                    justify= "space-between"
                >
                    <v-col
                        cols= "12"
                        md="6"
                    >
                        <v-card
                            class="ma-6 pa-6"
                            raised
                            tile
                        > 
                            <v-form
                                ref="form"
                                v-model="valid"
                            >
                                <v-text-field
                                    v-model= "nama"
                                    :counter="25"
                                    :rules="rulesNama"
                                    label="Nama"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model= "nim"
                                    :rules="rulesNim"
                                    label="NIM"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model= "alamat"
                                    :rules= "rulesAlamat"
                                    label = "Alamat"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model= "email"
                                    :rules= "rulesEmail"
                                    label = "Email Mahasiswa ITB"
                                    required
                                ></v-text-field>

                                <v-select
                                    v-model= "jurusan"
                                    :items= "items"
                                    :rules= "[v => !!v || 'Pilihan Jurusan is required']"
                                    label="Jurusan / Program Studi"
                                    required
                                ></v-select>

                                <v-select   
                                    v-model= "keperluan"
                                    :items= "reqs"
                                    :rules= "[v => !!v || 'Keperluan is required']"
                                    label="Keperluan"
                                    required 
                                ></v-select>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col  
                        cols= "12"
                        md="6"
                    >
                        <v-container fluid>
                            <v-card
                                class="ma-6 pa-6"
                                raised
                                tile
                            >
                                <v-form
                                    ref="form"
                                    v-model="valid" 
                                >
                                    <v-textarea
                                        v-model= "ketKeperluan"
                                        :rules= "rulesKetKeperluan"
                                        name="inputKeterangan"
                                        label= "Keterangan Keperluan Pengajuan Dokumen"
                                        auto-grow
                                        required
                                    ></v-textarea>                    
                                </v-form>
                            </v-card>    
                            
                            <v-btn
                                :disabled= "!valid || !ketKeperluan"
                                color= "success"
                                class= "ma-6 mr-4"   
                                @click="submitForm" 
                            >
                                Submit
                            </v-btn>

                            <v-btn
                                class= "ma-2 mr-4" 
                                @click="clearAll"
                            > Reset </v-btn>

                        </v-container>
                    </v-col>
                </v-row>
            </v-container>    
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'HomeHero',
    data: () => ({
        valid: true,
        nama: '',
        rulesNama: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        nim: '',
        rulesNim: [
            v => !!v || 'NIM is required',
            v => (v && v.length == 8) || 'Your NIM is unrecognizeable'
        ],
        alamat: '',
        rulesAlamat: [
            v => !!v || 'Alamat is required'
        ],
        email: '',
        rulesEmail: [
            v => !!v || 'Email ITB is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        jurusan: null,
        items: [
            'Sistem dan Teknologi Informasi',
            'Teknik Informatika',
            'Teknik Elektro',
            'Teknik Tenaga Listrik',
            'Teknik Biomedis',
            'Teknik Telekomunikasi'
        ],
        keperluan: null,
        reqs: [
            'Transkrip nilai',
            'Surat keterangan aktif kuliah',
            'Surat izin perkuliahan',
            'Surat pengantar KP',
            'Custom - "Penjelasan di Keterangan"'
        ],
        ketKeperluan: '',
        rulesKetKeperluan: [v => !!v || 'Keterangan Keperluan wajib diisi']
    }),

    methods: {
        clearAll (){
            this.nama = ''
            this.nim = ''
            this.alamat = ''
            this.email = ''
            this.jurusan = null
            this.keperluan = null
            this.ketKeperluan = ''
        },
        submitForm (){
            axios.post('http://localhost:3000/api/daftarRequest',{
                namaMhs     : this.nama,
                nim         : this.nim,
                alamatMhs   : this.alamat,
                emailMhs    : this.email,
                jurusanMhs  : this.jurusan,
                keperluanMhs: this.keperluan,
                ketKeperluan: this.ketKeperluan
            }).then((response) => {})
              .catch((e) => {
                  console.error(e)
              })
            
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
