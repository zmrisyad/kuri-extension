const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

const emptyTopicsHtmlString = `<li id="section-0" class="section course-section main  clearfix

" data-sectionid="0" data-sectionreturnid="0" data-for="section" data-id="336" data-number="0" data-indexed="true" data-locked="false" aria-busy="false">
<div class="course-section-header d-flex" data-for="section_title" data-id="336" data-number="0" id="yui_3_17_2_1_1702267268756_56">

<div class="d-flex align-items-start position-relative">
<a role="button" data-toggle="collapse" href="#coursecontentcollapse0" id="collapssesection0" aria-expanded="true" aria-controls="coursecontentcollapse0" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center stretched-link" aria-label="General">
<span class="expanded-icon icon-no-margin p-2" title="Collapse">
<i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
</span>
<span class="collapsed-icon icon-no-margin p-2" title="Expand">
<span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
<span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
</span>
</a>
<h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-336-title" data-for="section_title" data-id="336" data-number="0">
General
</h3>
</div>
<div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
</div>
<div class="flex-fill d-flex justify-content-end mr-2 align-self-start mt-2" id="yui_3_17_2_1_1702267268756_55">
<a id="collapsesections" class="section-collapsemenu" href="#" aria-expanded="true" role="button" data-toggle="toggleall" aria-controls="collapssesection0 collapssesection1 collapssesection2 collapssesection3 collapssesection4">
<span class="collapseall text-nowrap" id="yui_3_17_2_1_1702267268756_54">Collapse all</span>
<span class="expandall text-nowrap" id="yui_3_17_2_1_1702267268756_60">Expand all</span>
</a>
</div>
</div>
<div id="coursecontentcollapse0" class="content course-content-item-content collapse show" style="">
<div class=" my-3" data-for="sectioninfo">
<div class="section_availability course-description-item">
</div>
</div>
<ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
<li class="activity activity-wrapper forum modtype_forum  hasinfo " id="module-72" data-for="cmitem" data-id="72" data-indexed="true">
<div class="activity-item " data-activityname="Announcements">

<div class="activity-basis d-flex align-items-center">
<div class="d-flex flex-column flex-md-row w-100 align-self-start">
<div class="activity-instance d-flex flex-column">
<div class="activitytitle media  modtype_forum position-relative align-self-start">
<div class="activityiconcontainer collaboration courseicon align-self-start mr-3">
<img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/forum/1700722742/monologo?filtericon=1" class="activityicon " alt="Forum icon">
</div>
<div class="media-body align-self-center">
<div class="activityname">
<a href="http://moodle.waski.xyz/moodle/mod/forum/view.php?id=72" class=" aalink stretched-link" onclick="">        <span class="instancename">Announcements <span class="accesshide "> Forum</span></span>    </a>

</div>
</div>
</div>
</div>

<div class="activity-info mt-1 mt-md-0">
<div data-region="activity-information" data-activityname="Announcements" class="activity-information">
</div>
</div>
</div>

</div>

<div class="description">
</div>
</div>
</li>
</ul>

</div>
</li>
<li id="section-1" class="section course-section main  clearfix

" data-sectionid="1" data-sectionreturnid="0" data-for="section" data-id="337" data-number="1" data-indexed="true" data-locked="false" aria-busy="false">
<div class="course-section-header d-flex" data-for="section_title" data-id="337" data-number="1">

<div class="d-flex align-items-start position-relative">
<a role="button" data-toggle="collapse" href="#coursecontentcollapse1" id="collapssesection1" aria-expanded="true" aria-controls="coursecontentcollapse1" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center stretched-link" aria-label="Topic 1">
<span class="expanded-icon icon-no-margin p-2" title="Collapse">
<i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
</span>
<span class="collapsed-icon icon-no-margin p-2" title="Expand">
<span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
<span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
</span>
</a>
<h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-337-title" data-for="section_title" data-id="337" data-number="1">
Topic 1
</h3>
</div>
<div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
</div>
</div>
<div id="coursecontentcollapse1" class="content course-content-item-content collapse show" style="">
<div class=" my-3" data-for="sectioninfo">
<div class="section_availability course-description-item">
</div>
</div>
<ul class="section m-0 p-0 img-text " data-for="cmlist">
</ul>

</div>
</li>
<li id="section-2" class="section course-section main  clearfix

" data-sectionid="2" data-sectionreturnid="0" data-for="section" data-id="338" data-number="2" data-indexed="true" data-locked="false" aria-busy="false">
<div class="course-section-header d-flex" data-for="section_title" data-id="338" data-number="2">

<div class="d-flex align-items-start position-relative">
<a role="button" data-toggle="collapse" href="#coursecontentcollapse2" id="collapssesection2" aria-expanded="true" aria-controls="coursecontentcollapse2" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center stretched-link" aria-label="Topic 2">
<span class="expanded-icon icon-no-margin p-2" title="Collapse">
<i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
</span>
<span class="collapsed-icon icon-no-margin p-2" title="Expand">
<span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
<span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
</span>
</a>
<h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-338-title" data-for="section_title" data-id="338" data-number="2">
Topic 2
</h3>
</div>
<div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
</div>
</div>
<div id="coursecontentcollapse2" class="content course-content-item-content collapse show" style="">
<div class=" my-3" data-for="sectioninfo">
<div class="section_availability course-description-item">
</div>
</div>
<ul class="section m-0 p-0 img-text " data-for="cmlist">
</ul>

</div>
</li>
<li id="section-3" class="section course-section main  clearfix

" data-sectionid="3" data-sectionreturnid="0" data-for="section" data-id="339" data-number="3" data-indexed="true" data-locked="false" aria-busy="false">
<div class="course-section-header d-flex" data-for="section_title" data-id="339" data-number="3">

<div class="d-flex align-items-start position-relative">
<a role="button" data-toggle="collapse" href="#coursecontentcollapse3" id="collapssesection3" aria-expanded="true" aria-controls="coursecontentcollapse3" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center stretched-link" aria-label="Topic 3">
<span class="expanded-icon icon-no-margin p-2" title="Collapse">
<i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
</span>
<span class="collapsed-icon icon-no-margin p-2" title="Expand">
<span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
<span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
</span>
</a>
<h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-339-title" data-for="section_title" data-id="339" data-number="3">
Topic 3
</h3>
</div>
<div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
</div>
</div>
<div id="coursecontentcollapse3" class="content course-content-item-content collapse show" style="">
<div class=" my-3" data-for="sectioninfo">
<div class="section_availability course-description-item">
</div>
</div>
<ul class="section m-0 p-0 img-text " data-for="cmlist">
</ul>

</div>
</li>
<li id="section-4" class="section course-section main  clearfix

" data-sectionid="4" data-sectionreturnid="0" data-for="section" data-id="340" data-number="4" data-indexed="true" data-locked="false" aria-busy="false">
<div class="course-section-header d-flex" data-for="section_title" data-id="340" data-number="4">

<div class="d-flex align-items-start position-relative">
<a role="button" data-toggle="collapse" href="#coursecontentcollapse4" id="collapssesection4" aria-expanded="true" aria-controls="coursecontentcollapse4" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center stretched-link" aria-label="Topic 4">
<span class="expanded-icon icon-no-margin p-2" title="Collapse">
<i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
</span>
<span class="collapsed-icon icon-no-margin p-2" title="Expand">
<span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
<span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
</span>
</a>
<h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-340-title" data-for="section_title" data-id="340" data-number="4">
Topic 4
</h3>
</div>
<div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
</div>
</div>
<div id="coursecontentcollapse4" class="content course-content-item-content collapse show" style="">
<div class=" my-3" data-for="sectioninfo">
<div class="section_availability course-description-item">
</div>
</div>
<ul class="section m-0 p-0 img-text " data-for="cmlist">
</ul>

</div>
</li>`

