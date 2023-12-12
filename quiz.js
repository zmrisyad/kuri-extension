const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    
    return html.body;
}

const $navItem = document.createElement('li')
$navItem.className = 'nav-item'

const $navLink = document.createElement('a')
$navLink.id = 'showModal'
$navLink.className = 'nav-link'
$navLink.innerHTML = 'Generate Questions'
$navLink.href = 'javascript:;'

$navItem.appendChild($navLink)

const $nav = document.getElementsByClassName('nav')
if ($nav.length > 0) {
    $nav[1].appendChild($navItem)
}

const $showModal = document.getElementById('showModal')
$showModal.addEventListener('click', showModal, true)

function generateQuestion() {
    const $modal = $('#questionModal')
    , $header = $('.mod_quiz-edit-top-controls')
    , $container = $('.slots.only-one-section')
    
    $modal.find('.modal-body').html(`<div class="spinner-border text-primary mb-3" role="status">
    <span class="sr-only">Loading...</span>
    </div>
    <p class="mb-0">Please wait...</p>`)
    $modal.find('.modal-body').addClass('d-flex flex-column justify-content-center align-items-center')

    setTimeout(() => {
        $header.html(`<div class="d-flex justify-content-between flex-wrap mb-1" id="yui_3_17_2_1_1702344834747_615"><div class="d-flex flex-column justify-content-around" id="yui_3_17_2_1_1702344834747_614"><div class="statusbar" id="yui_3_17_2_1_1702344834747_613"><span class="numberofquestions">Questions: 10</span> | <span class="quizopeningstatus" title="Always available" id="yui_3_17_2_1_1702344834747_612">This quiz is open</span></div></div><div class="maxgrade"><form method="post" action="edit.php" class="quizsavegradesform form-inline"><fieldset class="invisiblefieldset"><input type="hidden" name="sesskey" value="Z87Mc7wbML"><input type="hidden" name="cmid" value="127">
        <label for="inputmaxgrade">Maximum grade </label><input type="text" id="inputmaxgrade" name="maxgrade" size="4" value="10.00" class="form-control"><input type="submit" class="btn btn-secondary ml-1" name="savechanges" value="Save"></fieldset></form></div></div><div class="d-flex justify-content-between flex-wrap mb-1"><div class="mod_quiz-edit-action-buttons btn-group edit-toolbar" role="group"><input type="submit" name="repaginate" id="repaginatecommand" value="Repaginate" class="btn btn-secondary mr-1" data-header="<span class=&quot;repaginatecommand&quot;>Repaginate</span>" data-form="<div id=&quot;repaginatedialog&quot;><form action=&quot;edit.php&quot; method=&quot;post&quot;><div><input type=&quot;hidden&quot; name=&quot;cmid&quot; value=&quot;127&quot; />
        <input type=&quot;hidden&quot; name=&quot;sesskey&quot; value=&quot;Z87Mc7wbML&quot; />
        Repaginate with <select class=&quot;select custom-select custom-select&quot; id=&quot;menuquestionsperpage&quot; name=&quot;questionsperpage&quot;><option value=&quot;0&quot;>Unlimited</option><option selected=&quot;selected&quot; value=&quot;1&quot;>1</option><option value=&quot;2&quot;>2</option><option value=&quot;3&quot;>3</option><option value=&quot;4&quot;>4</option><option value=&quot;5&quot;>5</option><option value=&quot;6&quot;>6</option><option value=&quot;7&quot;>7</option><option value=&quot;8&quot;>8</option><option value=&quot;9&quot;>9</option><option value=&quot;10&quot;>10</option><option value=&quot;11&quot;>11</option><option value=&quot;12&quot;>12</option><option value=&quot;13&quot;>13</option><option value=&quot;14&quot;>14</option><option value=&quot;15&quot;>15</option><option value=&quot;16&quot;>16</option><option value=&quot;17&quot;>17</option><option value=&quot;18&quot;>18</option><option value=&quot;19&quot;>19</option><option value=&quot;20&quot;>20</option><option value=&quot;21&quot;>21</option><option value=&quot;22&quot;>22</option><option value=&quot;23&quot;>23</option><option value=&quot;24&quot;>24</option><option value=&quot;25&quot;>25</option><option value=&quot;26&quot;>26</option><option value=&quot;27&quot;>27</option><option value=&quot;28&quot;>28</option><option value=&quot;29&quot;>29</option><option value=&quot;30&quot;>30</option><option value=&quot;31&quot;>31</option><option value=&quot;32&quot;>32</option><option value=&quot;33&quot;>33</option><option value=&quot;34&quot;>34</option><option value=&quot;35&quot;>35</option><option value=&quot;36&quot;>36</option><option value=&quot;37&quot;>37</option><option value=&quot;38&quot;>38</option><option value=&quot;39&quot;>39</option><option value=&quot;40&quot;>40</option><option value=&quot;41&quot;>41</option><option value=&quot;42&quot;>42</option><option value=&quot;43&quot;>43</option><option value=&quot;44&quot;>44</option><option value=&quot;45&quot;>45</option><option value=&quot;46&quot;>46</option><option value=&quot;47&quot;>47</option><option value=&quot;48&quot;>48</option><option value=&quot;49&quot;>49</option><option value=&quot;50&quot;>50</option></select> questions per page<input type=&quot;submit&quot; name=&quot;repaginate&quot; value=&quot;Go&quot; class=&quot;btn btn-secondary ml-1&quot; /></div></form></div>"><button type="button" name="selectmultiple" id="selectmultiplecommand" value="Select multiple items" class="btn btn-secondary">Select multiple items</button></div><div class="d-flex flex-column justify-content-around"><span class="totalpoints">Total of marks: <span class="mod_quiz_summarks">10.00</span></span></div></div><div class="btn-group selectmultiplecommand actions m-1" role="group"><button type="button" id="selectmultipledeletecommand" value="Delete selected" class="btn btn-secondary" data-action="toggle" data-togglegroup="quiz-questions" data-toggle="action" disabled="1">Delete selected</button> <button type="button" id="selectmultiplecancelcommand" value="Cancel" class="btn btn-secondary">Cancel</button></div><div class="btn-toolbar m-1" role="toolbar" aria-label="Select multiple toolbar"><div class="selectmultiplecommandbuttons"><button type="button" id="questionselectall" name="questionselectall" class="btn btn-secondary" data-action="toggle" data-toggle="master" data-togglegroup="quiz-questions" data-toggle-selectall="Select all" data-toggle-deselectall="Deselect all" data-checkall="1">
        
        Select all
        </button></div></div>`)
        
        
        $container.html(`<li id="section-11" class="section main clearfix" role="presentation" data-sectionname="Untitled section"><div class="content"><div class="section-heading"><div class="instancesectioncontainer"><h3><span class="sectioninstance"><span class="instancesection sr-only">Untitled section</span></span></h3><a class="editing_section" data-action="edit_section_title" role="button" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" title="Edit heading 'Untitled section'" role="img" aria-label="Edit heading 'Untitled section'"></i></a></div><span class="instanceshufflequestions" data-action="shuffle_questions"><span class="shuffle-progress"></span><input type="checkbox" id="shuffle-11" value="1" data-action="shuffle_questions" class="cm-edit-action"><label for="shuffle-11">Shuffle</label> <span class="shuffle-help-tip"><a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>If enabled, every time the quiz is attempted, the order of the questions in this section will be shuffled into a different random order.</p>
        
        <p>This can make it harder for students to share answers, but it also makes it harder for students to discuss a particular question with the teacher.</p>
        </div> " data-html="true" tabindex="0" data-trigger="focus" aria-label="Help">
        <i class="icon fa fa-question-circle text-info fa-fw " title="Help with Shuffle" role="img" aria-label="Help with Shuffle"></i>
        </a></span></span></div><ul class="section img-text yui3-dd-drop" data-draggroups="resource" id="yui_3_17_2_1_1702344834747_245"><li class="pagenumber activity yui3-dd-drop page" id="page-1"><h4>Page 1</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-1" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-1-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-1" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-1-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-1-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-1" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D1&amp;cmid=127&amp;category=16&amp;addonpage=1&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-1">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-1">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 1" data-action="questionbank" data-addonpage="1" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-2">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-2">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D1&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 1" data-addonpage="1" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-3">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-3">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=1" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-4">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-4">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=1"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity essay qtype_essay slot yui3-dd-drop" id="slot-106" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-106">
        <input id="selectquestion-1" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="1" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-1" class="sr-only">Select question 1</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 1</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Algoritma" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=37"><img class="icon activityicon" title="Essay" alt="Essay" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_essay/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Algoritma</span> <span class="questiontext">Buatlah algoritma mengenai cara menghapus ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-106" class="sr-only">Question version</label>
        <select id="version-106" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="106">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=37&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee11" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=1" id="action_link6577b88251aee12" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee13" class="cm-edit-action" title="No restriction on when question 1 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=1&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee10" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-2"><h4>Page 2</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-2" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-2-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-2" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-2-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-2-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-2" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D2&amp;cmid=127&amp;category=16&amp;addonpage=2&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-5">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-5">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 2" data-action="questionbank" data-addonpage="2" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-6">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-6">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D2&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 2" data-addonpage="2" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-7">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-7">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=2" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-8">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-8">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=2"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity essay qtype_essay slot yui3-dd-drop" id="slot-107" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-107">
        <input id="selectquestion-2" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="2" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-2" class="sr-only">Select question 2</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 2</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Algoritma Bahasa Natural" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=38"><img class="icon activityicon" title="Essay" alt="Essay" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_essay/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Algoritma Bahasa Natural</span> <span class="questiontext">Buatlah algoritma dengan bahasa natural untuk ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-107" class="sr-only">Question version</label>
        <select id="version-107" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="107">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=38&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee19" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=2" id="action_link6577b88251aee20" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee21" class="cm-edit-action" title="No restriction on when question 2 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=2&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee18" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-3"><h4>Page 3</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-3" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-3-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-3" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-3-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-3-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-3" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D3&amp;cmid=127&amp;category=16&amp;addonpage=3&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-9">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-9">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 3" data-action="questionbank" data-addonpage="3" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-10">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-10">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D3&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 3" data-addonpage="3" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-11">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-11">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=3" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-12">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-12">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=3"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity essay qtype_essay slot yui3-dd-drop" id="slot-108" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-108">
        <input id="selectquestion-3" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="3" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-3" class="sr-only">Select question 3</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 3</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Pseudocode" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=40"><img class="icon activityicon" title="Essay" alt="Essay" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_essay/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Pseudocode</span> <span class="questiontext">Buatlah algoritma dengan pseudocode untuk ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-108" class="sr-only">Question version</label>
        <select id="version-108" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="108">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=40&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee27" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=3" id="action_link6577b88251aee28" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee29" class="cm-edit-action" title="No restriction on when question 3 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=3&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee26" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-4"><h4>Page 4</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-4" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-4-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-4" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-4-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-4-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-4" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D4&amp;cmid=127&amp;category=16&amp;addonpage=4&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-13">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-13">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 4" data-action="questionbank" data-addonpage="4" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-14">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-14">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D4&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 4" data-addonpage="4" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-15">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-15">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=4" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-16">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-16">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=4"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-109" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-109">
        <input id="selectquestion-4" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="4" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-4" class="sr-only">Select question 4</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 4</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Konsep Algoritma" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=4"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Konsep Algoritma</span> <span class="questiontext">Tiga cara penyajian algoritma pemrograman ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-109" class="sr-only">Question version</label>
        <select id="version-109" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="109">
        <option value="0" selected="selected">Always latest</option>
        <option value="2">v2 (latest)</option>
        <option value="1">v1</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=4&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee35" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=4" id="action_link6577b88251aee36" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee37" class="cm-edit-action" title="No restriction on when question 4 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=4&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee34" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-5"><h4>Page 5</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-5" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-5-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-5" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-5-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-5-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-5" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D5&amp;cmid=127&amp;category=16&amp;addonpage=5&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-17">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-17">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 5" data-action="questionbank" data-addonpage="5" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-18">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-18">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D5&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 5" data-addonpage="5" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-19">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-19">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=5" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-20">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-20">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=5"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-110" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-110">
        <input id="selectquestion-5" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="5" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-5" class="sr-only">Select question 5</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 5</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Penyajian Algoritma" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=5"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Penyajian Algoritma</span> <span class="questiontext">Algoritma VolumeKubus
        VARIABEL S,V, = Bilangan ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-110" class="sr-only">Question version</label>
        <select id="version-110" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="110">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=5&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee43" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=5" id="action_link6577b88251aee44" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee45" class="cm-edit-action" title="No restriction on when question 5 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=5&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee42" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-6"><h4>Page 6</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-6" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-6-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-6" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-6-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-6-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-6" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D6&amp;cmid=127&amp;category=16&amp;addonpage=6&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-21">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-21">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 6" data-action="questionbank" data-addonpage="6" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-22">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-22">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D6&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 6" data-addonpage="6" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-23">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-23">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=6" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-24">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-24">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=6"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-111" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-111">
        <input id="selectquestion-6" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="6" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-6" class="sr-only">Select question 6</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 6</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Tipe Data" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=13"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Tipe Data</span> <span class="questiontext">Pernyataan berikut yang menjelaskan pengertian ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-111" class="sr-only">Question version</label>
        <select id="version-111" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="111">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=13&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee51" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=6" id="action_link6577b88251aee52" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee53" class="cm-edit-action" title="No restriction on when question 6 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=6&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee50" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-7"><h4>Page 7</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-7" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-7-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-7" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-7-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-7-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-7" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D7&amp;cmid=127&amp;category=16&amp;addonpage=7&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-25">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-25">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 7" data-action="questionbank" data-addonpage="7" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-26">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-26">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D7&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 7" data-addonpage="7" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-27">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-27">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=7" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-28">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-28">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=7"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-112" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-112">
        <input id="selectquestion-7" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="7" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-7" class="sr-only">Select question 7</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 7</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Tipe Data" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=12"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Tipe Data</span> <span class="questiontext">Tipe data yang tepat untuk menghitung rata-rata...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-112" class="sr-only">Question version</label>
        <select id="version-112" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="112">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=12&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee59" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=7" id="action_link6577b88251aee60" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee61" class="cm-edit-action" title="No restriction on when question 7 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=7&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee58" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-8"><h4>Page 8</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-8" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-8-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-8" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-8-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-8-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-8" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D8&amp;cmid=127&amp;category=16&amp;addonpage=8&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-29">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-29">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 8" data-action="questionbank" data-addonpage="8" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-30">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-30">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D8&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 8" data-addonpage="8" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-31">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-31">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=8" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-32">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-32">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=8"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-113" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-113">
        <input id="selectquestion-8" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="8" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-8" class="sr-only">Select question 8</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 8</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Tipe Data" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=11"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Tipe Data</span> <span class="questiontext">Pernyataan berikut yang menjelaskan pengertian ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-113" class="sr-only">Question version</label>
        <select id="version-113" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="113">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=11&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee67" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=8" id="action_link6577b88251aee68" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee69" class="cm-edit-action" title="No restriction on when question 8 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=8&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee66" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-9"><h4>Page 9</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-9" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-9-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-9" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-9-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-9-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-9" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D9&amp;cmid=127&amp;category=16&amp;addonpage=9&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-33">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-33">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 9" data-action="questionbank" data-addonpage="9" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-34">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-34">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D9&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 9" data-addonpage="9" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-35">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-35">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=9" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-36">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-36">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=9"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-114" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-114">
        <input id="selectquestion-9" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="9" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-9" class="sr-only">Select question 9</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 9</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Tipe Data" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=14"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Tipe Data</span> <span class="questiontext">Pernyataan berikut yang menjelaskan pengertian ...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-114" class="sr-only">Question version</label>
        <select id="version-114" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="114">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=14&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee75" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=9" id="action_link6577b88251aee76" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee77" class="cm-edit-action" title="No restriction on when question 9 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div><span class="page_split_join_wrapper"><a href="repaginate.php?quizid=11&amp;slot=9&amp;repag=1&amp;sesskey=Z87Mc7wbML" id="action_link6577b88251aee74" class="page_split_join cm-edit-action" title="Remove page break" data-action="removepagebreak"><img class="icon " alt="Remove page break" title="Remove page break" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/core/1700722742/e/remove_page_break"></a></span></li><li class="pagenumber activity yui3-dd-drop page" id="page-10"><h4>Page 10</h4><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-10" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-10-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-10" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-10-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-10-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-10" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D10&amp;cmid=127&amp;category=16&amp;addonpage=10&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-37">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-37">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank to page 10" data-action="questionbank" data-addonpage="10" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-38">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-38">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D10&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question to page 10" data-addonpage="10" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-39">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-39">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=10" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-40">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-40">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span><form class="addnewquestion" method="post" action="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php"><div><input type="hidden" name="returnurl" value="/mod/quiz/edit.php?cmid=127&amp;addonpage=10"><input type="hidden" name="cmid" value="127"><input type="hidden" name="appendqnumstring" value="addquestion"><input type="hidden" name="category" value="16"></div></form></li><li class="activity multichoice qtype_multichoice slot yui3-dd-drop" id="slot-115" data-canfinish="0"><div><span class="editing_move moodle-core-dragdrop-draghandle" title="Move" tabindex="0" data-draggroups="resource" role="button"><i class="icon fa fa-arrows fa-fw  iconsmall" aria-hidden="true" style="cursor: move;"></i></span><div class="mod-indent-outer" id="mod-indent-outer-slot-115">
        <input id="selectquestion-10" name="selectquestion[]" type="checkbox" class="select-multiple-checkbox" value="10" data-action="toggle" data-toggle="slave" data-togglegroup="quiz-questions">
        <label for="selectquestion-10" class="sr-only">Select question 10</label>
        <span class="slotnumber"><span class="accesshide">Question</span> 10</span>
        <div class="mod-indent"></div>
        <div class="activityinstance">
        <a title="Edit question Variabel" href="http://moodle.waski.xyz/moodle/question/bank/editquestion/question.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127&amp;cmid=127&amp;id=10"><img class="icon activityicon" title="Multiple choice" alt="Multiple choice" role="presentation" src="http://moodle.waski.xyz/moodle/theme/image.php/boost/qtype_multichoice/1700722742/icon"><span class="instancename"><i class="icon fa fa-cog fa-fw " aria-hidden="true"></i><span class="questionname">Variabel</span> <span class="questiontext">Ada sebuah variabel bernama var1 yang berisi 5,...</span></span></a>
        </div>
        <span class="actions">
        <label for="version-115" class="sr-only">Question version</label>
        <select id="version-115" name="version" class="form-control mr-2 h-auto version-selection" data-action="mod_quiz-select_slot" data-slot-id="115">
        <option value="0" selected="selected">Always latest</option>
        <option value="1">v1 (latest)</option>
        </select>
        <a href="http://moodle.waski.xyz/moodle/question/bank/previewquestion/preview.php?id=10&amp;restartversion=0&amp;cmid=127&amp;behaviour=deferredfeedback&amp;maxmark=1&amp;correctness=0&amp;marks=1&amp;markdp=2&amp;feedback&amp;generalfeedback&amp;rightanswer&amp;history" id="action_link6577b88251aee82" class="preview" title="Preview question"><i class="icon fa fa-search-plus fa-fw " title="Preview question" role="img" aria-label="Preview question"></i></a><a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;sesskey=Z87Mc7wbML&amp;remove=10" id="action_link6577b88251aee83" class="cm-edit-action editing_delete" title="Delete" data-action="delete"><i class="icon fa fa-trash fa-fw " title="Delete" role="img" aria-label="Delete"></i></a><span class="instancemaxmarkcontainer"><span class="instancemaxmark decimalplaces_2" title="Maximum mark">1.00</span><span><a class="editing_maxmark" data-action="editmaxmark" title="Edit maximum mark" href="#"><i class="icon fa fa-pencil fa-fw editicon visibleifjs" aria-hidden="true"></i></a></span></span>
        </span>
        <span class="question_dependency_wrapper question_dependency_cannot_depend"><a href="#" id="action_link6577b88251aee84" class="cm-edit-action" title="No restriction on when question 10 can be attempted • Click to change" data-action="adddependency"><i class="icon fa fa-unlock-alt fa-fw " title="No restriction on this question" role="img" aria-label="No restriction on this question"></i></a></span>
        </div></div></li></ul><div class="last-add-menu"><span class="add-menu-outer"><div class="action-menu moodle-actionmenu nowrap-items page-add-actions commands" id="action-menu-11" data-enhance="moodle-core-actionmenu">
        
        <div class="menubar d-flex " id="action-menu-11-menubar">
        
        <div class="dropdown">
        <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-11" aria-label="Add" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-11-menu">
        
        <span class="add-menu">Add</span>
        
        <b class="caret"></b>
        </a>
        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-11-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-11" role="menu" data-constraint=".mod-quiz-edit-content">
        <a href="http://moodle.waski.xyz/moodle/question/bank/editquestion/addquestion.php?returnurl=%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26addonpage%3D0&amp;cmid=127&amp;category=16&amp;addonpage=0&amp;appendqnumstring=addquestion" class="dropdown-item cm-edit-action addquestion menu-action add-menu" data-action="addquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-41">
        <i class="icon fa fa-plus fa-fw " title="a new question" role="img" aria-label="a new question"></i>
        <span class="menu-action-text" id="actionmenuaction-41">a new question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127" class="dropdown-item cm-edit-action questionbank menu-action add-menu" data-header="Add from the question bank at the end" data-action="questionbank" data-addonpage="0" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-42">
        <i class="icon fa fa-plus fa-fw " title="from question bank" role="img" aria-label="from question bank"></i>
        <span class="menu-action-text" id="actionmenuaction-42">from question bank</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/addrandom.php?returnurl=http%3A%2F%2Fmoodle.waski.xyz%2Fmoodle%2Fmod%2Fquiz%2Fedit.php%3Fcmid%3D127%26amp%3Bdata-addonpage%3D0&amp;cmid=127&amp;appendqnumstring=addarandomquestion" class="dropdown-item cm-edit-action addarandomquestion menu-action add-menu" data-header="Add a random question at the end" data-addonpage="0" data-action="addarandomquestion" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-43">
        <i class="icon fa fa-plus fa-fw " title="a random question" role="img" aria-label="a random question"></i>
        <span class="menu-action-text" id="actionmenuaction-43">a random question</span>
        </a>
        <a href="http://moodle.waski.xyz/moodle/mod/quiz/edit.php?cmid=127&amp;addsectionatpage=0" class="dropdown-item cm-edit-action addasection menu-action add-menu" data-action="addasection" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-44">
        <i class="icon fa fa-plus fa-fw " title="a new section heading" role="img" aria-label="a new section heading"></i>
        <span class="menu-action-text" id="actionmenuaction-44">a new section heading</span>
        </a>
        </div>
        </div>
        
        
        
        
        </div>
        
        </div></span></div></div></li>`)

        $modal.modal('hide')
    }, 5000);
}

function showModal() {
    if ($('#questionModal').length == 0) {
        $('#page-wrapper').append(`<div class="modal fade" id="questionModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Generate Questions</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <div class="form-group">
        <label>Multiple Choices</label>
        <input type="number" class="form-control" required>
        </div>
        <div class="form-group">
        <label>Essay</label>
        <input type="number" class="form-control" required>
        </div>
        </div>
        <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Generate</button>
        </div>
        </div>
        </div>
        </div>`)
    }
    
    const $modal = $('#questionModal')

    $modal.find('.btn').on('click', function () {
        generateQuestion()
    })
    $modal.modal('show')
}

