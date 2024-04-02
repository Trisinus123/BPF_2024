Trisinus Gulo | 2141720035

Praktikum 1 : Membuat Variasi Ukuran Teks Heading dengan Context

Langkah 1: Buat project baru dan repo baru di GitHub
![test](img/Langkah1_Prak1.png)

Langkah 2: Buat struktur folder dengan prinsip atomic design
```bash
Buatlah folder baru di src/components seperti berikut ini
```
![test](img/Langkah2_Prak1.png)

Langkah 3: Buat komponen atom baru
![test](img/Langkah3_Prak1.png)
![test](img/Langkah4_Prak3.png)
![test](img/Langkah5_Prak3.png)

Langkah 4: Ubah isi kode page.tsx dan run
![test](img/Langkah6_Prak3.png)

Soal 1
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![test](img/hasil_Prak1.png)
Dengan pendekatan Atomic Design, kita mengorganisir komponen-komponen dalam struktur terstruktur. Kode dapat dipakai ulang, mengurangi duplikasi, dan tampilan yang bervariasi bisa dibuat dengan mudah menggunakan properti dinamis.

Langkah 5.1: Buat Context
![test](img/Langkah7_Prak3.png)

Langkah 5.2: Gunakan context
![test](img/Langkah8_Prak1.png)
![test](img/Langkah9_Prak1.png)

Langkah 5.3: Sediakan context
![test](img/Langkah10_Prak1.png)
![test](img/Langkah11_Prak1.png)
![test](img/revisi%20hasil_Prak1.png)

Soal 2
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![test](img/revisi%20hasil_Prak1.png)
Meneruskan nilai antar komponen menggunakan Context memungkinkan komponen-komponen anak mengakses nilai tanpa perlu meneruskannya secara langsung. Meskipun nilai-nilai tersebut tersedia melalui Context, tampilan halaman tetap sama seperti sebelumnya.

Langkah 6: Menggunakan dan menyediakan context dari komponen yang sama
![test](img/Langkah13_Prak1.png)
![test](img/Langkah14_Prak1.png)
![test](img/Langkah15_Prak1.png)

Soal 3
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![test](img/revisi%20hasil2_Prak1.png)
Dalam langkah keenam ini, Context digunakan untuk mentransfer data secara otomatis dengan penambahan otomatis. Meskipun ukuran font lebih kecil pada awalnya, nilai tersebut bertambah secara otomatis di setiap level komponen anak, menghasilkan perbedaan visual yang diinginkan. Tujuannya tetap sama: mengirimkan data antar komponen dengan pola atau operasi tertentu tanpa perlu penanganan manual di setiap level.

Praktikum 2: Membuat Context melewati komponen perantara

Langkah 1: Buat komponen atom baru
![test](img/langkah1_Prak2.png)
![test](img/langkah2_Prak2.png)
![test](img/langkah3_Prak2.png)
![test](img/langkah4-prak3.png)
![test](img/langkah5-prak3.png)

Langkah 2: Tambahkan ProfilePage ke page.tsx lalu run
![test](img/langkah6-prak3.png)
![test](img/langkah7-prak3.png)
![test](img/langkash7-prak3.png)
![test](img/hasil3_Prak3.png)
![test](img/hasil4_Prak3.png)




