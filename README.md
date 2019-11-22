# Electronic Document Issuance

Purwarupa implementasi dari Tugas Besar IF3152 Rekayasa Perangkat Lunak STI menggunakan Nuxt dan Node.js

## Anggota Tim
- Jason Alfian Hartanto 18217004
- Fadel Nararia Rahman 18217005
- Randy Christian Saputra 18217006
- Muhammad Aditya Hilmy 18217025

## Instalasi

Pastikan komputer Anda telah terinstall Node.js beserta NPM, dan memiliki akses ke server MySQL.

#### Clone repository ke komputer
```bash
$ git clone https://github.com/fadelrahman31/edi-project.git
$ cd edi-project
``` 

#### Lakukan instalasi dependencies
```bash
$ npm install
```

#### Atur konfigurasi database
Salin file `.env.example` menjadi file `.env`, kemudian ganti parameter `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, dan `DB_NAME` sesuai setelan MySQL.

#### Jalankan aplikasi
**Untuk development, jalankan**
```bash
$ npm run dev
```

**Untuk production, jalankan**
```bash
$ npm run build
$ npm run start
```

Aplikasi akan berjalan pada port 3000 (default). Buka http://localhost:3000/ pada *browser*.

## Halaman yang Tersedia
- Halaman formulir `/form`
- Halaman lihat status `/status`
- Halaman unduh dokumen yang telah terbit `/issued-documents`
- Halaman *approval* untuk kaprodi `/approval`
