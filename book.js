const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

const emptyTopicsHtmlString = ``

if (document.getElementsByClassName('topics').length > 0) {
    document.getElementsByClassName('topics')[0].innerHTML = ''
    document.getElementsByClassName('topics')[0].appendChild(convertStringToHTML(emptyTopicsHtmlString))
}

const $navItem = document.createElement('li')
$navItem.className = 'nav-item'

const $navLink = document.createElement('a')
$navLink.id = 'generateContent'
$navLink.className = 'nav-link'
$navLink.innerHTML = 'Generate Content'
$navLink.href = 'javascript:;'

$navItem.appendChild($navLink)

const $nav = document.getElementsByClassName('nav')
if ($nav.length > 0) {
    $nav[1].appendChild($navItem)
}

const $generateContent = document.getElementById('generateContent')
$generateContent.addEventListener('click', generateContent, true)

function generateContent() {
    const $container = $('.book_content')
    
    if ($('#loading').length == 0) {
        $('#page-wrapper').append(`<div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-body d-flex flex-column justify-content-center align-items-center">
        <div class="spinner-border text-primary mb-3" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        <p class="mb-0">Please wait...</p>
        </div>
        </div>
        </div>
        </div>`)
    }
    
    const $loading = $('#loading')
    $loading.modal('show')
    
    setTimeout(() => {
        $container.html(`<h3>1. Algoritma Pemrograman</h3><div class="no-overflow" id="yui_3_17_2_1_1702272485266_49"><p dir="ltr"></p><p><strong>Definisi Algoritma</strong></p><p id="yui_3_17_2_1_1702272485266_52">Algoritma berasal dari nama Abu Ja'far Muhammad Ibnu Musa Al-Khuwarizmi, seorang matematikawan muslim (780 M-850 M). Orang Barat menyebutnya Al-Khuwarizm atau Algorism, yang berarti proses menghitung dengan angka Arab. Karya monumental beliau adalah "Kitab Al Jabar Wal-Muqabala" yang berarti "Buku Pemugaran dan Pengurangan" ("The Book of Restoration and Reduction"). Ini menjadi cikal bakal istilah "Aljabar" (Algebra) yang masih digunakan hingga saat ini. Seiring waktu, istilah "Algorism" berubah menjadi "algorithm", yang diartikan sebagai metode perhitungan (komputasi) secara umum. Dalam bahasa Indonesia, kata "algorithm" diserap menjadi "algoritma".</p><p>Menurut definisi, algoritma adalah urutan langkah-langkah penyelesaian masalah yang disusun secara sistematis dan logis. Algoritma tidak hanya terbatas pada perhitungan komputer, tetapi juga berlaku luas dalam kehidupan sehari-hari, seperti resep masakan, petunjuk pemasangan AC, perakitan komputer, instalasi software, pengisian token listrik, dan jadwal acara kegiatan.</p><p>Menurut definisi pertama, algoritma adalah langkah-langkah logis penyelesaian masalah. Langkah-langkah dalam algoritma harus logis, sesuai dengan tujuan, dan dapat ditentukan kebenarannya. Contohnya adalah resep masakan atau proses merakit komputer. Langkah yang logis juga tidak ambigu. Misalnya, "tambahkan garam secukupnya" adalah langkah yang ambigu karena tidak memiliki kriteria pasti. Langkah-langkah dalam algoritma harus sistematis dan terstruktur, serta terbatas, agar mencapai penyelesaian yang diinginkan.</p><p><strong>Struktur Algoritma</strong></p><p>Inti dari algoritma adalah menemukan solusi dari suatu permasalahan. Algoritma membutuhkan spesifikasi input, memprosesnya melalui serangkaian langkah, dan menghasilkan output sebagai solusi.</p><p>Struktur algoritma umumnya terdiri dari:</p><ol><li><strong>Nama/Judul Algoritma</strong>: Memberikan gambaran singkat tujuan algoritma.</li><li><strong>Bagian Deklarasi</strong>: Tahap persiapan algoritma, menjelaskan kebutuhan agar algoritma dapat berjalan.</li><li><strong>Bagian Deskripsi</strong>: Serangkaian langkah-langkah atau pernyataan untuk memproses input dan menghasilkan output yang diharapkan.</li></ol><p>Contoh Algoritma:
        <strong>Resep Puding Mutiara</strong>
        Bahan: tepung hunkwe, gula pasir, santan kental, air, mutiara/pacar cina, daun pandan, garam.
        Cara Pembuatan:</p><ol><li>Campurkan tepung hunkwe, gula pasir, dan santan. Tambahkan air, garam, dan daun pandan, lalu masak sambil diaduk.</li><li>Masukkan mutiara ke dalam adonan tepung hunkwe, aduk rata.</li><li>Tunggu hingga adonan mendidih dan mengental, angkat dan tuang dalam cetakan.</li><li>Dinginkan puding, keluarkan dari cetakan, dan sajikan.</li></ol><p>Proses dalam algoritma resep masakan tersebut disusun sistematis dalam bentuk urutan rangkaian kerja.</p><p dir="ltr"></p></div>`)
        
        $loading.modal('hide')
        $('.modal-backdrop.fade.show').remove()
    }, 5000);
}