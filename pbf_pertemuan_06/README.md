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

**Tugas (Pertanyaan Praktikum)**

  Berdasarkan pada praktikum sebelumnya yang telah dilakukan, beberapa pertanyaan terkait praktikum perlu diselesaikan yaitu sebagai berikut.

1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan
2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect (menghapus baris 3, dan baris 9-11, apa yang akan terjadi?
3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?
4. Apakah store pada nextjs bisa menyimpan banyak redux reducer?
5. Jelaskan kegunaan dari file store.js!
6. Pada file pages/login.tsx, apa maksud dari kode ini ?
const { isLogin } = useSelector((state) => state.auth);
7. Pada file pages/counter.tsx, apa maksud dari kode ini?
const {totalCounter} = useSelector((state) => state.counter);
Back

**Jawaban :** 

1. Kode `import { useEffect } from "react";` pada file `pages/_app.tsx` digunakan untuk mengimpor hook `useEffect` dari React, yang berguna untuk melakukan side effects di dalam komponen React.
2. Jika tidak menggunakan `useEffect` pada `pages/_app.tsx`, efek yang telah ditetapkan dalam `useEffect` tidak akan terjadi, seperti inisialisasi data global atau pengaturan layout global.
3. Penulisan atribut `class` dalam tag HTML diganti menjadi `className` di React/Next.js untuk menghindari konflik dengan JavaScript, karena `class` merupakan kata kunci yang sudah dipesan dalam JavaScript.
4. Ya, store pada Next.js bisa menyimpan banyak redux reducer. Redux store di Next.js mengikuti prinsip yang sama seperti Redux store di aplikasi React biasa.
5. File `store.js` pada Next.js berfungsi sebagai pusat pengaturan Redux store untuk aplikasi, di mana konfigurasi middleware Redux, penggabungan reducer, dan pembuatan store Redux dilakukan.
6. Pada file `pages/login.tsx`, kode `const { isLogin } = useSelector((state) => state.auth);` digunakan untuk mengambil nilai `isLogin` dari state Redux menggunakan selector `useSelector`.
7. Pada file `pages/counter.tsx`, kode `const {totalCounter} = useSelector((state) => state.counter);` digunakan untuk mengambil nilai `totalCounter` dari state Redux menggunakan selector `useSelector`.











