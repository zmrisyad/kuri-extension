const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

const $container = document.getElementById('block-region-content')

let suggestionHtmlString = ''
, noteHtmlString = ''

if (document.getElementsByClassName('userinitials').length > 0) {
    if (document.getElementsByClassName('userinitials')[0].innerHTML == 'DB') {
        suggestionHtmlString = `<ol>
            <li>
                    <h6 class"text-primary">Berpartisipasi Aktif dalam Pembelajaran</h6>
                    <p>Berpartisipasilah aktif dalam kelas, ajukan pertanyaan, dan berikan tanggapan. Ini akan memperkaya pengalaman belajar Anda.</p>
            </li>
            <li>
                <h6 class"text-primary">Atur Prioritas dan Manajemen Waktu</h6>
                <p>Pelajari cara mengatur prioritas dan manajemen waktu dengan baik. Ini membantu Anda mengelola tugas-tugas sekolah dan kegiatan ekstrakurikuler.</p>
            </li>
            <li>
                <h6 class"text-primary">Berkomunikasi secara Terbuka dengan Guru</h6>
                <p>Berkomunikasilah secara terbuka dengan guru. Jangan ragu untuk meminta bantuan atau penjelasan tambahan jika Anda mengalami kesulitan.</p>
            </li>
            <li>
                <h6 class"text-primary">Libatkan Diri dalam Proyek dan Aktivitas Ekstrakurikuler</h6>
                <p>Ikutlah dalam proyek dan aktivitas ekstrakurikuler. Ini tidak hanya menambah keterampilan Anda tetapi juga memperluas lingkaran sosial.</p>
            </li>
            <li>
                <h6 class"text-primary">Berkolaborasi dengan Teman Sejawat</h6>
                <p>Pelajari seni bekerja sama dengan teman sejawat. Kolaborasi dapat membantu Anda memecahkan masalah dengan cara yang lebih kreatif.</p>
            </li>
        </ol>`

        noteHtmlString = `Kamu menunjukkan kemajuan yang konsisten dalam pemahaman materi dan penerapan dalam tugas dan ujian`
    } else {
        suggestionHtmlString = `<ol>
            <li>
                <h6 class"text-primary">Aktif Terlibat dalam Pendidikan Anak</h6>
                <p>Sertakan diri Anda dalam proses pendidikan anak. Terlibat dalam pertemuan orang tua-guru, acara sekolah, dan proyek-proyek kelas.</p>
            </li>
            <li>
                <h6 class"text-primary">Dorong Rutinitas Belajar yang Konsisten</h6>
                <p>Bantu anak Anda menetapkan rutinitas belajar yang konsisten di rumah. Ketersediaan ruang belajar yang tenang dan terorganisir dapat sangat membantu.</p>
            </li>
            <li>
                <h6 class"text-primary">Komunikasi Terbuka tentang Kemajuan Akademis</h6>
                <p>Selalu terbuka untuk berbicara tentang kemajuan akademis anak Anda. Pertukaran informasi ini dapat membantu kita bekerja sama untuk mencapai tujuan pendidikan anak..</p>
            </li>
            <li>
                <h6 class"text-primary">Partisipasi dalam Pendidikan Karakter</h6>
                <p>Selain akademis, penting untuk mendukung pengembangan karakter anak. Diskusikan nilai-nilai, etika, dan tanggung jawab bersama-sama.</p>
            </li>
            <li>
                <h6 class"text-primary">Pantau Kehadiran dan Tugas</h6>
                <p>Selalu pantau kehadiran anak Anda dan beri perhatian khusus pada tugas dan proyek. Ini membantu membangun kebiasaan tanggung jawab.</p>
            </li>
        </ol>`

        noteHtmlString = `Siswa menunjukkan kemajuan yang konsisten dalam pemahaman materi dan penerapannya dalam tugas dan ujian`
    }
}
const cardHtmlString = `<div class="row" id="cards">
    <div class="col-4 mb-3">
        <div class="card h-100">
            <div class="card-body p-3">
                <h5 id="instance-25-header" class="card-title">Attendance</h5>
                <h3 class="text-primary">96%</h3>
            </div>
        </div>
    </div>
    <div class="col-8 mb-3">
        <div class="card h-100">
            <div class="card-body p-3">
                <h5 id="instance-25-header" class="card-title">Notes</h5>
                <p class="">${noteHtmlString}</p>
            </div>
        </div>
    </div>
    <div class="col-12 mb-3">
        <div class="card">
            <div class="card-body p-3">
                <h5 id="instance-25-header" class="card-title">Suggestions</h5>
                ${suggestionHtmlString}
            </div>
        </div>
    </div>
</div>`

$container.appendChild(convertStringToHTML(cardHtmlString))

const sectionHtmlString = `<section id="inst25" class=" block_timeline block  card mb-3" role="complementary" data-block="timeline" data-instance-id="25" aria-labelledby="instance-25-header">
    <div class="card-body p-3">
        <h5 id="instance-25-header" class="card-title d-inline">Current Semester Quiz & Assignment Points</h5>
        <div id="chartContainer"></div>
    </div>
</section>`

$container.appendChild(convertStringToHTML(sectionHtmlString))

if (document.getElementById('chartContainer')) {
    renderChart()
}

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
);

function renderChart() {
    var options = {
            series: [
                {
                    name: "Pemrograman Dasar",
                    data: [93, 95, 96, 86, 84, 87, 80, 89]
                },
                {
                    name: "Komputer dan Jaringan Dasar",
                    data: [75, 75, 80, 84, 86, 90, 88, 86]
                },
                {
                    name: "Simulasi dan Komunikasi Digital",
                    data: [80, 77, 83, 85, 98, 80, 80, 78]
                },
                {
                    name: "Sistem Komputer",
                    data: [98, 90, 87, 84, 82, 85, 88, 88]
                }
            ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['2023-12-04', '2023-12-06', '2023-12-07', '2023-12-08', '2023-12-11', '2023-12-12', '2023-12-13', '2023-12-14'],
            labels: {
                format: 'dd MM yy',
                hideOverlappingLabels: false
            }
        },
        yaxis: {
            max: 100,
            min: 0
        },
        markers: {
            size: 2
        }
    };

    var chart = new ApexCharts(document.querySelector("#chartContainer"), options);
    chart.render();
}

const $btnSendChat = document.querySelector('[data-action="send-message"]')
if ($btnSendChat) {
    $btnSendChat.addEventListener('click', sendChat, true)
}

function sendChat(e) {
    console.log(e);
    e.preventDefault()
}