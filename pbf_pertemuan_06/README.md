Nama : Trisinus Gulo

Kelas : TI-3C

Nim : 2141720035

Praktikum 1 - Instalasi Redux dan bootstrap

![test](img/prak6_Lnagkah1.png)
![test](img/prak6_Lnagkah2.png)
![tset](img/hasil_prak1.png)
![test](img/hasil2_prak1.png)

Praktikum 2 - Contoh Login dengan Redux

![test](img/prak2_langkah1.png)
![test](img/prak2_langkah2.png)
![test](img/prak3_langkah1.png)

Langkah 1- mengecek  file package.json

![test](img/prak2_langkah4.png)

Langkah 2 - Membaut redux/auth/authSlice.js

![test](img/prak2_langkah5.png)

Langkah 3 - membuat file .env.local

![test](img/prak2_langkah9.png)

Langkah 4 - Membuat file redux/store/store.js

![test](img/prak2_langkah6.png)

Langkah 5 - buat file baru di pages/login.tsx

![test](img/prak2_langkah7.png)

Terjadi saat mengakses /login, sehingga perlu memberbarui file _app.tsx
![test](img/prak2_langkah8.png)
![test](img/prak2_langkah10.png)
![test](img/prak2_langkah11.png)

Soal
1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?
![test](img/prak2_soal1.png)
terjadi error saat melakukan restart di halaman webnya tersebut.

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut? 
![tet](img/prak2_soal2.png)
Tanpa menggunakan method `parse()`, string HTML akan dianggap sebagai teks biasa dan tidak akan diinterpretasikan sebagai elemen HTML yang sebenarnya di dalam JSX. Dengan menggunakan `parse()`, string HTML diuraikan menjadi elemen HTML sesuai dengan strukturnya sehingga dapat dirender dengan benar di dalam JSX.

Praktikum 3 - Membuat Aplikasi Counter Sederhana

Langkah 1 -  Membuat file di redux/counter/naikTurunSlice.js

![test](img/prak4_langkah1.png)

Langkah 2 - Memodifikasi redux/store/store.js

![test](img/pra3_langkah2.png)

Langkah 3 - Membuat file baru di pages/counter.tsx

![test](img/prak3_langkah3.png)
![test](img/prak3_langkah4.png)

Hasil Output
![test](img/hasil_Output3.png)















