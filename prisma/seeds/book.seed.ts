import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  await prisma.book.deleteMany({
    where: {},
  });

  const data = [
    {
      title: 'Keep Up with Us!',
      description:
        'Keep Up with Us! merupakan fiksi sastra jenis novel karya G. Dani. Dengan gaya bercerita yang kekinian dan konflik yang sangat dekat dengan pembaca, Keep Up with Us menjadi pemenang di Wattys di ajang Wattys 2020 kategori New Adult.',
      author: 'G. Dani',
      publisher: 'Elex Media Komputindo',
      publicationYear: new Date('2022-05-22T00:00:00.000Z'),
      isbn: '9786230032448',
      stock: 10,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/722030292_Keep_up_With_Us_.jpg?t=2024-08-08T04%3A12%3A44.750Z',
      categoryId: 'clzkrv8ed0000gtkn9iyim16z',
    },
    {
      title: 'Layangan Putus',
      description:
        'Seorang gadis remaja polos yang berasal dari daerah, tumbuh, berkembang, dan menemukan cinta di kota besar yang sangat berbeda dengan iklim daerah asalnya. Mimpi sederhananya menyambung pendidikan dan menyelesaikannya tepat waktu, namun berubah setelah ia mengenal sosok lelaki tangguh.',
      author: 'MOMMY ASF',
      publisher: 'Rdm Publishers',
      publicationYear: new Date('2022-02-20T00:00:00.000Z'),
      isbn: '9786020729091',
      stock: 3,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/9786020729091_AYANGAN_PUTUS_dpn.jpg',
      categoryId: 'clzkrv8ed0000gtkn9iyim16z',
    },
    {
      title: '172 Days',
      description:
        'Istri Ameer Azzikra, Nadzira Shafa telah merampungkan buku karyanya berjudul "172 Days". Adapun novel "172 Days" tersebut telah di-launching-kan Nadzira Shafa pada bulan Maret lalu. Novel ini berkisah tentang kehidupannya bersama sang suami, mendiang Ameer Azzikra.',
      author: 'Nadzira Shafa',
      publisher: 'Motivaksi Inspira',
      publicationYear: new Date('2022-07-21T00:00:00.000Z'),
      isbn: '9786236483725',
      stock: 6,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/172_Days.jpg?t=2024-08-08T09%3A35%3A16.799Z',
      categoryId: 'clzkrv8ed0000gtkn9iyim16z',
    },
    {
      title: 'Terpikat',
      description:
        'Novel “Terpikat” adalah novel bergenre romance karya Ghefira Zakhira. Novel ini sudah memiliki pembaca dengan jumlah yang sangat banyak loh, bahkan kamu para pecinta novel yang belum pernah membacanya pasti akan langsung senang dan ketagihan untuk menghabiskannya dalam satu waktu.',
      author: 'Ghefira Zakhira',
      publisher: 'Motivaksi Inspira',
      publicationYear: new Date('2022-07-21T00:00:00.000Z'),
      isbn: '9786022204480',
      stock: 8,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/Terpikat.jpg',
      categoryId: 'clzkrv8ed0000gtkn9iyim16z',
    },
    {
      title: 'Heartbreak Motel',
      description:
        'Gramedia Pustaka Utama adalah bagian dari Kompas Gramedia, jaringan media terbesar di Indonesia. Fokus terbitannya kepada 12 bidang utama yaitu Fiksi Dewasa, Fiksi Remaja, Fiksi Anak, Sastra - Literatur, Bisnis Ekonomi, Social Science, Pengembangan Diri, Kamus & Referensi.',
      author: 'Ika Natassa',
      publisher: 'Gramedia Pustaka Utama',
      publicationYear: new Date('2022-04-08T00:00:00.000Z'),
      isbn: '9786020658841',
      stock: 2,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/heartbreak_motel_cov_a2uK3fK.jpg?t=2024-08-08T09%3A42%3A51.005Z',
      categoryId: 'clzkrv8ed0000gtkn9iyim16z',
    },
    {
      title: 'Death Note - Short Stories',
      description:
        'Death Note: Short Stories (DEATH NOTE短編集, Desu Nōto Tanhensh) adalah buku kompilasi oleh Tsugumi Ohba dan Takeshi Obata. Ini berisi enam bab, lima di antaranya adalah bab one-shot mandiri, serta satu bab Yonkoma yang sebelumnya diterbitkan di Death Note 13: Cara Membaca.',
      author: 'Tsugumi Ohba',
      publisher: 'Gramedia Pustaka Utama',
      publicationYear: new Date('2022-02-16T00:00:00.000Z'),
      isbn: '9786230306129',
      stock: 7,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/cover_DeathNote-ShortStories.jpg',
      categoryId: 'clzl3r2oc0000wwbhev9ozs4u',
    },
    {
      title: 'Spy x Family 6',
      description:
        'Spy X Family mengisahkan tentang seorang mata-mata yang demi melancarkan misi perdamaian harus membangun sebuah keluarga palsu. Master mata-mata Twilight tidak tertandingi dalam hal menyamar dalam misi berbahaya demi kemajuan dunia.',
      author: 'ENDOU TATSUYA',
      publisher: 'Elex Media Komputindo',
      publicationYear: new Date('2022-04-15T00:00:00.000Z'),
      isbn: '9786230031984',
      stock: 2,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/722010231_Spy_x_Family_06_1.jpg',
      categoryId: 'clzl3r2oc0000wwbhev9ozs4u',
    },
    {
      title: 'One Piece 98',
      description:
        'One Piece menceritakan seorang anak muda bernama Monkey D. Luffy yang memiliki keinginan untuk mengarungi lautan dan menjadi seorang raja bajak laut. Luffy bertekad untuk mencari dan mendapatkan "One Piece" sebuah harta karun terbesar yang pernah ada.',
      author: 'Eiichiro Oda',
      publisher: 'Elex Media Komputindo',
      publicationYear: new Date('2022-02-10T00:00:00.000Z'),
      isbn: '9786230030185',
      stock: 5,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/722010059_Cov_One_Piece_98.jpg',
      categoryId: 'clzl3r2oc0000wwbhev9ozs4u',
    },
    {
      title: 'Jujutsu Kaisen 05',
      description:
        'Program pertukaran dengan Akademi Jujutsu Kyoto dimulai. Pihak yang duluan menyingkirkan jurei tingkat 2 di area pertandinganlah yang akan jadi pemenangnya. Todo yang gemar berkelahi segera menyerang pihak Tokyo! Saat Todo dan Itadori saling berhadapan.',
      author: 'Gege Akutami',
      publisher: 'Elex Media Komputindo',
      publicationYear: new Date('2022-01-18T00:00:00.000Z'),
      isbn: '9786230029783',
      stock: 2,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/9786230029783_Jujutsukaisen_5.jpg',
      categoryId: 'clzl3r2oc0000wwbhev9ozs4u',
    },
    {
      title: 'One Punch Man 24',
      description:
        'Di antara jenis buku lainnya, komik memang disukai oleh semua kalangan mulai dari anak kecil hingga orang dewasa. Alasan komik lebih disukai oleh banyak orang karena disajikan dengan penuh dengan gambar dan cerita yang mengasyikan sehingga mampu menghilangkan rasa bosan di kala waktu senggang.',
      author: 'One & Yusuke Murata',
      publisher: 'Elex Media Komputindo',
      publicationYear: new Date('2023-05-17T00:00:00.000Z'),
      isbn: '9786230047213',
      stock: 4,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/mfrwpydsohsn5bcz6ozdmn.jpg?t=2024-08-08T10%3A14%3A13.184Z',
      categoryId: 'clzl3r2oc0000wwbhev9ozs4u',
    },
    {
      title: 'Bahasa Korea Untuk Kpopers 1',
      description:
        'Buku yang berjudul Bahasa Korea Untuk Kpopers #1 ini adalah karya dari Areum. Buku ini digemari oleh para pembaca yang merupakan kpopers. Semakin besar fenomena terhadap para selebriti K-Pop tak terlepas dari keberadaan Kpopers. Dan ada juga fakta anak Kpopers menurut psikolog yang perlu Moms dan Dads ketahui.',
      author: 'AREUM',
      publisher: 'Yrama Widya',
      publicationYear: new Date('2020-10-01T00:00:00.000Z'),
      isbn: '9786232052161',
      stock: 3,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/208076286.jpg',
      categoryId: 'clzq8ka7p00006kd009rsurbb',
    },
    {
      title: 'Chinese Is Fun 2, Belajar Bahasa Mandarin',
      description:
        'Banyak orang mengeluh belajar bahasa Mandarin itu susah. Dan yang paling susah, demikian keluhan banyak orang, adalah menghafalkan karakter Cina yang rumit dan banyak jumlahnya itu. Jika anda juga berpikir seperti ini. Buku ini kan mengubah cara berpikir Anda selamanya.',
      author: 'Yu Jia Hui',
      publisher: 'Andi Publisher',
      publicationYear: new Date('2021-09-10T00:00:00.000Z'),
      isbn: 'SCOOPG229587',
      stock: 4,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/BLK_CIF2BBMDP3B2021410697.jpg',
      categoryId: 'clzq8ka7p00006kd009rsurbb',
    },
    {
      title: 'Express Mudah Belajar Bahasa Arab',
      description:
        'Kesalahan persepsi yang terjadi di kalangan masyarakat adalah bahwa belajar bahasa Arab itu susah, dan hanya untuk kaum pesantren saja. Lewat buku ini, insya Allah akan mengubah persepsi tersebut, dan menyadari belajar bahasa Arab sebenarnya mudah dan menyenangkan.',
      author: 'Efranjy Agratama',
      publisher: 'Gramedia Widiasarana Indonesia',
      publicationYear: new Date('2016-09-29T00:00:00.000Z'),
      isbn: '9786023756674',
      stock: 7,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/ID_GRAS2016MTH09EMBBA_C.jpg',
      categoryId: 'clzq8ka7p00006kd009rsurbb',
    },
    {
      title: 'Mudah Dan Lancar Belajar Bahasa Jepang',
      description:
        'Sesuai dengan judul Mudah dan Lancar Bahasa Jepang, materi buku ini disusun dan disesuaikan mulai dari pelafalan, perkenalan dan dasar bahasa jepang hingga penggunaan dan penggabungan kata sifat dan kata kerja, contoh-contoh kalimat yang sering digunakan di dunia pariwisata akan membantu memudahkan siswa berbahasa jepang.',
      author: 'Isa Wahjoedi',
      publisher: 'Andi Publisher',
      publicationYear: new Date('2021-09-13T00:00:00.000Z'),
      isbn: 'SCOOPG229816',
      stock: 9,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/BLK_MDLBBJPDP2021759818.jpg',
      categoryId: 'clzq8ka7p00006kd009rsurbb',
    },
    {
      title: '7 Kebiasaan Belajar Bahasa Inggris Yang Efektif',
      description:
        'Selama semua stigma negatif tersebut ada di benak Anda dan menjadi kebiasaan, Anda tidak akan mendapatkan apa-apa. Yang kita pikirkan berbanding lurus dengan hasil yang akan kita peroleh. Lalu, bagaimana bila pola pikir tersebut kita ubah untuk hal positif? Tentunya hasil yang positif juga yang akan kita dapatkan.',
      author: 'Yanto, S.Pd.,Med',
      publisher: 'Yrama Widya',
      publicationYear: new Date('2020-07-21T00:00:00.000Z'),
      isbn: '9786232050938',
      stock: 2,
      image:
        'https://ksitqxbgmrstqrsbegpx.supabase.co/storage/v1/object/public/book/img/img20200721_13161142.jpg',
      categoryId: 'clzq8ka7p00006kd009rsurbb',
    },
  ];

  await prisma.book.createMany({
    data,
  });
}
