const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

const btnChatHtmlString = `<li class="nav-item">
    <a class="nav-link " href="javascript:;" onclick="showChat()">
        Chat Materi
    </a>
</li>`

if (document.getElementsByClassName('nav').length > 0) {
    const $navbar = document.getElementsByClassName('nav')[0]

    $navbar.appendChild(convertStringToHTML(btnChatHtmlString))
}

function showChat() {
    if ($('#modalChat').length == 0) {
        $('#page-wrapper').append(`<form action="#" onsubmit="sendChat(event)">
            <div class="modal fade" id="modalChat" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-scrollable" role="document"
                 style="width: 320px; min-height: 100%; max-height: 100%; margin: 0 0 0 auto;">
                    <div class="modal-content" style="max-height: 100vh;">
                        <div class="modal-header">
                            <h5 class="modal-title">Chat Materi</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body message-app">
                            <p class="text-center">No chat history available.</p>
                        </div>
                        <div class="modal-footer flex-nowrap">
                            <input type="text" class="form-control flex-fill mr-2" required>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-paper-plane fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>`)
    }
    
    const $modal = $('#modalChat')

    $modal.modal('show')
}

function sendChat(e) {
    e.preventDefault()
    
    const $modal = $('#modalChat')
    , $modalBody = $modal.find('.modal-body')

    if ($modalBody.find('.message').length == 0) {
        $modalBody.html('')
    }

    const currentDate = new Date()
    , month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"][currentDate.getMonth()]
    , date = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`
    , time = `${currentDate.getHours()}:${currentDate.getMinutes()}`

    if ($modalBody.find('h6').length == 0) {
        $modalBody.append(`<div class="d-flex flex-column" data-region="day-messages-container">
            <h6 class="text-center mb-4 day">${date}</h6>
        </div>`)
    }

    const $input = $modal.find('.form-control')
    , $container = $modalBody.find('[data-region="day-messages-container"]')
    $container.append(`<div class="message clickable d-flex flex-column p-2 mx-1 position-relative send  rounded mb-2 mt-2" role="checkbox" aria-checked="false" tabindex="0">
        <div class="tail position-absolute"></div>
        <div class="d-flex align-items-center ">
            <div class="ml-auto small text-right time " style="flex-shrink: 0" data-region="time-created">${time}</div>
        </div>
        <div dir="auto" align="initial" data-region="text-container">
            <p>${$input.val()}</p>
        </div>
    </div>`)
    $input.val('')

    setTimeout(() => {
        sendResponse()
    }, 1000);
}

function sendResponse() {
    const currentDate = new Date()
    , time = `${currentDate.getHours()}:${currentDate.getMinutes()}`

    const $modal = $('#modalChat')
    , $modalBody = $modal.find('.modal-body')
    , $container = $modalBody.find('[data-region="day-messages-container"]')
    , replies = [
        'Halo Dadang, ada yang bisa dibantu?',
        'Algoritma adalah serangkaian langkah-langkah terstruktur yang dirancang untuk menyelesaikan masalah atau tugas tertentu. Algoritma berfungsi sebagai panduan atau resep yang mengarahkan langkah-langkah spesifik yang harus diambil untuk mencapai suatu tujuan atau menyelesaikan suatu masalah.',
        `Mari kita lihat contoh sederhana algoritma untuk mencari nilai terbesar dari dua angka. Misalkan kita memiliki dua angka, A dan B, dan kita ingin menemukan nilai terbesar di antara keduanya. Berikut adalah algoritma dalam bentuk pseudocode (kode yang menyerupai kode pemrograman, tetapi tidak terikat dengan bahasa pemrograman tertentu)<br>
        <code>
            1. Masukkan nilai A<br>
            2. Masukkan nilai B<br>
            3. Jika A > B, maka<br>
                a. Cetak "Nilai terbesar adalah A"<br>
            Jika tidak,<br>
                b. Cetak "Nilai terbesar adalah B"<br>
            4. Selesai<br>
        </code>
        Dalam contoh ini, langkah-langkah algoritma tersebut adalah:<br>
        <ol>
            <li>Masukkan nilai A.</li>
            <li>Masukkan nilai B.</li>
            <li>Jika A lebih besar dari B, cetak "Nilai terbesar adalah A"; jika tidak, cetak "Nilai terbesar adalah B".</li>
            <li>Selesai.</li>
        </ol>
        Algoritma ini memberikan panduan langkah-langkah yang jelas untuk menyelesaikan masalah, yaitu menentukan nilai terbesar antara dua angka. Algoritma semacam ini dapat diimplementasikan dalam berbagai bahasa pemrograman, seperti Python, Java, C++, dll., dengan menyesuaikan sintaksis sesuai dengan bahasa yang digunakan.`
    ]

    $container.append(`<div class="message clickable d-flex flex-column p-2 mx-1 position-relative received rounded mb-2 mt-2" data-region="message" data-message-id="2" role="checkbox" aria-checked="false" tabindex="0">
        <div class="tail position-absolute"></div>
        <div class="d-flex align-items-center pb-2">
            <div style="flex-shrink: 0">
                <img class="rounded-circle" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/u/f1" alt="Chat Materi" aria-hidden="true" style="height: 30px">
            </div>
            <div class="text-truncate pl-2 pr-2">
                <h6 class="text-truncate m-0 font-weight-bold">Chat Materi</h6>
            </div>
            <div class="ml-auto small text-right time " style="flex-shrink: 0" data-region="time-created">
                ${time}
            </div>
        </div>
        <div dir="auto" align="initial" data-region="text-container">
            <p>${replies[$modalBody.find('.received').length]}</p>
        </div>
    </div>`)
}