Nama : Trisinus Gulo

Nim : 2141720035

Absen : 14

Pertemuan 4 : PBF

# Praktikum 1 - EVent Hadler

Langkah 1

mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum bisa  buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun. Membuat folder/file baru di src/component/button.tsx
![test](img/image1_Prak4.png)

pada file src/app/page.tsx
![test](img/image2_Prak4.png)

**Hasil Output**
![test](img/hasil_Prak4.png)

Langkah 2

Menambahkan event pada tombol tersebut. Seperti contoh kita buat ketika tombol di klik, akan memunculkan notif/alert. Kita dapat membuat pesan ketika pengguna mengeklik dengan mengikuti tiga langkah berikut:

1. Deklarasikan sebuah fungsi bernama handleClick di dalam komponen Button kita.
2. Implementasikan logika di dalam fungsi tersebut (gunakan alert untuk menampilkan pesan).
3. Tambahkan handler onClick={handleClick} ke tag JSX < button >

![test](img/image3_Prak4.png)
![test](img/image4_Prak4.png)
mengalamai error di karenakan belum melakukan pengaturan komponen untuk mengatasi error tersebuat butuh mengatur agar komponen yang di gunakan menjadi komponen client. Untuk menjadikan komponen client,  cukup memberikan perintah ini "use client"; pada baris pertama file page.tsx
![test](img/image5_Prak4.png)
**Hasil Output**
![test](img/Hasil%20Akhir_Prak4.png)
Berhasil di jalankan dan ketika di klink butonnya akan muncul perintah seperti di bawah

# Praktikum 2

Membuat fungsi baru di componect/button tsx
![test](img/image6_prak4.png)
Memodifikasi file page.tsx
![test](img/image7_prak4.png)
![test](img/hasil1_Prak4.png)
Ketika diklik button pesan
![test](img/hasil2_prak4.png)
**Penjelasan**
- pada praktikum 2 hasilnya sama di praktikum 1 kita cuma memodifikasi kodingannya aja dengan menambahkan button pesan saja
- Pada Praktikum 2 dimana pada kodingan button.tsx untuk export function buttonya untuk isi pesan dan nama tombolnya akan bergaris merah untuk itu saya menambahkan salah satu tipe data yaitu string seperti di bawah ini

      export function Tombol_2({ isiPesan, namaTombol }: { isiPesan: string, namaTombol: string }){

# Praktikum 3

Langkah 1 - Propagation 
![test](img/image8_Prak4.png)

Memodifikasi file page.tsx
![test](img/image9_Prak4.png)
![test](img/Propogation.png)
![test](img/propogation_Tombol1.png)
![test](img/propogation_Tombol2.png)

Langkah 3 - Stop Propagation
![test](img/stop%20Propagation.png)

# Praktikum 4

langkah 1
![test](img/article.js.png)
![test](img/gallery.tsx.png)
![test](img/page.tsx_prak4.png)
![test](img/Hasil_Praktikum4.png)
akan menampilkan artikel dan juga gambar arkel tersebut 

Langkah 2
Menambahkan Variabel state
![test](img/langkah2.png)
![test](img/hasil_Langkah2.png)
pada langkah ini bisa kita megklik  artikel selanjutnya di karenakan melakukan modifikasi pada kodingannya gallery.tsx

