---
title: Tutorial Lengkap Membuat Blog Sekaligus Web Portofolio Gratis!
layout: post
date: 2019-12-23 2:44
image: /assets/images/markdown.jpg
headerImage: false
tag:
- tutorial
- jekyll
- blog
- portofolio
- web
- github
star: true
category: blog
author: fyfirman
description: Tutorial Lengkap Membuat Blog Sekaligus Web Portofolio Gratis
hidden: false
---

Portofolio merupakan hal yang penting untuk melamar sebuah pekerjaan. Saya pribadi adalah seorang mahasiswa informatika di salah satu perguruan tinggi di Jawa Barat yang dalam kurikulumnya diwajibkan untuk mengikuti program magang. Sudah 23 perusahaan saya ajukan permohonan magang namun hasilnya nihil. Bisa dibilang, saya sudah berpengalaman untuk mengerjakan suatu _project._ Namun saya bertanya pada diri saya sendiri, “Bagaimana _recruiter_ tau fakta itu? Bagaimana mereka memvalidasi perkataan saya? Apa sekedar tulisan di CV atau  _linkedin_ cukup?”. Dengan pertanyaan seperti itu saya yakin dengan membuat website portofolio, hal ini bisa memudahkan _recruiter_ untuk memperlihatkan apa yang saya alami.

---

# Mari membuat!

## Membuat halaman github.io (github-pages)

Github menyediakan halaman gratis untuk usernya. Kita bisa mengisi halaman tersebut dengan file HTML, CSS, atau lainnya. Halaman ini bersifat _static, _artinya kita tidak bisa menaruh database di dalamnya.

Saya sudah membuat halaman github.io sendiri. Halaman ini saya isi oleh sebuah form tentang impresi pertama untuk saya. kita bisa mengisi impresi terhadap saya pada website tersebut. Namun website tersebut akan dipindahkan kedalam sebuah blog/web portofolio.

Jika kita ingin mengikuti tutorial ini, kita ikuti tutorial membuat halaman github.io di internet. Saya rekomendasikan tutorial dari website petani kode _[disini](https://www.petanikode.com/github-pages/)_.

## Membuat blog Jekyll

> _Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look like, what data gets displayed on the site, and more._

Seperti yang tertulis di websitenya, Jekyll adalah sebuah tools yang digunakan untuk membangun website static. Ini sangat cocok sekali untuk github.io.

Untuk sistem operasi yang saya gunakan adalah Windows, jadi untuk pengguna Linux atau MacOS bisa jadi ada beberapa langkah yang berbeda.

### _Install Requirements_

#### *Install* [Ruby](https://rubyinstaller.org/downloads/)

![alt text][1]

Pilih Ruby+Devkit dengan versi terbaru dan sesuaikan dengan sistem operasi yang digunakan dan jalankan *installer*.

Untuk memastikan Ruby sudah ter-*install* atau belum, kita bisa jalankan `ruby -v` pada CMD kita

![alt text][2]

#### *Install* RubyGems

Gem akan otomatis ter-*install* jika kita meng-*install* Ruby dengan Ruby Installer. Kita bisa cek dengan menjalankan `gem -v`

![alt text][3]

#### *Install* [Make](https://github.com/msysgit/msysgit/releases/download/Git-1.9.4-preview20140929/msysGit-netinstall-1.9.4-preview20140929.exe)

Jalankan installer, lalu tambahkan `C:\msysGit\bin` pada *path* di _Environment Variable_ Windows kita

![alt text][4]

Cek dengan menggunakan `make -v	`

![alt text][5]

#### *Install* [GCC](http://tdm-gcc.tdragon.net/download)

Cek dengan menggunakan `gcc -v`

![alt text][6]

### Install Jekyll dan bundler gems

Jalankan perintah berikut dalam CMD

```bash
gem install jekyll bundler
```

akan keluar output:
![alt text][7]

### Membuat web Jekyll

Tujukan CMD (menggunakan `cd`) kamu pada *folder* yang diinginkan, disini saya menggunakan folder `D:\project\code` lalu jalankan

```bash
jekyll new myblog
```

![alt text][8]

Ubah *directory* CMD

```bash
cd myblog
```

*Build & Serve* dengan perintah

```bash
bundle exec jekyll serve
```

![alt text][9]

Buka http://localhost:4000 di browser

![alt text][10]

Sekarang kita berhasil membuat web jekyll di local server. Perlu diketahui setiap kita ingin membuka web kita di local kita wajib menjalankan `bundle exec jekyll serve` pada cmd.

### Hosting jekyll pada github.io

1. Clone repository github.io

    Disini saya menggunakan [GitKraken](https://www.gitkraken.com/)

    ![alt text][11]

2. Pindahkan isi jekyll project (myblog) ke folder github.io

    ![alt text][12]

3. Commit & Push

    ![alt text][13]

4. Buka `<username>.github.io` pada browser kalian

    ![alt text][10]

---
Tentunya setelah membuat website ini, kita harus mengkostumisasi karena kita baru saja menginstall template saja. Website jekyll ini nantinya bisa dibuat berbagai macam kegunaan mulai dari blog atau pun menyimpan portofolio kalian. Demikian tutorial kali ini, terimakasih telah membaca dan semoga bermanfaat!

[1]: {{ site.url }}/assets/images/post/1/image1.png "Download Ruby+Devkit"
[2]: {{ site.url }}/assets/images/post/1/image2.png "Cek ruby"
[3]: {{ site.url }}/assets/images/post/1/image3.png "Cek RubyGems"
[4]: {{ site.url }}/assets/images/post/1/image4.png "Add Environment Variable"
[5]: {{ site.url }}/assets/images/post/1/image5.png "Cek Make"
[6]: {{ site.url }}/assets/images/post/1/image6.png "Cek GCC"
[7]: {{ site.url }}/assets/images/post/1/image7.png "Install Jekyll Bundler"
[8]: {{ site.url }}/assets/images/post/1/image8.png "Jekyll new blog"
[9]: {{ site.url }}/assets/images/post/1/image9.png "serve jekyll"
[10]: {{ site.url }}/assets/images/post/1/image10.png "website jekyll"
[11]: {{ site.url }}/assets/images/post/1/image11.png "clone repo github.io"
[12]: {{ site.url }}/assets/images/post/1/image12.png "move folder jekyll"
[13]: {{ site.url }}/assets/images/post/1/image13.png "commit and push"