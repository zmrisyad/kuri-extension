const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

function autoGrade() {
    const $loading = $('#loading')
    $loading.modal('show')

    setTimeout(() => {
        $('.editor_atto_content').html(`<p dir="ltr" style="text-align: left;"></p><ol id="yui_3_17_2_1_1702348064763_956"><li><b>Buka Control Panel</b></li><li><b>Akses Program dan Fitur</b></li><li><b>Cari Software yang Ingin Dihapus</b></li><li id="yui_3_17_2_1_1702348064763_955"><b id="yui_3_17_2_1_1702348064763_952">Uninstall Software</b></li></ol><br><p></p>`)

        $('.felement.ftext input').eq(0).val(1)

        $loading.modal('hide')
    }, 5000);
}

function renderPage() {
    $('[role="main"] h3').eq(0).text('Grading question 1: Algoritma')
    $('.qtext p').text('Buatlah algoritma mengenai cara menghapus software dalam Sistem Operasi Windows 7!')
    $('.qtype_essay_editor.qtype_essay_response.readonly').html(`<p dir="ltr" style="text-align:left;"></p>
    <ul><li><b>Buka Control Panel</b></li><li><b>Akses Program dan Fitur</b></li><li><b>Cari Software yang Ingin Dihapus</b></li><li><b>Uninstall Software</b></li></ul>`)
    $('.mdl-align:last').prepend(`<button type="button" class="btn btn-outline-primary mr-2" id="autoGrade">Auto Grade</button>`)

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

    $('#autoGrade').on('click', function () {
        autoGrade()
    })
}

renderPage()