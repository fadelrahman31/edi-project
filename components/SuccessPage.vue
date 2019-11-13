<template>
    <span>
        <v-layout justify-center align-center column pa-5>
            <h1>Pengajuan Dokumen Anda Telah Berhasil Disimpan pada Sistem!</h1>
            <p></p>
            <p>Anda dapat melakukan pengecekan status pengajuan dokumen pada Tab Cek Status Pengajuan</p>
            <v-btn
                class= "ma-2 mr-4"
                @click="goBack"
            >Go Back to Form Page</v-btn>
            <v-divider></v-divider>
        </v-layout>
    </span>
</template>

<script>
import form from '@/pages/form'

export default {
    name: 'SuccessPage',
    methods: {
        goBack() {
            this.$router.push(form);
        }
    }
    
}
</script>