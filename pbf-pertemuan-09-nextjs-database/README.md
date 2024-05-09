Trisinus Gulo | 2141720035

Praktikum 1 : Setup Database

Langkah 1 : Membuat project baru dengan templat

![test](img/Praktikum1.png)

Langkah 2 : Membuat Akun Vercel

![test](img/praktukum1_Langkah2.png)

- Klik Contunue With GitHub

![test](img/praktukum1_Langkah2_.png)

Langkah 3 : Koneksikan dan Deploy Project Anda

- Klik Install -> Pilih Repo -> Install
![tets](img/praktukum1_Langkah3.png)

- Klik Import -> Pilih Framework ->Deploy
![tet](img/praktukum1_Langkah3_.png)
![test](img/praktukum1_Langkah3+.png)

Soal 1 

Capture hasil deploy project Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?

jawab:
dengan menggunakan varcel kita bisa dapat mendeploy project kita pada repository yang kita miliki baik secara keseluruhan maupun hanya yang ingin kita pilih. Selain itu, Vercel juga menyediakan fitur pratinjau untuk melihat laman yang sudah Anda buat sebelum dideploy secara resmi.

Langkah 4 : Membuat basis data Postgres

![tess](img/praktukum1_Langkah4.png)

![test](img/praktukum1_Langkah4_.png)

![test](img/praktukum1_Langkah4+.png)

- Show secret > Copy Snippet

![test](img/praktukum1_Langkah4-.png)
![test](img/praktukum1_Langkah4_4.png)

-  install Vercel Postgres SDK.
```bash
npm i --save @vercel/postgres
```

Soal 2

Capture hasil basis data Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?

jawab:
Selain digunakan untuk deploy proyek dari GitHub, Vercel juga dapat membantu dalam pembuatan database. Pada praktikum ini, kita menggunakan Vercel untuk membuat database Postgres. Untuk mengakses database tersebut, perlu dibuat file .env dan dimasukkan ke dalam .gitignore agar informasi akses database tidak terbuka di GitHub.

Langkah 5 : Melakukan seed ke basis data

![test](img/praktukum1_Langkah5_.png)

![test](img/praktukum1_Langkah5+.png)

![test](img/praktukum1_Langkah5.png)

-  Mengeksekusi file seed.js
```bash 
npm run seed
```
Error: Cannot find module 'dotenv/config'
```bash
npm i --save dotenv
```

Error: Cannot find module 'data.js'

![test](img/praktukum1_Langkah5-.png)\

Error: Cannot find module 'bcrypt'
```bash
npm i --save bcrypt
```
![test](img/praktukum1_Langkah5_1.png)