if (document.getElementsByClassName('topics').length > 0) {
    document.getElementsByClassName('topics')[0].innerHTML = ''
    document.getElementsByClassName('topics')[0].appendChild(convertStringToHTML(emptyTopicsHtmlString))
}

const $navItem = document.createElement('li')
$navItem.className = 'nav-item'

const $navLink = document.createElement('a')
$navLink.id = 'importCourse'
$navLink.className = 'nav-link'
$navLink.innerHTML = 'Import'
$navLink.href = 'javascript:;'

$navItem.appendChild($navLink)

const $input = document.createElement('input')
$input.type = 'file'
$input.style.display = 'none'
$input.setAttribute('accept', '.docx')
if (document.getElementsByTagName('body').length > 0) {
    document.getElementsByTagName('body')[0].appendChild($input)
}

const $nav = document.getElementsByClassName('nav')

if ($nav.length > 0) {
    $nav[1].appendChild($navItem)
}

function showFiles() {
    $input.click()
}

const $importCourse = document.getElementById('importCourse')
$importCourse.addEventListener('click', showFiles, true)

$input.addEventListener('change', renderCourse, true);

function renderCourse() {
    const $container = $('.topics')
    
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
        $container.html(`<li id="section-0" class="section course-section main  clearfix
        
        " data-sectionid="0" data-sectionreturnid="0" data-for="section" data-id="162" data-number="0" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="162" data-number="0">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse0" id="collapssesection0" aria-expanded="true" aria-controls="coursecontentcollapse0" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="General">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-162-title" data-for="section_title" data-id="162" data-number="0">
        General
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        <div class="flex-fill d-flex justify-content-end mr-2 align-self-start mt-2">
        <a id="collapsesections" class="section-collapsemenu" href="#" aria-expanded="true" role="button" data-toggle="toggleall" aria-controls="collapssesection0 collapssesection1 collapssesection2 collapssesection3 collapssesection4 collapssesection5 collapssesection6 collapssesection7 collapssesection8">
        <span class="collapseall text-nowrap">Collapse all</span>
        <span class="expandall text-nowrap">Expand all</span>
        </a>
        </div>
        </div>
        <div id="coursecontentcollapse0" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper forum modtype_forum  hasinfo " id="module-21" data-for="cmitem" data-id="21" data-indexed="true">
        <div class="activity-item " data-activityname="Announcements">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_forum position-relative align-self-start">
        <div class="activityiconcontainer collaboration courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/forum/1700722742/monologo?filtericon=1" class="activityicon " alt="Forum icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/forum/view.php?id=21" class=" aalink stretched-link" onclick="">        <span class="instancename">Announcements <span class="accesshide "> Forum</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Announcements" class="activity-information">
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper attendance modtype_attendance  hasinfo " id="module-32" data-for="cmitem" data-id="32" data-indexed="true">
        <div class="activity-item " data-activityname="Attendance">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_attendance position-relative align-self-start">
        <div class="activityiconcontainer administration courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/attendance/1700722742/monologo?filtericon=1" class="activityicon " alt="Attendance icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/attendance/view.php?id=32" class=" aalink stretched-link" onclick="">        <span class="instancename">Attendance </span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Attendance" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-1" class="section course-section main  clearfix
        
        " data-sectionid="1" data-sectionreturnid="0" data-for="section" data-id="163" data-number="1" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="163" data-number="1">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse1" id="collapssesection1" aria-expanded="true" aria-controls="coursecontentcollapse1" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Alur logika pemrograman komputer">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-163-title" data-for="section_title" data-id="163" data-number="1">
        Alur logika pemrograman komputer
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse1" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-96" data-for="cmitem" data-id="96" data-indexed="true">
        <div class="activity-item " data-activityname="Alur logika pemrograman komputer">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=109" class=" aalink stretched-link" onclick="">        <span class="instancename">Alur logika pemrograman komputer <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Alur logika pemrograman komputer" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper quiz modtype_quiz  hasinfo " id="module-127" data-for="cmitem" data-id="127" data-indexed="true">
        <div class="activity-item " data-activityname="Quiz Alur Logika Pemrograman Komputer">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_quiz position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/quiz/1700722742/monologo?filtericon=1" class="activityicon " alt="Quiz icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/view.php?id=128" class=" aalink stretched-link" onclick="">        <span class="instancename">Quiz Alur Logika Pemrograman Komputer </span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Quiz Alur Logika Pemrograman Komputer" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-2" class="section course-section main  clearfix
        
        " data-sectionid="2" data-sectionreturnid="0" data-for="section" data-id="164" data-number="2" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="164" data-number="2">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse2" id="collapssesection2" aria-expanded="true" aria-controls="coursecontentcollapse2" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Perangkat lunak bahasa pemrograman ">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-164-title" data-for="section_title" data-id="164" data-number="2">
        Perangkat lunak bahasa pemrograman
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse2" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-35" data-for="cmitem" data-id="35" data-indexed="true">
        <div class="activity-item " data-activityname="Materi perangkat lunak bahasa pemrograman">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=35" class=" aalink stretched-link" onclick="">        <span class="instancename">Materi perangkat lunak bahasa pemrograman <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Materi perangkat lunak bahasa pemrograman" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-112" data-for="cmitem" data-id="112" data-indexed="true">
        <div class="activity-item " data-activityname="Instalasi perangkat lunak bahasa pemrograman">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=112" class=" aalink stretched-link" onclick="">        <span class="instancename">Instalasi perangkat lunak bahasa pemrograman <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Instalasi perangkat lunak bahasa pemrograman" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-113" data-for="cmitem" data-id="113" data-indexed="true">
        <div class="activity-item " data-activityname="Menguji hasil instalasi perangkat lunak bahasa pemrograman">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=113" class=" aalink stretched-link" onclick="">        <span class="instancename">Menguji hasil instalasi perangkat lunak bahasa pemrograman <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Menguji hasil instalasi perangkat lunak bahasa pemrograman" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-3" class="section course-section main  clearfix
        
        " data-sectionid="3" data-sectionreturnid="0" data-for="section" data-id="165" data-number="3" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="165" data-number="3">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse3" id="collapssesection3" aria-expanded="true" aria-controls="coursecontentcollapse3" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Alur pemrograman dengan struktur bahasa pemrograman komputer">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-165-title" data-for="section_title" data-id="165" data-number="3">
        Alur pemrograman dengan struktur bahasa pemrograman komputer
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse3" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-36" data-for="cmitem" data-id="36" data-indexed="true">
        <div class="activity-item " data-activityname="Materi alur pemrograman dengan struktur bahasa pemrograman komputer">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=36" class=" aalink stretched-link" onclick="">        <span class="instancename">Materi alur pemrograman dengan struktur bahasa pemrograman komputer <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Materi alur pemrograman dengan struktur bahasa pemrograman komputer" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-114" data-for="cmitem" data-id="114" data-indexed="true">
        <div class="activity-item " data-activityname="Menguji kode program bahasa pemrograman komputer">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=114" class=" aalink stretched-link" onclick="">        <span class="instancename">Menguji kode program bahasa pemrograman komputer <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Menguji kode program bahasa pemrograman komputer" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-4" class="section course-section main  clearfix
        
        " data-sectionid="4" data-sectionreturnid="0" data-for="section" data-id="390" data-number="4" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="390" data-number="4">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse4" id="collapssesection4" aria-expanded="true" aria-controls="coursecontentcollapse4" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="UTS">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-390-title" data-for="section_title" data-id="390" data-number="4">
        UTS
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse4" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper quiz modtype_quiz  hasinfo " id="module-126" data-for="cmitem" data-id="126" data-indexed="true">
        <div class="activity-item " data-activityname="UTS">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_quiz position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/quiz/1700722742/monologo?filtericon=1" class="activityicon " alt="Quiz icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/view.php?id=126" class=" aalink stretched-link" onclick="">        <span class="instancename">UTS <span class="accesshide "> Quiz</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="UTS" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-5" class="section course-section main  clearfix
        
        " data-sectionid="5" data-sectionreturnid="0" data-for="section" data-id="166" data-number="5" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="166" data-number="5">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse5" id="collapssesection5" aria-expanded="true" aria-controls="coursecontentcollapse5" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Penggunaan tipe data, variabel, konstanta, operator, dan ekspresi ">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-166-title" data-for="section_title" data-id="166" data-number="5">
        Penggunaan tipe data, variabel, konstanta, operator, dan ekspresi
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse5" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-115" data-for="cmitem" data-id="115" data-indexed="true">
        <div class="activity-item " data-activityname="Materi penggunaan tipe data, variabel, konstanta, operator, dan ekspresi">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=115" class=" aalink stretched-link" onclick="">        <span class="instancename">Materi penggunaan tipe data, variabel, konstanta, operator, dan ekspresi <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Materi penggunaan tipe data, variabel, konstanta, operator, dan ekspresi" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-116" data-for="cmitem" data-id="116" data-indexed="true">
        <div class="activity-item " data-activityname="Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=116" class=" aalink stretched-link" onclick="">        <span class="instancename">Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-117" data-for="cmitem" data-id="117" data-indexed="true">
        <div class="activity-item " data-activityname="Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta, operator, ekspresi">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=117" class=" aalink stretched-link" onclick="">        <span class="instancename">Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta, operator, ekspresi <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Membuat aplikasi program yang menerapkan tipe data, variabel/konstanta, operator, ekspresi" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-6" class="section course-section main  clearfix
        
        " data-sectionid="6" data-sectionreturnid="0" data-for="section" data-id="212" data-number="6" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="212" data-number="6">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse6" id="collapssesection6" aria-expanded="true" aria-controls="coursecontentcollapse6" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Operasi aritmatika dan logika">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-212-title" data-for="section_title" data-id="212" data-number="6">
        Operasi aritmatika dan logika
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse6" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-118" data-for="cmitem" data-id="118" data-indexed="true">
        <div class="activity-item " data-activityname="Materi operasi aritmatika dan  logika">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=118" class=" aalink stretched-link" onclick="">        <span class="instancename">Materi operasi aritmatika dan  logika <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Materi operasi aritmatika dan  logika" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-119" data-for="cmitem" data-id="119" data-indexed="true">
        <div class="activity-item " data-activityname="Operator aritmatika">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=119" class=" aalink stretched-link" onclick="">        <span class="instancename">Operator aritmatika <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Operator aritmatika" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-120" data-for="cmitem" data-id="120" data-indexed="true">
        <div class="activity-item " data-activityname="Operator logika">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=120" class=" aalink stretched-link" onclick="">        <span class="instancename">Operator logika <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Operator logika" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-7" class="section course-section main  clearfix
        
        " data-sectionid="7" data-sectionreturnid="0" data-for="section" data-id="213" data-number="7" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="213" data-number="7">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse7" id="collapssesection7" aria-expanded="true" aria-controls="coursecontentcollapse7" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="Struktur kontrol Percabangan dalam bahasa pemrograman">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-213-title" data-for="section_title" data-id="213" data-number="7">
        Struktur kontrol Percabangan dalam bahasa pemrograman
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse7" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper book modtype_book  hasinfo " id="module-121" data-for="cmitem" data-id="121" data-indexed="true">
        <div class="activity-item " data-activityname="Struktur kontrol percabangan dalam bahasa pemrograman">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_book position-relative align-self-start">
        <div class="activityiconcontainer content courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/book/1700722742/monologo?filtericon=1" class="activityicon " alt="Book icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/book/view.php?id=121" class=" aalink stretched-link" onclick="">        <span class="instancename">Struktur kontrol percabangan dalam bahasa pemrograman <span class="accesshide "> Book</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Struktur kontrol percabangan dalam bahasa pemrograman" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-122" data-for="cmitem" data-id="122" data-indexed="true">
        <div class="activity-item " data-activityname="Percabangan tidak bersyarat">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=122" class=" aalink stretched-link" onclick="">        <span class="instancename">Percabangan tidak bersyarat <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Percabangan tidak bersyarat" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-123" data-for="cmitem" data-id="123" data-indexed="true">
        <div class="activity-item " data-activityname="Percabangan sederhana">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=123" class=" aalink stretched-link" onclick="">        <span class="instancename">Percabangan sederhana <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Percabangan sederhana" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-124" data-for="cmitem" data-id="124" data-indexed="true">
        <div class="activity-item " data-activityname="Percabangan bertingkat">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=124" class=" aalink stretched-link" onclick="">        <span class="instancename">Percabangan bertingkat <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Percabangan bertingkat" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        <li class="activity activity-wrapper assign modtype_assign  hasinfo " id="module-125" data-for="cmitem" data-id="125" data-indexed="true">
        <div class="activity-item " data-activityname="Percabangan bersarang">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_assign position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/assign/1700722742/monologo?filtericon=1" class="activityicon " alt="Assignment icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/assign/view.php?id=125" class=" aalink stretched-link" onclick="">        <span class="instancename">Percabangan bersarang <span class="accesshide "> Assignment</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="Percabangan bersarang" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>
        <li id="section-8" class="section course-section main  clearfix
        
        " data-sectionid="8" data-sectionreturnid="0" data-for="section" data-id="391" data-number="8" data-indexed="true">
        <div class="course-section-header d-flex" data-for="section_title" data-id="391" data-number="8">
        
        <div class="d-flex align-items-start position-relative">
        <a role="button" data-toggle="collapse" href="#coursecontentcollapse8" id="collapssesection8" aria-expanded="true" aria-controls="coursecontentcollapse8" class="btn btn-icon mr-1 icons-collapse-expand justify-content-center
        stretched-link 
        " aria-label="UAS">
        <span class="expanded-icon icon-no-margin p-2" title="Collapse">
        <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true"></i>
        </span>
        <span class="collapsed-icon icon-no-margin p-2" title="Expand">
        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>
        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
        </span>
        </a>
        <h3 class="sectionname course-content-item d-flex align-self-stretch align-items-center mb-0" id="sectionid-391-title" data-for="section_title" data-id="391" data-number="8">
        UAS
        </h3>
        </div>
        <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
        </div>
        </div>
        <div id="coursecontentcollapse8" class="content 
        course-content-item-content collapse show
        ">
        <div class=" my-3" data-for="sectioninfo">
        <div class="section_availability course-description-item">
        </div>
        </div>
        <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
        <li class="activity activity-wrapper quiz modtype_quiz  hasinfo " id="module-104" data-for="cmitem" data-id="104" data-indexed="true">
        <div class="activity-item " data-activityname="UAS">
        
        <div class="activity-basis d-flex align-items-center">
        <div class="d-flex flex-column flex-md-row w-100 align-self-start">
        <div class="activity-instance d-flex flex-column">
        <div class="activitytitle media  modtype_quiz position-relative align-self-start">
        <div class="activityiconcontainer assessment courseicon align-self-start mr-3">
        <img src="http://moodle.waski.xyz/moodle/theme/image.php/boost/quiz/1700722742/monologo?filtericon=1" class="activityicon " alt="Quiz icon">
        </div>
        <div class="media-body align-self-center">
        <div class="activityname">
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/view.php?id=104" class=" aalink stretched-link" onclick="">        <span class="instancename">UAS <span class="accesshide "> Quiz</span></span>    </a>
        
        </div>
        </div>
        </div>
        </div>
        
        <div class="activity-info mt-1 mt-md-0">
        <div data-region="activity-information" data-activityname="UAS" class="activity-information">
        <div data-region="completion-info">
        <button class="btn btn-outline-secondary btn-sm text-nowrap" disabled="">
        Mark as done
        </button>
        
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
        <div class="description">
        </div>
        </div>
        </li>
        </ul>
        
        </div>
        </li>`)
        
        $loading.modal('hide')
        $('.modal-backdrop.fade.show').remove()
    }, 5000);
    
}
