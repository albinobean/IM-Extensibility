var isMobile = false;
var mobileDeviceType = "mobile";
$(document).ready((function() {
    randomizeQuestionsOnSamePage();
    initPageRandomization();
    assertTrim();
    assertIndexOf();
    initNavBars();
    initCollaborationMode();
    initSelectedAnswers();
    initColumnDisplayLogic();
    initMobile();
    adjustTableHeaders();
    convertTablesIfMobile();
    initConstantSum();
    initTextCounters();
    initHelpText();
    initSliders();
    initStars();
    initControls();
    initButtonSets();
    matchAnswerImages();
    initDisplayLogicSelects();
    perform508Compliance();
    initSmartProbe();
    setPageTitle();
    Allegiance.MobileAppSurvey.performEventProcessing();
    SkipIfAllObjectsAreHidden();
    handleImageButtonClick();
    setFormActionForAliases();
    setUserAgent();
    getFirstPageUserAgent();
    initVoiceToTextAndLandscapePrompts();
    initServerSideRequiredQuestions();
    try {
        var noResultsText = "No results found";
        if (typeof NoResultsFound !== "undefined")
            noResultsText = NoResultsFound;
        $(".use-select2").select2({
            dropdownAutoWidth: "true",
            language: {
                noResults: function(params) {
                    return noResultsText
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
    initPreviewValidationAndDisplayLogic();
    initMobilePreview()
}
));
function setPageTitle() {
    try {
        document.title += ": " + navigationState.currentPage
    } catch (e) {
        console.log(e)
    }
}
String.format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}","gm");
        s = s.replace(reg, arguments[i + 1])
    }
    return s
}
;
function InqJsUtils() {
    var that = this;
    this.pre = "document.all.";
    this.post = "";
    var browser = "";
    this.openWindow = function(url, name, type, help) {
        var newWindow;
        if (type == "new")
            newWindow = window.open(url, "_blank", help);
        else if (help == "false")
            newWindow = window.open(url, name, "scrollbars=1,resizable=1,toolbar=1,location=1,directories=1,menubar=1");
        else
            newWindow = window.open(url, name, "scrollbars=1,resizable=1,width=200,height=200,left=200,top=200");
        newWindow.focus()
    }
    ;
    this.PostBack = function() {
        document.forms[0].pageselect.value = "1";
        document.forms[0].nextpage.value = "1";
        document.forms[0].submit()
    }
    ;
    this.BrowserType = function() {
        if (document.layers) {
            that.browser = "NN4";
            that.pre = "document.";
            that.post = ""
        }
        if (document.getElementById) {
            that.browser = "NN6";
            that.pre = 'document.getElementById("';
            that.post = '")'
        }
        if (document.all) {
            that.browser = "IE4+";
            that.pre = "document.all.";
            that.post = ""
        }
    }
    ;
    this.SetRank = function(item) {
        var iMaxRank, Rank;
        var RankItem;
        var i;
        var numberOfItems;
        var rankElement;
        var rankHandle;
        var sHandle = "";
        var RankHiddenText = "";
        if (that.browser == "IE4+" || that.browser == "NN6") {
            for (i = item.name.length - 5; i > 0; i--) {
                if (item.name.charAt(i) == ".") {
                    sHandle = item.name.substring(0, i);
                    break
                }
            }
            rankHandle = sHandle + ".rank";
            rankElement = document.getElementsByName(rankHandle);
            numberOfItems = rankElement[0].value;
            if (item.innerHTML != "") {
                iMaxRank = parseInt(item.innerHTML, 10);
                Rank = "";
                for (i = 0; i < numberOfItems; i++) {
                    RankItem = document.getElementsByName(sHandle + "." + i + ".btn");
                    if (RankItem.length > 0 && RankItem[0].name != item.name) {
                        if (iMaxRank < parseInt(RankItem[0].innerHTML, 10)) {
                            RankItem[0].innerHTML = parseInt(RankItem[0].innerHTML, 10) - 1
                        }
                    }
                }
            } else {
                iMaxRank = 0;
                for (i = 0; i < numberOfItems; i++) {
                    RankItem = document.getElementsByName(sHandle + "." + i + ".btn");
                    if (RankItem.length > 0 && RankItem[0].name != item.name) {
                        if (iMaxRank < parseInt(RankItem[0].innerHTML, 10)) {
                            iMaxRank = parseInt(RankItem[0].innerHTML, 10)
                        }
                    }
                }
                Rank = iMaxRank + 1
            }
            item.innerHTML = Rank;
            for (i = 0; i < numberOfItems; i++) {
                RankItem = document.getElementsByName(sHandle + "." + i + ".btn");
                if (RankItem.length > 0) {
                    RankHiddenText = document.getElementsByName(sHandle + "." + i);
                    RankHiddenText[0].value = RankItem[0].innerHTML
                }
            }
        }
    }
    ;
    this.getElementValue = function(formElement, name, val) {
        var type;
        var x;
        var formElements;
        if (formElement.length != null) {
            type = formElement[0].type
        }
        if (typeof type == "undefined" || type == 0) {
            type = formElement.type
        }
        switch (type) {
        case "undefined":
            return;
        case "radio":
            formElements = document.getElementsByName(name);
            for (x = 0; x < formElements.length; x++) {
                if (formElements[x].checked == true) {
                    return formElements[x].value
                }
            }
            break;
        case "select-multiple":
            var myArray = [];
            var selectedOptions = $("#" + formElement.id + " option:selected");
            for (x = 0; x < selectedOptions.length; x++)
                myArray[myArray.length] = selectedOptions[x].value;
            return myArray;
        case "checkbox":
            formElements = document.getElementsByName(name);
            if (formElements.length > 1) {
                var retVal = -1;
                for (x = 0; x < formElements.length; x++) {
                    if (formElements[x].checked == true) {
                        if (val == formElements[x].value) {
                            retVal = formElements[x].value;
                            break
                        }
                    }
                }
                return retVal
            } else {
                return !formElement.checked
            }
            break;
        case "hidden":
            var retValue = formElement.value;
            if (retValue !== "") {
                var index = retValue.indexOf(",");
                if (index >= 0) {
                    var splitValues = retValue.split(",");
                    for (var i = 0; i < splitValues.length; i++) {
                        if (val == splitValues[i]) {
                            retValue = splitValues[i];
                            break
                        }
                    }
                }
            }
            return retValue;
            break;
        default:
            return formElement.value
        }
    }
    ;
    this.FindItem = function(name, val) {
        var i;
        this.BrowserType();
        if (that.browser == "IE4+") {
            var myObj = document.forms[0].item(name);
            if (myObj != null) {
                return that.getElementValue(document.forms[0].item(name), name, val)
            } else {
                return -1
            }
        } else {
            for (i = 0; i < document.forms[0].length; i++) {
                if (document.forms[0].elements[i].name == name) {
                    return that.getElementValue(document.forms[0].elements[i], name, val)
                }
            }
        }
    }
    ;
    this.ShiftObjects = function() {
        var topPos;
        var ShiftValue = 0;
        var obj;
        var i;
        obj = document.getElementById("TestModeBanner");
        if (obj != null) {
            ShiftValue = ShiftValue + 40
        }
        obj = document.getElementById("messgeBanner");
        if (obj != null) {
            ShiftValue = ShiftValue + 30
        }
        obj = document.getElementsByTagName("div");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("table");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("label");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("hr");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("input");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("select");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
        obj = document.getElementsByTagName("textarea");
        for (i = 0; i < obj.length; i++) {
            if (obj[i].style.top != "") {
                topPos = parseInt(obj[i].style.top, 10);
                obj[i].style.top = topPos + ShiftValue
            }
        }
    }
    ;
    this.SetNextPage = function(aSelect) {
        var iNext = aSelect.value;
        this.JumpToPage(iNext)
    }
    ;
    this.JumpToPage = function(iNext) {
        if (iNext != document.forms[0].currentpage.value) {
            document.forms[0].nextpage.value = iNext;
            document.forms[0].pageselect.value = 1;
            document.forms[0].submit()
        }
    }
    ;
    this.makeDivVisible = function(Obj, setDisplay) {
        setDisplay = setDisplay || isMobile;
        if (Obj && Obj.style) {
            if ($(Obj).is("tr") || $(Obj).is("tbody")) {
                $(Obj).show();
                $(Obj).removeClass("row-disabled");
                $(Obj).addClass("row-enabled");
                var table = $(Obj).closest("table");
                stripeTableRows(table);
                if (!tableIsAutoAnswer(table)) {
                    showTable(table)
                }
            } else if ($(Obj).is("option")) {
                showOption(Obj);
                var select = $(Obj).closest("select");
                if (!selectIsTableScale(select) && !selectIsAutoAnswer(select)) {
                    showSelect(select)
                }
            } else if ($(Obj).is("td")) {
                var answerId = $(Obj).attr("id").substr(0, 9);
                var controlColumn = $("#" + answerId + "_control");
                var imageColumn = $("#" + answerId + "_image");
                $(Obj).show();
                $(controlColumn).show();
                $(imageColumn).show();
                placeAnswersInColumns(Obj);
                var object = $(Obj).closest(".object");
                showObject(object)
            } else {
                if (!allAnswersAreHidden(Obj)) {
                    Obj.style.visibility = "visible";
                    if (setDisplay) {
                        if ($(Obj).is("tbody"))
                            Obj.style.display = "table-row-group";
                        else
                            Obj.style.display = "block"
                    }
                }
            }
        }
    }
    ;
    this.ShowColumn = function(col) {
        $(col).removeClass("column-disabled");
        $(col).addClass("column-enabled");
        $(col).show();
        adjustColumnSpanFromColumn(col);
        if (isMobile && $(col).parents("[data-drop-down-on-" + mobileDeviceType + "='true']").length > 0)
            if ($(col).parent().is("span"))
                $(col).unwrap("<span/>")
    }
    ;
    this.HideColumn = function(col) {
        $(col).removeClass("column-enabled");
        $(col).addClass("column-disabled");
        $(col).hide();
        adjustColumnSpanFromColumn(col);
        $("input", col).prop("checked", false);
        if (isMobile && $(col).parents("[data-drop-down-on-" + mobileDeviceType + "='true']").length > 0)
            if (!$(col).parent().is("span"))
                $(col).wrap("<span/>")
    }
    ;
    this.makeDivInvisible = function(Obj, setDisplay) {
        setDisplay = setDisplay || isMobile;
        if (Obj && Obj.style) {
            if ($(Obj).is("tr") || $(Obj).is("tbody")) {
                $(Obj).hide();
                $(Obj).removeClass("row-enabled");
                $(Obj).addClass("row-disabled");
                var inqUtils = this;
                $("button", Obj).each((function() {
                    inqUtils.DeselectRankButton(this)
                }
                ));
                $("input", Obj).prop("checked", false);
                var table = $(Obj).closest("table");
                stripeTableRows(table);
                hideTableIfAllRowsAreHidden(table)
            } else if ($(Obj).is("option")) {
                var select = $(Obj).closest("select");
                hideOption(Obj);
                if (!selectIsTableScale(select)) {
                    hideSelectIfAllOptionsAreHidden(select)
                }
            } else if ($(Obj).is("td")) {
                var answerId = $(Obj).attr("id").substr(0, 9);
                var controlColumn = $("#" + answerId + "_control");
                var imageColumn = $("#" + answerId + "_image");
                $(Obj).hide();
                $(controlColumn).hide();
                $(imageColumn).hide();
                var inqUtils = this;
                $("button", controlColumn).each((function() {
                    inqUtils.DeselectRankButton(this)
                }
                ));
                placeAnswersInColumns(Obj);
                var object = $(Obj).closest(".object");
                hideQuestionIfAllAnswersAreHidden(object)
            } else {
                Obj.style.visibility = "hidden";
                if (setDisplay) {
                    Obj.style.display = "none"
                }
            }
        }
    }
    ;
    this.updateAutoHideQuestion = function(answer) {
        function processTargetQuestionAnswers(input, isDisplayLogicTarget, isFlatControl) {
            if (!input || $(input).length === 0)
                return;
            if (!isDisplayLogicTarget) {
                $(input).each((function() {
                    $(this).closest("tr").addClass("no-logic")
                }
                ))
            }
            var isTableQuestion = $(input).parents("table").hasClass("table");
            var selector;
            if (isTableQuestion)
                selector = "tr[id$='_row']>td>";
            else
                selector = "tr>td.ControlCell>";
            if (isFlatControl)
                selector = selector + "div>";
            if ($(input).is(":radio"))
                selector = selector + "input[type=radio]";
            else
                selector = selector + "input[type=checkbox]";
            $(input).parents("tbody").find(selector).each((function() {
                var tr = $(this).closest("tr");
                if ($(tr).hasClass("row-enabled") || $(tr).hasClass("no-logic")) {
                    $(this).parent("td").addClass("survey-answer-selected");
                    if (isFlatControl)
                        $(this).iCheck("check");
                    else
                        $(this).prop("checked", true);
                    $(tr).removeClass("no-logic")
                } else {
                    $(this).parent("td").removeClass("survey-answer-selected");
                    if (isFlatControl)
                        $(this).iCheck("uncheck");
                    else
                        $(this).prop("checked", false)
                }
            }
            ))
        }
        var isFlatControl = false;
        if (answer) {
            var targetQuestion = $(answer).closest("div[data-auto-answer]")[0];
            if (!targetQuestion || targetQuestion == undefined)
                return;
            var thresholdValue = $(targetQuestion).attr("data-auto-answer");
            if (!$.isNumeric(thresholdValue) || thresholdValue <= 0)
                return;
            var visibleChildren = -1;
            if ($(targetQuestion).has("[data-display-logic-target='true']").length) {
                visibleChildren = $(targetQuestion).find(".row-enabled").length
            }
            if (!$.isNumeric(visibleChildren) || visibleChildren == -1)
                return;
            if (visibleChildren <= thresholdValue) {
                var inputs = $(targetQuestion).find(".row-enabled[data-display-logic-target='true']>.ControlCell>input");
                if ($(inputs).length === 0) {
                    inputs = $(targetQuestion).find(".row-enabled[data-display-logic-target='true']>.ControlCell>div>input");
                    isFlatControl = $(inputs).length > 0
                }
                if ($(inputs).length > 0) {
                    $(inputs).each((function() {
                        processTargetQuestionAnswers($(this), true, isFlatControl)
                    }
                    ))
                } else {
                    isFlatControl = false;
                    var input = $(targetQuestion).find("tr:not([data-display-logic-target]) >.ControlCell>input");
                    if ($(input).length === 0) {
                        input = $(targetQuestion).find("tr:not([data-display-logic-target]) >.ControlCell>div>input");
                        isFlatControl = $(input).length > 0
                    }
                    processTargetQuestionAnswers($(input), false, isFlatControl)
                }
                $(targetQuestion).hide()
            } else {
                if ($(targetQuestion).is(":hidden")) {
                    isFlatControl = false;
                    var inputs = $(targetQuestion).find(".row-enabled[data-display-logic-target='true']>.ControlCell>input");
                    if ($(inputs).length === 0) {
                        inputs = $(targetQuestion).find(".row-enabled[data-display-logic-target='true']>.ControlCell>div>input");
                        isFlatControl = $(inputs).length > 0
                    }
                    if ($(inputs).length > 0) {
                        $(inputs).each((function() {
                            var isTableQuestion = $(this).parents("table").hasClass("table");
                            var selector;
                            if (isTableQuestion)
                                selector = "tr[id$='_row']>td>";
                            else
                                selector = "tr>td.ControlCell>";
                            if (isFlatControl)
                                selector = selector + "div>";
                            if ($(this).is(":radio"))
                                selector = selector + "input[type=radio]";
                            else
                                selector = selector + "input[type=checkbox]";
                            $(this).parents("tbody").find(selector).each((function() {
                                $(this).parent("td").removeClass("survey-answer-selected");
                                if (isFlatControl)
                                    $(this).iCheck("uncheck");
                                else
                                    $(this).prop("checked", false)
                            }
                            ))
                        }
                        ));
                        $(targetQuestion).show()
                    }
                }
            }
        }
    }
    ;
    this.answerSatisfiesCondition = function(answer, condition) {
        if (answer.indexOf(",") < 0 && condition.indexOf(",") < 0) {
            return answer == condition
        }
        var answerArray = answer.split(",");
        var conditionArray = condition.split(",");
        var answerLength = answerArray.length;
        for (var ans = 0; ans < answerLength; ans++) {
            if (answerArray[ans] && $.inArray(answerArray[ans], conditionArray) >= 0) {
                return true
            }
        }
        return false
    }
    ;
    this.endUpdate = function() {
        hideOrShowTablesWithColumnDisplayLogic()
    }
    ;
    this.RegisterClickHandler = function(selector, clickHandlerFunction) {
        var isIcheck = false;
        if ($(selector).parent().children("ins").hasClass("iCheck-helper"))
            isIcheck = true;
        if (isIcheck)
            $(selector).on("ifChanged", clickHandlerFunction);
        else
            $(selector).click(clickHandlerFunction)
    }
    ;
    this.DeselectRankButton = function(button) {
        if ($(button).html() != "") {
            this.SetRank(button)
        }
    }
    ;
    this.FindVisibleWebBuilder = function(item) {
        this.BrowserType();
        var obj;
        obj = $("#" + item).get(0);
        if (obj != undefined) {
            if (obj.style.visibility == "visible" || obj.style.visibility == "" || obj.style.display == "block" || $("#" + item).is(".display-when-empty")) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }
    ;
    this.FindVisible = function(item) {
        this.BrowserType();
        var obj;
        obj = eval(that.pre + item + that.post);
        if (obj != undefined) {
            if (obj.style.visibility == "visible" || obj.style.display == "block") {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }
    ;
    this.UpdateExclusives = function() {
        try {
            var lastExclusiveName = "";
            var inputElements = document.getElementsByTagName("input");
            if (inputElements.length > 0) {
                for (var iInp = 0; iInp < inputElements.length; iInp++) {
                    if (inputElements[iInp].type === "hidden" && inputElements[iInp].name.indexOf("EXCL_") !== -1) {
                        var iName = inputElements[iInp].name.indexOf("_") + 1;
                        var name = inputElements[iInp].name.substr(iName, 19);
                        if (name !== lastExclusiveName) {
                            this.UpdateExclusive(name);
                            lastExclusiveName = name
                        }
                    }
                }
            }
        } catch (err) {}
    }
    ;
    this.UpdateExclusive = function(name, obj) {
        try {
            var x;
            var arExclusiveValues = [];
            var hiddenElements = document.getElementsByName("EXCL_" + name);
            if (hiddenElements.length > 0) {
                arExclusiveValues.length = hiddenElements.length;
                for (x = 0; x < hiddenElements.length; x++) {
                    arExclusiveValues[x] = hiddenElements[x].value
                }
            } else {
                return
            }
            if (obj) {
                that.updateExclusiveAnswer(obj);
                return
            }
            var formElements = document.getElementsByName(name);
            if (formElements.length > 1) {
                for (x = 0; x < formElements.length; x++) {
                    for (var indxVal = 0; indxVal < arExclusiveValues.length; indxVal++) {
                        if (formElements[x].value === arExclusiveValues[indxVal]) {
                            if (formElements[x].checked) {
                                that.ImplementExclusive(formElements[x]);
                                return
                            }
                        }
                    }
                }
                var otherEditboxElement = document.getElementsByName(formElements[0].name + ".other");
                if (otherEditboxElement.length === 1) {
                    otherEditboxElement[0].disabled = false
                }
                for (x = 0; x < formElements.length; x++) {
                    formElements[x].disabled = false
                }
            }
        } catch (err) {}
    }
    ;
    this.updateExclusiveAnswer = function(obj) {
        try {
            var exclName = "EXCL_" + obj.name;
            var exclusives = $("input[type='hidden'][name='" + exclName + "']");
            var isExclusive = false;
            $(exclusives.each((function() {
                if ($(this).val() === obj.value) {
                    that.ImplementExclusive(obj);
                    isExclusive = true;
                    return false
                }
            }
            )));
            if (isExclusive)
                return;
            $(exclusives.each((function() {
                var excl = $("input[name='" + obj.name + "'][value='" + $(this).val() + "']");
                if ($(excl).length > 0) {
                    if (typeof $().iCheck == "function") {
                        var parentDiv = $("#" + $(excl).attr("id")).parent("div");
                        if ($(parentDiv).length === 1) {
                            $(parentDiv).removeClass("checked")
                        }
                    }
                    $(excl).prop("checked", false)
                }
            }
            )))
        } catch (err) {}
    }
    ;
    this.ImplementExclusive = function(obj) {
        var x;
        try {
            var formElements = document.getElementsByName(obj.name);
            if (obj.checked) {
                var otherValue = "";
                if (formElements.length > 1) {
                    var otherEditboxElement = document.getElementsByName(formElements[0].name + ".other");
                    if (otherEditboxElement.length >= 1) {
                        var otherValueElements = document.getElementsByName("OTHER_" + formElements[0].name);
                        if (otherValueElements.length > 0) {
                            otherValue = otherValueElements[0].value
                        }
                    }
                    for (x = 0; x < formElements.length; x++) {
                        if (obj.value !== formElements[x].value) {
                            if (typeof $().iCheck == "function") {
                                var parentDiv = $("#" + formElements[x].id).parent("div");
                                if ($(parentDiv).length === 1) {
                                    $(parentDiv).removeClass("checked")
                                }
                            }
                            formElements[x].checked = false;
                            formElements[x].disabled = false;
                            if (otherValue === formElements[x].value) {
                                otherEditboxElement[0].disabled = false;
                                otherEditboxElement[0].value = ""
                            }
                        }
                    }
                }
            } else {
                otherValue = "";
                if (formElements.length > 1) {
                    otherEditboxElement = document.getElementsByName(formElements[0].name + ".other");
                    if (otherEditboxElement.length >= 1) {
                        otherValueElements = document.getElementsByName("OTHER_" + formElements[0].name);
                        if (otherValueElements.length > 0) {
                            otherValue = otherValueElements[0].value
                        }
                        for (x = 0; x < formElements.length; x++) {
                            formElements[x].checked = false;
                            formElements[x].disabled = false;
                            if (otherValue === formElements[x].value) {
                                otherEditboxElement[0].disabled = false
                            }
                        }
                    }
                }
            }
            if (typeof Update == "function") {
                Update()
            }
        } catch (err) {}
    }
    ;
    this.setCanvasSize = function setCanvasSize(formHeight) {
        if (checkSimpleMode()) {
            return
        }
        var right = 0;
        var bottom = 0;
        var heightBuffer = 10;
        var height = 0;
        var objects = $(".object");
        var length = objects.length;
        objects.each((function(index) {
            var left = $(this).position().left;
            var width = $(this).width();
            right = Math.max(right, left + width);
            var top = $(this).position().top;
            height = $(this).height();
            if (index == length - 1) {
                var displayLogicTargets = $(this).find("[data-display-logic-target='true']");
                if ($(displayLogicTargets).length) {
                    var hiddenObjects = [];
                    $(displayLogicTargets).each((function() {
                        if (!$(this).is(":visible"))
                            hiddenObjects.push($(this));
                        $(this).show()
                    }
                    ));
                    height = $(this).height();
                    if ($(hiddenObjects).length) {
                        $(hiddenObjects).each((function() {
                            $(this).hide()
                        }
                        ))
                    }
                }
            }
            bottom = Math.max(bottom, top + height)
        }
        ));
        var surveyDiv = $("#survey");
        if (right > surveyDiv.width()) {
            surveyDiv.width(right)
        }
        var canvasDiv = $("#canvas");
        var canvasHeight = canvasDiv.height();
        if (bottom >= canvasHeight) {
            canvasDiv.height(bottom + heightBuffer)
        } else if (bottom < canvasHeight) {
            canvasDiv.height(Math.max(bottom, formHeight) + heightBuffer)
        }
    }
    ;
    this.stripeDynamicTableRows = function stripeDynamicTableRows() {
        var dynamicTables = $(".dynamic");
        dynamicTables.each((function(e) {
            stripeTableRows(this)
        }
        ))
    }
    ;
    this.initializeDisplayLogic = function initializeDisplayLogic() {
        if (ignoreDisplayLogic())
            return;
        var displayLogicTables = $("tr[data-display-logic-target='true']").closest("table");
        displayLogicTables.each((function(e) {
            updateTableWithDisplayLogic(this)
        }
        ));
        displayLogicTables = $("tbody[data-display-logic-target='true']").closest("table");
        displayLogicTables.each((function(e) {
            updateTableWithDisplayLogic(this)
        }
        ));
        var displayLogicQuestions = $("td[data-display-logic-target='true']").closest(".question");
        displayLogicQuestions.each((function(e) {
            placeAnswersInColumns(this);
            hideQuestionIfAllAnswersAreHidden($(this).closest(".object"))
        }
        ));
        var displayLogicSelects = $("option[data-display-logic-target='true']").closest("select");
        displayLogicSelects.each((function(e) {
            updateSelectWithDisplayLogic(this)
        }
        ))
    }
    ;
    this.SyncComboBoxToSlider = function SyncComboBoxToSlider(id, value) {
        var comboBox = $("#" + id);
        value = selectValueFromSliderValue(id, value);
        $(comboBox).val(value);
        $(comboBox).trigger("change")
    }
    ;
    this.SyncComboBoxToStars = function SyncComboBoxToStars(id, value) {
        var comboBox = $("#" + id);
        $(comboBox).val(selectValueFromStarsValue(value));
        $(comboBox).trigger("change")
    }
    ;
    this.ConvertTable = function ConvertTable() {
        return new Allegiance.ConvertTable
    }
    ;
    this.SetMobile = function SetMobile(value) {
        isMobile = value
    }
    ;
    this.GetCurrentPageName = function GetCurrentPageName(delimiter) {
        try {
            $("#divValidationMessage").hide();
            var curPage = navigationState.currentPage;
            var pageName = pageNames["page" + curPage];
            if (delimiter) {
                var splitPage = pageName.split(delimiter);
                return splitPage.length == 1 ? splitPage[0].trim() : splitPage[1].trim()
            } else {
                return pageName.trim()
            }
        } catch (e) {
            return ""
        }
    }
}
function updateTableWithDisplayLogic(table) {
    if (displayLogicTableHasVisibleRows(table)) {
        stripeTableRows(table);
        showTable(table)
    } else {
        hideTable(table)
    }
}
function updateSelectWithDisplayLogic(select) {
    if (typeof $(select).hasAttr === "function" && $(select).hasAttr("data-auto-answer") && $(select).attr("data-auto-answer") === "1")
        return;
    if (displayLogicSelectHasVisibleOptions(select)) {
        showSelect(select)
    } else {
        hideSelect(select)
    }
}
function stripeTableRows(table) {
    var alt = true;
    var rows = $("tr", table);
    rows.each((function(e) {
        if (!$(this).is(".scale") && $(this).css("display") != "none") {
            if (alt) {
                $(this).addClass("alt")
            } else {
                $(this).removeClass("alt")
            }
            alt = !alt
        }
    }
    ))
}
function placeAnswersInColumns(obj) {
    if ($(obj).find('td.column-disabled[data-display-logic-target="true"]').length > 0)
        return;
    var object = $(obj).closest(".object");
    var table = $("table.question", object).find("table").eq(0);
    var hasImages = false;
    var hiddenColumns = $(".hidden-columns", object);
    if (hiddenColumns.size() == 0) {
        hiddenColumns = $(object).append('<div class="hidden-columns" style="visibility: hidden; position: absolute;"></div>').find(".hidden-columns")
    }
    var columns = $("td", table);
    $(hiddenColumns).append(columns);
    var rows = $(table).find("tr").size();
    var currentRow = 0;
    var visibleAnswers = $(table).find("td[data-column-type='answer']");
    var hiddenAnswers = $(hiddenColumns).find("td[data-column-type='answer']");
    var answers = $.merge(visibleAnswers, hiddenAnswers);
    answers.sort(sortByDisplaySequence);
    $(answers).each((function() {
        if ($(this).is(":visible")) {
            var row = $("tr", table).eq(currentRow);
            var answerId = $(this).attr("id").substr(0, 9);
            var controlColumn = $("#" + answerId + "_control");
            var imageColumn = $("#" + answerId + "_image");
            hasImages = imageColumn;
            if (imageColumn) {
                row.append(imageColumn)
            }
            row.append(controlColumn);
            row.append(this);
            currentRow = (currentRow + 1) % rows
        }
    }
    ));
    $("td[colspan]", hiddenColumns).not("[colspan=1]").remove();
    while (currentRow > 0) {
        var row = $("tr", table).eq(currentRow);
        if ($(row).children().length > 0) {
            if (hasImages) {
                row.append('<td colspan="3">&nbsp;</td>')
            } else {
                row.append('<td colspan="2">&nbsp;</td>')
            }
        }
        currentRow = (currentRow + 1) % rows
    }
}
function allAnswersAreHidden(obj) {
    if ($(obj).is(".table-object")) {
        return false
    }
    if ($(obj).has("[data-display-logic-target='true']").length) {
        if ($(obj).has(".row-disabled").length) {
            return $(".ControlCell", obj).parent().not(".row-disabled").length == 0
        }
        if ($(obj).has(".hidden-columns").length) {
            return $(".ControlCell", obj).parent().not(".hidden-columns").length == 0
        }
        return false
    }
    if ($(obj).has("select").length) {
        return $("select option[value!='']").length == 0
    }
    return false
}
function sortByDisplaySequence(a, b) {
    var aSeq = parseInt($(a).attr("data-display-sequence"));
    var bSeq = parseInt($(b).attr("data-display-sequence"));
    return aSeq < bSeq ? -1 : aSeq > bSeq ? 1 : 0
}
function displayLogicTableHasVisibleRows(table) {
    return $("tr", table).not(".scale").not(":hidden").size() > 0
}
function displayLogicQuestionInColumnsHasVisibleAnswers(object) {
    return $("td[data-column-type='answer']", object).not(":hidden").size() > 0
}
function showTable(table) {
    $(table).closest("div").filter((function() {
        return $(this).css("visibility") != "hidden"
    }
    )).show()
}
function hideTable(table) {
    $(table).closest("div").hide()
}
function showObject(object) {
    $(object).show()
}
function hideObject(object) {
    $(object).hide()
}
function hideTableIfAllRowsAreHidden(table) {
    if (!displayLogicTableHasVisibleRows(table) && !$(table).is(":hidden")) {
        hideTable(table)
    }
}
function hideQuestionIfAllAnswersAreHidden(object) {
    if (!displayLogicQuestionInColumnsHasVisibleAnswers(object) && !$(object).is(":hidden")) {
        hideObject(object)
    }
}
function displayLogicSelectHasVisibleOptions(select) {
    if (isMobile && $(select).attr("data-mobile-drop-down")) {
        var allOptions = $("option", select).not(".option-unselected").size();
        var disabledOptions = $("option.column-disabled", select).size();
        return disabledOptions < allOptions
    } else {
        return $("option", select).filter((function() {
            return this.value
        }
        )).size() > 0
    }
}
function showSelect(select) {
    showTable(select)
}
function hideSelect(select) {
    hideTable(select)
}
function hideSelectIfAllOptionsAreHidden(select) {
    if (!displayLogicSelectHasVisibleOptions(select) && !$(select).is(":hidden")) {
        hideSelect(select)
    }
}
function selectIsTableScale(select) {
    return $(select).closest(".object").is(".table-object")
}
function selectIsAutoAnswer(select) {
    return $(select).closest(".object").has("[data-auto-answer]") && $.isNumeric($(select).closest(".object").attr("data-auto-answer")) && $(select).closest(".object").attr("data-auto-answer") > 0
}
function tableIsAutoAnswer(table) {
    return $(table).closest("div").has("[data-auto-answer]") && $.isNumeric($(table).closest("div").attr("data-auto-answer")) && $(table).closest("div").attr("data-auto-answer") > 0
}
function initColumnDisplayLogic() {
    $("th[data-display-logic-target='true']").not(":visible").addClass("column-disabled");
    $("td[data-display-logic-target='true']").not(":visible").addClass("column-disabled");
    hideOrShowTablesWithColumnDisplayLogic()
}
function hideOrShowTablesWithColumnDisplayLogic() {
    var displayLogicTables = $("td[data-display-logic-target='true']").closest("table.table");
    displayLogicTables.each((function(e) {
        var enabledColumns = $("td.control-cell", this).not(".column-disabled");
        var hasRowsEnabled = tableHasEnabledRows(this);
        if (enabledColumns.size() > 0 && hasRowsEnabled) {
            $(this).closest(".object").show();
            adjustColumnSpanFromTable(this)
        } else {
            $(this).closest(".object").hide()
        }
    }
    ));
    displayLogicTables = $("select.display-logic-parent").closest("table");
    if ($(displayLogicTables).size() == 0) {
        displayLogicTables = $("select.display-logic-parent").closest("div.table-object")
    }
    displayLogicTables.each((function(e) {
        var enabledOptions = $("option[value!='']", this);
        var hasSelectOptionsEnabled = tableHasEnabledSelectOptions(this);
        if (enabledOptions.size() > 0 && hasSelectOptionsEnabled) {
            $(this).closest(".object").show()
        } else {
            $(this).closest(".object").hide()
        }
    }
    ))
}
function tableHasEnabledRows(table) {
    var conditionalRows = $("tr[data-display-logic-target='true']", table);
    if (conditionalRows.size() == 0)
        return true;
    var rows = $("> tbody > tr", table).not(".scale");
    var hiddenRows = $("tr[data-display-logic-target='true'].row-disabled", table);
    return rows.size() - hiddenRows.size() > 0
}
function tableHasEnabledSelectOptions(table) {
    var conditionalOptions = $("option[data-display-logic-target='true']", table);
    if (conditionalOptions.size() == 0)
        return true;
    return displayLogicSelectHasVisibleOptions($("select", table))
}
function adjustColumnSpanFromTable(table) {
    function processColWidthsAndAnswerGroupVisibility(scaleHeader, enabledColumns, scaleColSpan) {
        if ($(enabledColumns).size() == 0) {
            $(scaleHeader).hide();
            return
        }
        if (checkSimpleMode()) {
            var width = $(this).offsetParent().width();
            if (width <= 0)
                return;
            var parentWidth = (100 * ($(scaleHeader).width() / width)).toFixed(0);
            var percentWidth = (parentWidth / scaleColSpan).toFixed(0).toString();
            $(enabledColumns).css("width", percentWidth + "%")
        }
    }
    var columns = $("tr.scale", table);
    if (columns.size() > 1) {
        columns = columns.first().children("th");
        columns.each((function() {
            var enabledCols = $("th[id^='" + $(this).attr("id") + "_']").not(".column-disabled");
            var colSpan = enabledCols.size();
            $(this).attr("colspan", colSpan);
            processColWidthsAndAnswerGroupVisibility($(this), enabledCols, colSpan);
            if (!checkSimpleMode()) {
                var disabledCols = $("th[data-parent-scale='" + $(this).attr("id") + "'].column-disabled");
                if (disabledCols.size() > 0) {
                    disabledCols.each((function() {
                        var colClass = $(this).attr("id").replace("_S", "_").replace("_A", "_") + "_column";
                        $("td." + colClass).hide()
                    }
                    ))
                }
            }
        }
        ))
    } else {
        if (!checkSimpleMode()) {
            columns = $("th.column-disabled", columns);
            columns.each((function() {
                var colsToHide = $("td[headers*='" + $(this).attr("id") + "']");
                colsToHide.each((function() {
                    $(colsToHide).hide()
                }
                ))
            }
            ))
        }
        var column = $("td[data-display-logic-target='true'].control-cell", table).first();
        adjustColumnSpan(column)
    }
}
function adjustColumnSpanFromColumn(col) {
    adjustMultiColumnSpanFromColumn(col);
    var column = $(col).filter(".control-cell").first();
    adjustColumnSpan(column)
}
function adjustMultiColumnSpanFromColumn(col) {
    var parentScaleId = $(col).attr("data-parent-scale");
    var siblings = $(col).parent("tr.scale").children("th[id*='" + parentScaleId + "']").not(".column-disabled");
    var colSpan = $(siblings).size();
    if (colSpan <= 0) {
        $("#" + parentScaleId).hide()
    } else {
        $("#" + parentScaleId).attr("colspan", colSpan);
        $("#" + parentScaleId).show()
    }
}
function adjustColumnSpan(column) {
    var tableId = $(column).attr("data-parent");
    var row = $(column).closest("tr");
    var enabledColumns = $("td.control-cell", row).not(".column-disabled");
    $("#" + tableId + "_scale_header").attr("colspan", enabledColumns.size())
}
function showOption(option) {
    var select = $("#" + $(option).attr("data-parent"));
    var before = $("option", select).filter((function() {
        return parseInt($(this).attr("data-display-sequence")) > parseInt($(option).attr("data-display-sequence"))
    }
    ));
    if ($(before).size() > 0) {
        $(option).insertBefore($(before).first())
    } else {
        $(select).append(option)
    }
    $(option).show()
}
function hideOption(option) {
    $(option).hide();
    var hiddenOptions = $(".hidden-options");
    if (hiddenOptions.size() == 0) {
        hiddenOptions = $("body").append('<div class="hidden-options" style="visibility: hidden; position: absolute;"></div>').find(".hidden-options")
    }
    $(hiddenOptions).append(option)
}
function ValidateForm() {
    var isValid = true;
    if (notloaded) {
        isValid = false
    } else if (!validationEnabled || !validationEvent || ignorePreviewValidation()) {
        isValid = true
    } else {
        validationEvent = false;
        var validations = new Array;
        var required = $("input[name$='.rq']");
        required.each((function() {
            ValidateField(this, validations)
        }
        ));
        if (validations.length > 0) {
            if (false) {
                showValidationAlert(questionRequired, validations)
            } else {
                showValidationMessage(questionRequired, validations)
            }
            isValid = false
        } else if (!validateRegEx())
            isValid = false;
        else
            isValid = validateConstantSum()
    }
    if (!isValid) {
        toggleNavigation(true)
    } else {
        Allegiance.MobileAppSurvey.setActionAndPerformSubmitProcessing()
    }
    return isValid
}
function validateRegEx() {
    result = true;
    try {
        var questions = $("input[name$='.regex']");
        questions.each((function() {
            var pattern = $(this).val();
            var name = $(this).attr("name").substring(0, 19);
            var value = $("input[name='" + name + "']").val();
            if (value.length == 0) {
                return true
            }
            var regex = parseRegEx(pattern);
            if (!regex.test(value)) {
                var validations = new Array;
                var element = new Object;
                element.id = $("input[name='" + name + "']").attr("id");
                var validation = new Object;
                validation.element = element;
                var message = $("input[name='" + name + ".msg']").val();
                validation.message = message;
                validations.push(validation);
                showValidationMessage("", validations);
                result = false;
                return false
            }
        }
        ))
    } catch (e) {
        console.log(e)
    }
    return result
}
function parseRegEx(input) {
    if (input.indexOf("/") == 0) {
        input = input.substr(1)
    } else {
        return new RegExp(input)
    }
    var parts = input.split("/");
    var pattern = parts.length > 0 ? parts[0] : input;
    var flags = parts.length > 1 ? parts[1] : "";
    return new RegExp(pattern,flags)
}
function validateConstantSum() {
    if (!pageHasConstantSumTable())
        return true;
    var validations = new Array;
    var sumValues = $("input[id$='_constSumValue'][value!='0']");
    $(sumValues).each((function() {
        var table = $(this).closest("table.table:visible");
        if ($(table).length > 0) {
            var tableId = $(table).attr("id");
            var sumTotal = $("span[id='" + tableId + "_constSumTotal']");
            if ($(sumTotal).length !== 0 && $(sumTotal).text() !== $(this).val()) {
                var element = new Object;
                element.id = tableId;
                var validation = new Object;
                validation.element = element;
                validation.message = String.format(constantSumValidation, $("#" + tableId + "_table").find(".tableDescription").text(), $(this).val());
                validations.push(validation)
            }
        }
    }
    ));
    if (validations.length > 0) {
        showValidationMessage(constantSumMessage, validations);
        return false
    }
    return true
}
function ValidateField(required, validations) {
    var parentClass = ".conditional";
    if (checkBonfireSurvey()) {
        parentClass = ".object"
    }
    if ($(required).parents(parentClass).first().css("display") == "none" || $(required).parents(parentClass).first().css("visibility") == "hidden") {
        return true
    }
    var visible = false;
    var name = $(required).attr("name").replace(".rq", "");
    var elements = $(":input[name='" + name + "']");
    var validateOther = name.indexOf(".other") > 0;
    var answered = true;
    var elementId = "";
    if (elements.size() > 0) {
        elementId = elements.first().attr("id") ? elements.first().attr("id") : "";
        elements.each((function() {
            var elementVisible = !$(this).is(":hidden");
            visible = visible || elementVisible;
            if (!elementVisible) {
                return true
            }
            if (validateOther) {
                var nameChk = $(required).attr("name").substring(0, 19);
                var val = $(":input[name='" + nameChk + "']").size() - 1;
                var cbOther = $(":input[name='" + nameChk + "'][value='" + val + "']");
                if ($(cbOther).is(":checked")) {
                    answered = $.trim($(this).val()) != "";
                    if (!answered) {
                        $(this).addClass("other-not-answered");
                        $(this).keyup((function() {
                            $(this).removeClass("other-not-answered")
                        }
                        ))
                    }
                }
            } else {
                if ($(this).is("input")) {
                    var type = $(this).attr("type");
                    if (type == "radio" || type == "checkbox") {
                        answered = $(this).is(":checked")
                    } else {
                        answered = $.trim($(this).val()) != ""
                    }
                } else if ($(this).is("select")) {
                    answered = $("option:selected[value!='']", this).size() > 0
                } else if ($(this).is("textarea")) {
                    answered = $.trim($(this).val()) != ""
                }
            }
            if (validateOther && !answered) {
                var firstInput = $("#canvas input[type=text].other-not-answered:first");
                if ($(firstInput).length == 1) {
                    $(firstInput).focus()
                }
            }
            return !answered
        }
        ))
    } else if (IsRank(name)) {
        elementId = $("button[name^='" + name + "']").first().attr("id");
        var rank = parseInt($("input[name='" + name + ".rank']").val());
        var i = 0;
        for (i = 0; i < rank; i++) {
            var element = $(":input[name='" + name + "." + i + "']");
            var elementVisible = !element.is(":hidden");
            visible = visible || elementVisible;
            if (!elementVisible) {
                continue
            }
            answered = element.val() != "";
            if (answered) {
                break
            }
        }
    }
    if (!visible) {
        return true
    }
    if (!answered) {
        var element = new Object;
        element.id = elementId;
        var validation = new Object;
        validation.element = element;
        validation.message = $(required).val();
        validations.push(validation)
    }
    return answered
}
function IsRank(name) {
    return $("input[type='hidden'][name='" + name + ".rank']")
}
function showValidationAlert(message, errorList) {
    var msg = message;
    for (i in errorList) {
        msg += "\n" + errorList[i].message
    }
    alert(msg)
}
function addRequiredErrorToQuestion(question) {
    console.log(question);
    var item = $("#" + question);
    var parentContainer = item.parent();
    var possibleTable = parentContainer.closest("td.control-cell");
    if (possibleTable && (possibleTable.hasClass("Scale1Cell") || possibleTable.hasClass("Scale2Cell"))) {
        var questionContainer = possibleTable.closest(".table-object").children("div.tableDescription").first();
        var test = questionContainer.parent();
        if (!questionContainer.parent().children(".requiredErrorText").length) {
            if (typeof SomeOrAllPartsOfQuestionRequiresAResponse !== "undefined" && typeof SomeOrAllPartsOfQuestionRequiresAResponse === "string" && SomeOrAllPartsOfQuestionRequiresAResponse.length > 0) {
                questionContainer.parent().prepend('<label for="' + question + '" class="answerText requiredErrorText">' + SomeOrAllPartsOfQuestionRequiresAResponse + "</label>")
            }
        }
        possibleTable.siblings("th").addClass("requiredErrorQuestionBackground");
        possibleTable.siblings("th").css("background-color", "#cccccc");
        possibleTable.addClass("requiredErrorQuestionBackground");
        possibleTable.css("background-color", "#cccccc");
        possibleTable.siblings('td:has(input[aria-required="true"])').addClass("requiredErrorQuestionBackground");
        possibleTable.siblings('td:has(input[aria-required="true"])').css("background-color", "#cccccc")
    } else {
        var possibleTable = parentContainer.closest("td.ControlCell");
        if (possibleTable.is("td")) {
            possibleTable.closest("tbody").find("td").each((function() {
                $(this).addClass("requiredErrorQuestionBackground");
                $(this).css("background-color", "#cccccc")
            }
            ));
            possibleTable = item.closest(".question-object")
        }
        var pcqo = parentContainer.closest("div.question-object");
        var dqt = pcqo.find("div.questionText");
        if (typeof QuestionRequiresAResponse !== "undefined" && typeof QuestionRequiresAResponse === "string" && QuestionRequiresAResponse.length > 0) {
            dqt.parent().children().first().prepend('<label for="' + question + '" class="answerText requiredErrorText">' + QuestionRequiresAResponse + "</label>")
        }
        pcqo.addClass("requiredErrorQuestionBackground")
    }
}
function addRequiredErrorToSliderStarRankQuestion(question) {
    console.log(question);
    var item = $("#" + question + "_question");
    if (typeof QuestionRequiresAResponse !== "undefined" && typeof QuestionRequiresAResponse === "string" && QuestionRequiresAResponse.length > 0) {
        item.find("div.questionText").parent().children().first().prepend('<label for="' + question + '" class="answerText requiredErrorText">' + QuestionRequiresAResponse + "</label>")
    }
    item.addClass("requiredErrorQuestionBackground");
    item.css("background-color", "#cccccc");
    item.find('td[data-column-type="answer"]').each((function() {
        $(this).addClass("requiredErrorQuestionBackground");
        $(this).css("background-color", "#cccccc")
    }
    ))
}
function initServerSideRequiredQuestions() {
    var errorRequired = $("div.validationMessageText").children('span:contains("The following required questions were left unanswered:")').siblings("ul").children("li").children("span").each((function() {
        var onclickIDs = $(this).attr("onclick").match(/'([^']+)'/)[1];
        if (onclickIDs && onclickIDs.length > 0) {
            var question = onclickIDs.split("_");
            addRequiredErrorToSliderStarRankQuestion(question[0] + "_" + question[1])
        }
    }
    ))
}
function clearRequiredErrorFromQuestions() {
    $(".requiredErrorQuestionBackground").removeClass("requiredErrorQuestionBackground").css("background-color", "");
    $(".requiredErrorText").remove()
}
function showValidationMessage(message, errorList) {
    try {
        closeValidationMessage();
        clearRequiredErrorFromQuestions();
        $(".error").removeClass("error");
        var scrollToDiv = null;
        var div = $("#divValidationMessage");
        if (div.length != 0) {
            if (errorList == null || errorList.length <= 0) {
                if (message.length == 0) {
                    return 0
                }
                $("#spanValidationMessage").text(message)
            } else {
                if (message.length == 0 && errorList.length == 1) {
                    $("#spanValidationMessage").text(message);
                    $("#spanValidationMessage").removeClass("message");
                    $("#spanValidationMessage").attr("onClick", "");
                    var sb = '<a href="#" class="message" ';
                    if (errorList[0].element.id.length > 0) {
                        sb += " onClick=\"setFocus('" + errorList[0].element.id + "');return false;\"";
                        if (scrollToDiv == null) {
                            scrollToDiv = errorList[0].element.id
                        }
                        addRequiredErrorToQuestion(errorList[0].element.id)
                    }
                    sb += ">";
                    sb += errorList[0].message;
                    sb += "</a>\n";
                    var divMessage = $(".validationMessageText");
                    divMessage.html(sb)
                } else {
                    var sb = "<span>" + message + "</span>\n<ul>\n";
                    $("#spanValidationMessage").text(message);
                    $("#spanValidationMessage").removeClass("message");
                    $("#spanValidationMessage").attr("onClick", "");
                    $.each(errorList, (function(intIndex, error) {
                        sb += '<li><a href="#" class="message" ';
                        if (error.element.id.length > 0) {
                            sb += " onClick=\"setFocus('" + error.element.id + "');return false;\"";
                            if (scrollToDiv == null) {
                                scrollToDiv = error.element.id
                            }
                            addRequiredErrorToQuestion(error.element.id)
                        }
                        sb += ">";
                        sb += error.message;
                        sb += "</a></li>"
                    }
                    ));
                    sb += "\n</u>\n";
                    var divMessage = $(".validationMessageText");
                    divMessage.html(sb)
                }
            }
            $(".validationMessageText").attr("tabIndex", "-1");
            $(".validationMessageText").attr("role", "alert");
            $(".validationMessageText").attr("aria-labelledby", "errorSummaryHeading");
            $(window).scrollTop(0);
            div.slideDown("normal", null);
            $(".validationMessageText").focus();
            if (scrollToDiv != null && scrollToDiv !== undefined) {
                document.getElementById(scrollToDiv).scrollIntoView();
                setFocus(scrollToDiv)
            }
        } else {
            alert(message)
        }
    } catch (e) {
        var err = Error.invalidOperation("showValidationMessage: " + e.message);
        err.popStackFrame();
        throw err
    }
}
function closeValidationMessage() {
    try {
        $("#divValidationMessage").hide()
    } catch (e) {
        var err = Error.invalidOperation("closeValidationMessage: " + e.message);
        err.popStackFrame();
        throw err
    }
}
function setFocus(id) {
    try {
        var element = $("#" + id);
        $(element).focus();
        $(element).select()
    } catch (e) {
        var err = Error.invalidOperation("setFocus: " + e.message);
        err.popStackFrame();
        throw err
    }
}
function tableCellClicks() {
    $("input[type='radio'],[type='checkbox']").parent("td").click((function(evt) {
        if (evt.target == this) {
            $("input:radio", this).attr("checked", true).triggerHandler("click");
            $("input:checkbox:not([disabled])", this).each((function() {
                $(this).attr("checked", !$(this).is(":checked")).triggerHandler("click")
            }
            ));
            if ($(this).is(".button-set-cell")) {
                $(this).buttonset("refresh")
            }
        }
    }
    ))
}
function checkSimpleMode() {
    return typeof isSimpleMode !== "undefined" && isSimpleMode
}
function arrangeHiddenAnswers() {
    var hiddenAnswers = $("td[id$='_answer']:hidden");
    if ($(hiddenAnswers).length > 0) {
        $(hiddenAnswers).each((function() {
            placeAnswersInColumns($(this))
        }
        ))
    }
}
function setFormActionForAliases() {
    var setAction = $("#makeAliasesShowInBrowser");
    if ($(setAction).length <= 0 || $(setAction).val() !== "1")
        return;
    var actionStr = $("form[id='mainForm']").attr("action");
    var endIndex = actionStr.indexOf("/cgi-bin");
    var newActionStr = actionStr.slice(endIndex, actionStr.length);
    $("form").attr("action", newActionStr);
    if (typeof dl_InitDisplayLogicForPage === "function") {
        dl_InitDisplayLogicForPage()
    }
}
function placeTableHeaders() {
    if (checkSimpleMode() && checkBonfireSurvey()) {
        return
    }
    $(".tableHeader").each((function() {
        var id = $(this).attr("id");
        var table = $("#" + id.substring(0, id.length - "_header".length));
        $(this).width(table.outerWidth());
        var scaleCell = $(".Scale1Cell:first", table);
        var width = scaleCell.position().left - table.position().left;
        $("td:first", $(this)).width(width);
        var divId = id.replace("header", "Div");
        var wrappingDiv = $("#" + divId);
        if (wrappingDiv.visibility == "visible")
            this.style.visibility = "visible"
    }
    ));
    $(".multiScaleTableHeader").each((function() {
        $(".ScaleHeader", $(this)).width($(this).parents().first().innerWidth());
        this.style.visibility = "visible"
    }
    ))
}
function mapOtherEvents() {
    $('input[name$=".other"]').keyup((function(e) {
        selectOther(this)
    }
    ));
    $('input[name$=".other"]').blur((function(e) {
        selectOther(this)
    }
    ));
    $("input.hasOther").each((function() {
        var name = $(this).attr("name");
        $("input[name='" + name + "']").click((function() {
            if ($(this).is(":radio") && !$(this).hasClass("hasOther") || $(this).is(":checkbox") && $(this).hasClass("hasOther") && !$(this).is(":checked")) {
                $("input[name='" + name + ".other']").val("");
                $("input[name='" + name + ".other']").attr("tabindex", "-1")
            } else if ($(this).is(":radio") && $(this).hasClass("hasOther") || $(this).is(":checkbox") && $(this).hasClass("hasOther") && $(this).is(":checked")) {
                $("input[name='" + name + ".other']").attr("tabindex", "0")
            }
        }
        ))
    }
    ));
    $("input[type!=submit],select").keydown((function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false
        }
    }
    ))
}
function assertTrim() {
    if (typeof String.prototype.trim !== "function") {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
    }
}
function assertIndexOf() {
    if (typeof Array.prototype.indexOf !== "function") {
        Array.prototype.indexOf = function(elt) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = from < 0 ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in this && this[from] === elt)
                    return from
            }
            return -1
        }
    }
}
function selectOther(sender) {
    var value = $(sender).val().trim();
    if (value) {
        var inputName = $(sender).attr("name").substring(0, 19);
        var input = $('input.hasOther[name="' + inputName + '"]');
        var isNonStandardControl = $(input).length > 0 && $(input).siblings("ins").length === 1;
        if (isNonStandardControl) {
            var parent = $(input).parent("div");
            if (!$(parent).hasClass("checked")) {
                $(input).parent("div").addClass("checked");
                $(input).prop("checked", true);
                $(input).triggerHandler("click");
                $("input[name='" + inputName + "'][type='radio']:not(.hasOther)").parent("div").removeClass("checked")
            }
        } else if (input.size() > 0 && !$(input).attr("checked")) {
            $(input).attr("checked", "checked");
            $(input).triggerHandler("click")
        } else {
            var button = $('button.hasOther[name^="' + inputName + '"]');
            if (button.size() > 0 && !$(button).html()) {
                InqUtils.SetRank(button[0])
            }
        }
    }
}
function initNavBars() {
    if (checkNavigationState()) {
        mapButtonEvents();
        mapPageListEvents();
        syncNavigationState()
    }
}
function initPreviewValidationAndDisplayLogic() {
    if (!isPreviewMode()) {
        return
    }
    function setMode(id, initialize) {
        id = "#" + id;
        var mode = "";
        if (initialize) {
            mode = $(id).val()
        } else {
            mode = $(id).val() == "off" ? "on" : "off"
        }
        $(id).val(mode);
        var oldMode = mode == "on" ? "off" : "on";
        var parent = $(id).closest("li." + oldMode);
        $(parent).attr("class", "");
        $(parent).addClass(mode)
    }
    setMode("previewValidationMode", true);
    setMode("previewDisplayLogicMode", true);
    if (typeof Update == "function") {
        Update()
    }
    $("#liPreviewValidation").click((function() {
        setMode("previewValidationMode")
    }
    ));
    $("#liPreviewDisplayLogic").click((function() {
        setMode("previewDisplayLogicMode");
        if (typeof Update == "function") {
            Update()
        }
    }
    ));
    $("#liMobilePreview").click((function() {
        var thisSurveyUri = $("#hideMessageAnchor").attr("href");
        if (typeof mobilePreviewURL != "undefined" && mobilePreviewURL.length > 0 && typeof thisSurveyUri != "undefined" && thisSurveyUri.length > 0) {
            var targetUrl = thisSurveyUri;
            targetUrl = targetUrl.replace("#", "");
            targetUrl = targetUrl.replace("&np=1&hidepreview=1", "");
            if (ignoreDisplayLogic())
                targetUrl += "&previewDisplayLogicMode=off";
            else
                targetUrl += "&previewDisplayLogicMode=on";
            if (ignorePreviewValidation())
                targetUrl += "&previewValidationMode=off";
            else
                targetUrl += "&previewValidationMode=on";
            targetUrl += "&isMobilePreview=1&preview=1";
            var fullUrl = mobilePreviewURL + "?surveyURL=" + encodeURIComponent(targetUrl);
            window.open(fullUrl, "_blank")
        }
    }
    ))
}
function initMobilePreview() {
    var queryParams = [], hash;
    var q = document.URL.split("?")[1];
    if (q != undefined) {
        q = q.split("&");
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split("=");
            queryParams.push(hash[1]);
            queryParams[hash[0]] = hash[1]
        }
    }
    if (typeof mobilePreviewURL != "undefined" && mobilePreviewURL.length > 0) {
        for (var k = 0; k < document.styleSheets.length; k++) {
            var sheetUrl = document.styleSheets[k].href;
            if (sheetUrl != "undefined" && sheetUrl && sheetUrl.indexOf("survey.css") != -1) {
                var mysheet = document.styleSheets[k];
                var myRules = null;
                try {
                    myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules
                } catch (e) {
                    continue
                }
                if (!myrules)
                    return;
                mysheet.crossdelete = mysheet.deleteRule ? mysheet.deleteRule : mysheet.removeRule;
                for (var j = myrules.length - 1; j >= 0; j--) {
                    if (myrules[j].selectorText && myrules[j].selectorText != "undefined" && myrules[j].selectorText.indexOf("#TestModeBanner") != -1) {
                        mysheet.crossdelete(j)
                    }
                }
                break
            }
        }
    } else {
        $("#liMobilePreview").hide()
    }
    if (queryParams["isMobilePreview"] && queryParams["isMobilePreview"] == 1) {
        $("input[name=isMobilePreviewActive]").val("1");
        $("#TestModeBanner").hide()
    }
    if ($("input[name=isMobilePreview]").val() == "1")
        $("#TestModeBanner").hide()
}
function initVoiceToTextAndLandscapePrompts() {
    var isTablet = isTablet();
    var isPhone = isSmartPhone();
    function isSmartPhone() {
        return window.innerWidth <= 384 && window.innerHeight <= 640
    }
    function isTablet() {
        return navigator.userAgent.match(/Tablet|iPad|iPod/i) && window.innerWidth <= 1280 && window.innerHeight <= 800
    }
    function voiceToTextEnabled() {
        return $("div.voice-to-text-prompt-container").length > 0
    }
    function landscapePromptEnabled() {
        return !isTablet && $("div.landscape-prompt-container").length > 0
    }
    function hideLandscapePromptText() {
        return window.sessionStorage.getItem("hideLandscapePromptText") === "1"
    }
    function setIsInLandscape(value) {
        window.sessionStorage.setItem("mcx-is-in-landscape", value)
    }
    function isInLandscape() {
        return window.sessionStorage.getItem("mcx-is-in-landscape") === "1"
    }
    function showLandscapePrompt() {
        $("div.landscape-prompt-container").addClass("landscape-prompt-container-base");
        if (!hideLandscapePromptText()) {
            $("div.landscape-prompt-container p").first().text(landscapePromptText);
            window.sessionStorage.setItem("hideLandscapePromptText", "1")
        }
        $("div.landscape-prompt-container img").each((function() {
            $(this).attr("src", landscapePromptImageUrl)
        }
        ));
        $("div.landscape-prompt-container").show()
    }
    function hideLandscapePrompt() {
        $("div.landscape-prompt-container").hide()
    }
    if (!checkBonfireSurvey() || !voiceToTextEnabled() && !landscapePromptEnabled()) {
        return
    }
    if (!$.browser.mobile && !isPhone && !isTablet) {
        if (voiceToTextEnabled())
            $("div.voice-to-text-prompt-container").hide();
        if (landscapePromptEnabled())
            hideLandscapePrompt();
        return
    }
    if (voiceToTextEnabled()) {
        if (isTablet) {
            $("div.voice-to-text-prompt-container").removeClass("voice-to-text-prompt-container-base");
            $("div.voice-to-text-prompt-container").addClass("voice-to-text-prompt-container-tablet");
            $("div.voice-to-text-prompt-container p").addClass("voice-to-text-prompt-text-tablet");
            $("div.voice-to-text-prompt-container img").addClass("voice-to-text-prompt-image-tablet")
        } else {
            $("div.voice-to-text-prompt-container").removeClass("voice-to-text-prompt-container-tablet");
            $("div.voice-to-text-prompt-container").addClass("voice-to-text-prompt-container-base");
            $("div.voice-to-text-prompt-container p").removeClass("voice-to-text-prompt-text-tablet");
            $("div.voice-to-text-prompt-container img").removeClass("voice-to-text-prompt-image-tablet")
        }
        $("div.voice-to-text-prompt-container p").each((function() {
            $(this).text(voiceToTextPromptText)
        }
        ));
        $("div.voice-to-text-prompt-container img").each((function() {
            $(this).attr("src", voiceToTextImageUrl)
        }
        ))
    }
    if (landscapePromptEnabled()) {
        if (isInLandscape()) {
            hideLandscapePrompt()
        } else {
            showLandscapePrompt()
        }
        window.onresize = function(event) {
            if (window.innerHeight < window.innerWidth) {
                setIsInLandscape("1");
                $("div.landscape-prompt-container").each((function() {
                    $(this).removeClass("landscape-prompt-container-base");
                    $(this).hide()
                }
                ))
            } else {
                setIsInLandscape("0");
                showLandscapePrompt()
            }
        }
    }
}
function initConstantSum() {
    if (!pageHasConstantSumTable())
        return;
    $("input[data-const-sum-value-id]").blur((function() {
        updateConstantSumTotals($(this).attr("data-const-sum-total-id"))
    }
    ));
    $("span[id$='_constSumTotal']").each((function() {
        updateConstantSumTotals($(this).attr("id"))
    }
    ))
}
function updateConstantSumTotals(totalId) {
    var totalSpan = $("#" + totalId);
    var totalText = $(totalSpan).text();
    var totalValue = 0;
    var inputs = $(totalSpan).closest("table.table").find("input[data-const-sum-value-id]:visible");
    $(inputs).each((function() {
        var value = parseInt($(this).val());
        if (isNaN(value)) {
            value = 0
        }
        totalValue += value
    }
    ));
    $(totalSpan).text(totalValue)
}
function initDisplayLogicSelects() {
    var displayLogicSelects = $("option[data-display-logic-target='true']").closest("select");
    $(displayLogicSelects).each((function() {
        var displaySequence = 1;
        var parent = this;
        if ($(parent).closest(".object").is(".table-object")) {
            $(parent).addClass("display-logic-parent")
        }
        $("option", this).each((function() {
            $(this).attr("data-display-sequence", displaySequence++);
            $(this).attr("data-parent", $(parent).attr("id"));
            if ($(this).css("display") == "none") {
                hideOption(this)
            } else if ($(this).hasClass("column-disabled")) {
                InqUtils.HideColumn($(this))
            } else {
                InqUtils.ShowColumn($(this))
            }
        }
        ));
        hideSelectIfAllOptionsAreHidden(this)
    }
    ))
}
function initTextCounters() {
    $(".countText").keyup((function() {
        var maxLength = $(this).attr("maxlength");
        if (maxLength && !isNaN(maxLength)) {
            maxLength = parseInt(maxLength);
            var count = $(this).val().length;
            var counterId = "#" + $(this).attr("id") + "_counter";
            var counterLabel = "#" + $(this).attr("id") + "_label";
            $(counterId).text($(counterLabel).val() + (maxLength - count))
        }
    }
    ))
}
function checkHelpText() {
    return typeof helpTextSettings !== "undefined" && helpTextSettings
}
function initHelpText() {
    if (!checkHelpText()) {
        return false
    }
    function setInnerText(element, text) {
        if (!text)
            return;
        $(element).attr("aria-label", text)
    }
    $(".help-text-link").each((function() {
        var helpText = $(this).next(".help-text");
        $(this).attr("role", "tooltip");
        var img = $(this).children("img");
        if ($(img).length === 1) {
            $(img).attr("aria-label", $(helpText).text());
            $(img).attr("tabindex", "0")
        }
        var questionContainer = $(this).parents("div.question-object");
        if ($(questionContainer).length === 1) {
            var element = $(questionContainer).find("input[type='text']");
            var divText = $(questionContainer).find("div.questionText div:first");
            var innerText = $(divText).length === 1 ? $(divText)[0].innerText : "";
            if ($(element).length === 1) {
                setInnerText(element, innerText)
            } else {
                element = $(questionContainer).find("textarea");
                if ($(element).length === 1) {
                    setInnerText(element, innerText)
                } else {
                    $(questionContainer).removeAttr("aria-labelledby");
                    $(questionContainer).removeAttr("role")
                }
            }
        }
        $(this).qtip({
            content: {
                text: helpText
            },
            show: {
                event: helpTextSettings.showEvent
            },
            hide: {
                event: helpTextSettings.hideEvent,
                fixed: true,
                delay: 300
            },
            style: {
                classes: helpTextSettings.classes
            },
            position: {
                target: helpTextSettings.target,
                adjust: {
                    mouse: false
                }
            }
        })
    }
    ))
}
function initSliders() {
    $(".slider").each((function() {
        var sliderId = $(this).attr("id");
        var comboId = sliderId.substring(0, sliderId.length - "_slider".length);
        var combo = $("#" + comboId);
        var max = $("option", combo).size() - 1;
        var value = sliderValueFromSelectValue(combo, this);
        var tickLabels = [];
        $("option", combo).each((function() {
            tickLabels.push($(this).html().trim())
        }
        ));
        initSlider(this, comboId, max, value, tickLabels)
    }
    ))
}
function sliderValueFromSelectValue(select, slider) {
    var selectVal = $(select).val();
    if ($(slider).is(".has-unanswered")) {
        if (selectVal) {
            return parseInt(selectVal) + 1
        }
        return 0
    }
    return parseInt(selectVal)
}
function selectValueFromSliderValue(id, value) {
    if ($("#" + id + "_slider").is(".has-unanswered")) {
        if (value == 0) {
            return ""
        }
        return parseInt(value) - 1
    }
    return value
}
function initSlider(slider, id, max, value, tickLabels) {
    var obj = $("#" + id + "_slider").closest(".object");
    var row = $("#" + id + "_slider").closest("tr[data-display-logic-target='true']");
    var visible = obj.is(":visible");
    var rowVisible = row.is(":visible");
    row.show();
    obj.show();
    $(slider).labeledslider({
        range: "min",
        min: 0,
        max: max,
        value: value,
        tickInterval: 1,
        tickLabels: tickLabels,
        tweenLabels: false,
        change: function(event, ui) {
            InqUtils.SyncComboBoxToSlider(id, ui.value)
        },
        create: function(event, ui) {
            {
                sizeSlider(id)
            }
        }
    });
    if (!visible)
        obj.hide();
    if (!rowVisible)
        row.hide()
}
function sizeSlider(id) {
    var slider = $("#" + id + "_slider").closest(".ui-slider-wrapper");
    var tickMarkHeight = 11;
    var sliderWidthAdjustment = 0;
    var objHeight = $(".ui-slider-handle", slider).height() + tickMarkHeight;
    var maxLabelHeight = 0;
    $.each($(slider).find(".ui-slider-label-ticks span"), (function() {
        maxLabelHeight = Math.max(maxLabelHeight, $(this).height())
    }
    ));
    objHeight += maxLabelHeight;
    $(slider).height(objHeight);
    $(slider).closest(".table-slider-wrapper").width($(slider).width() + sliderWidthAdjustment);
    $(".ui-slider-range", slider).addClass("ui-corner-all")
}
function initStars() {
    if (typeof themeProperties != "object")
        return;
    $(".stars").each((function() {
        var starsId = $(this).attr("id");
        var comboId = starsId.substring(0, starsId.length - "_stars".length);
        var combo = $("#" + comboId);
        var number = $("option", combo).size() - 1;
        var score = starsValueFromSelectValue(combo);
        var hints = [];
        $("option", combo).each((function() {
            if ($(this).val()) {
                hints.push($(this).html().trim())
            }
        }
        ));
        initStar(this, comboId, number, score, hints)
    }
    ))
}
function initStar(star, id, number, score, hints) {
    $(star).raty({
        path: themeProperties.baseStarsImagePath + themeProperties.starsStyle,
        number: number,
        score: score,
        hints: hints,
        width: false,
        click: function(score, evt) {
            InqUtils.SyncComboBoxToStars(id, score)
        }
    });
    $(star).attr("tabindex", "0");
    starsKeyboardHook(star)
}
function starsValueFromSelectValue(select) {
    var selectVal = $(select).val();
    if (selectVal) {
        return parseInt(selectVal) + 1
    }
    return selectVal
}
function selectValueFromStarsValue(value) {
    return parseInt(value) - 1
}
function starsKeyboardHook(star) {
    $(star).bind("keydown", (function(e) {
        var currentScore = $(star).find("input").val();
        var max = $(star).find("img").length;
        charCode = typeof e.which == "number" && e.which ? e.which : e.keyCode;
        if (charCode == 38) {
            currentScore--;
            currentScore = currentScore <= 0 ? 0 : currentScore
        }
        if (charCode == 40) {
            currentScore++;
            currentScore = currentScore >= max ? max : currentScore
        }
        var currentStar = $(star).find('img[alt="' + currentScore + '"]');
        $(currentStar).click();
        $(currentStar).mouseenter()
    }
    ))
}
function initControls() {
    if (typeof themeProperties != "object")
        return;
    if (typeof $().iCheck != "function")
        return;
    if (navigator.userAgent.indexOf("MSIE 7.0") >= 0)
        return;
    var controlStyle = themeProperties.controlStyle;
    if (controlStyle == "standard") {
        return
    }
    var color = themeProperties.controlColor;
    if (color && color != "black") {
        controlStyle += "-" + color
    }
    $(".question-object:not(.button-question) input,.control-cell input").iCheck({
        checkboxClass: "icheckbox_" + controlStyle,
        radioClass: "iradio_" + controlStyle,
        increaseArea: "20%"
    });
    $(".question-object:not(.button-question) input,.control-cell input").on("ifToggled", (function(event) {
        $(this).trigger("click")
    }
    ))
}
function initButtonSets() {
    if (typeof convertQuestionsToButtonSet != "function")
        return;
    convertQuestionsToButtonSet();
    var countOfTables = $(".table").has(".button-set-cell").length;
    if (countOfTables >= 1) {
        $(window).resize((function() {
            $(".table").has(".button-set-cell").closest("div").each((function() {
                makeTableButtonsConsistentHeight("#" + this.id)
            }
            ))
        }
        ))
    }
}
function matchAnswerImages() {
    var answerImages = $(".ImageCell *[data-img-for]");
    if ($(answerImages).size() == 0)
        return;
    $(answerImages).detach();
    $(answerImages).each((function() {
        var imageCell = $(".ImageCell[data-img-for='" + $(this).attr("data-img-for") + "']");
        imageCell.prepend(this)
    }
    ))
}
function pageHasConstantSumTable() {
    var elements = $("td.ConstantSum");
    return elements && elements.length > 0
}
function mapButtonEvents() {
    $(".backButton").click((function() {
        backButtonClicked()
    }
    ));
    $(".nextButton").click((function() {
        nextButtonClicked()
    }
    ));
    $(".saveButton").click((function() {
        saveButtonClicked()
    }
    ));
    $(".reviewButton").click((function() {
        reviewButtonClicked()
    }
    ))
}
function backButtonClicked() {
    toggleNavigation(false);
    $("#action").val("back");
    $("form").submit()
}
function nextButtonClicked() {
    toggleNavigation(false);
    Allegiance.validateSmartProbe();
    if (!Allegiance.smartProbeValid()) {
        Allegiance.ignoreSmartProbe = true;
        toggleNavigation(true);
        return false
    }
    validationEvent = true;
    $("#action").val("next");
    $("form").submit()
}
function unavailableButtonClicked() {
    validationEvent = false;
    $("#action").val("unavailable");
    $("form").submit()
}
function saveButtonClicked() {
    toggleNavigation(false);
    $("#action").val("save");
    $("form").submit()
}
function reviewButtonClicked() {
    toggleNavigation(false);
    $("#action").val("review");
    $("form").submit()
}
function toggleNavigation(enable) {
    $(".nextButton,.backButton,.saveButton,.reviewButton").prop("disabled", !enable).toggleClass("button-disabled", !enable)
}
function mapPageListEvents() {
    $(".pagelist").change((function() {
        InqUtils.SetNextPage(this)
    }
    ))
}
function syncNavigationState() {
    $(".backButton").toggle(!navigationState.isFirstPage);
    if (navigationState.isLastPage)
        $(".nextButton").html(navigationState.finishButtonCaption);
    else
        $(".nextButton").html(navigationState.nextButtonCaption);
    $(".reviewButton").toggle(navigationState.isLastPage && !navigationState.isExitPage);
    if ($(".backButton").is(":visible")) {
        $(".backButton").html(navigationState.backButtonCaption)
    }
    if ($(".reviewButton").is(":visible")) {
        $(".reviewButton").html(navigationState.reviewButtonCaption)
    }
    if ($(".saveButton").is(":visible")) {
        $(".saveButton").html(navigationState.saveButtonCaption)
    }
    if (isBonfireExitPage()) {
        $(".progressBar").hide();
        $(".pagelist").hide();
        $(".backButton").hide();
        $(".nextButton").hide();
        $(".saveButton").hide()
    }
    setPercentComplete(navigationState.percentComplete);
    setCurrentPage(navigationState.currentPage);
    setPageListNames()
}
function setPercentComplete(pctComplete) {
    var i = 0;
    for (i = 10; i <= 100; i += 10) {
        var element = $(".percentComplete" + i);
        if (i <= pctComplete) {
            element.removeClass("ready");
            element.addClass("done")
        } else {
            element.removeClass("done");
            element.addClass("ready")
        }
    }
}
function setCurrentPage(currentPage) {
    $(".pagelist").val(currentPage)
}
function setPageListNames() {
    $(".pagelist").each((function() {
        $("option", this).each((function(i) {
            $(this).html(pageNames["page" + (i + 1)])
        }
        ))
    }
    ))
}
function initSelectedAnswers() {
    if (!checkBonfireSurvey()) {
        return
    }
    $("input[type=radio], input[type=checkbox]").each((function() {
        $(this).click((function() {
            var isTableQuestion = $(this).parents("table").hasClass("table");
            var selector;
            if (isTableQuestion)
                selector = "tr[id$='_row']>td>";
            else
                selector = "tr>td.ControlCell>";
            if ($(this).is(":radio"))
                selector = selector + "input[type=radio]";
            else
                selector = selector + "input[type=checkbox]";
            $(this).parents("tbody").find(selector).each((function() {
                $(this).parent("td").toggleClass("survey-answer-selected", $(this).is(":checked"))
            }
            ))
        }
        ))
    }
    ))
}
function initCollaborationMode() {
    if ($("input[type='hidden'][name='collaboration']").val() === "1") {
        initCollaborationBanner();
        initCollaborationDoneDialog();
        $(".object").each((function() {
            var id = $(this).attr("id");
            $(this).append('<div class="edit-collaboration" id="edit_collaboration_' + id + '"></div>');
            $(this).mouseenter((function() {
                activateCollaboration(this)
            }
            ));
            $(this).mouseleave((function() {
                deactivateCollaboration(this)
            }
            ));
            if (checkSimpleMode()) {
                $(this).css({
                    width: "100%",
                    padding: "5px 0px"
                })
            }
        }
        ));
        addBaseCollaborationHtml();
        $(".edit-collaboration").click((function() {
            addCollaborationErrorHtml(".collab-form.collab-survey");
            editCollaboration(this)
        }
        ))
    }
}
function addBaseCollaborationHtml() {
    $("#divCollabLoadingWrapper").remove();
    $("#divCollabWrapper").remove();
    $("body").append('<div id="divCollabLoadingWrapper"><div id="divCollabLoading" class="collab-container arrow-left"><div class="collab-form collab-survey"><div class="collab-loading"></div></div>');
    $("body").append('<div id="divCollabWrapper"></div>')
}
function initCollaborationBanner() {
    $("#hideMessageAnchor").hide();
    $(".collaboration-header").append("<a class='collaboration-email' id='collabNotifyOwner' href='#'>Once you are done adding comments, click here to notify the survey owner.</a>").show();
    $("#collabNotifyOwner").click((function() {
        notifyOwnerCollaborationIsDone()
    }
    ))
}
function initCollaborationDoneDialog() {
    $("#TestModeBanner").after("<div id='collaborationDoneDialog'></div>");
    $("#collaborationDoneDialog").hide()
}
function notifyOwnerCollaborationIsDone() {
    var surveyCode = $('input[type="hidden"][name="id"]').val();
    var authParam = genCollaborationAuthParamString();
    var companyName = $('input[type="hidden"][name="collaboration-companyname"]').val();
    var url = collaborationDoneEmailURL + "?id=" + Base64.encode("&surveyCode=" + surveyCode + authParam + "&cname=" + companyName) + "&jsoncallback=?";
    $.ajax({
        url: url,
        dataType: "jsonp",
        timeout: 2e4,
        success: function(data) {
            notifyOwnerCallback("Thank you! An email has been sent to the owner.", data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            notifyOwnerCallback("Unable to send email.")
        }
    })
}
function notifyOwnerCallback(message, data) {
    var result = safeParseJson(data);
    if (result && result.Valid) {
        $("#collaborationDoneDialog").removeClass("collaboration-email-error");
        $("#collaborationDoneDialog").addClass("collaboration-email-success")
    } else {
        $("#collaborationDoneDialog").removeClass("collaboration-email-success");
        $("#collaborationDoneDialog").addClass("collaboration-email-error")
    }
    $("#collaborationDoneDialog").text(message);
    $("#collaborationDoneDialog").show("fast");
    setTimeout((function() {
        $("#collaborationDoneDialog").fadeOut()
    }
    ), 3e3)
}
function addCollaborationErrorHtml(selector) {
    addBaseCollaborationHtml();
    var errorDiv = $("#divCollabAlert");
    if (errorDiv.length) {
        $("#divCollabAlert").hide();
        return
    }
    $(selector).append('<div id="divCollabAlert" class="collab-alert" style="display:none">');
    $("#divCollabAlert").append('<div id="divCollabAlertHeader" class="collab-alert-error"><div class="collab-alert-text"><span id="alertMessageContent"></span>').append('<ul id="dialogMessageErrorsContainer"></ul></div><div style="clear: both;"></div></div></div></div>')
}
function showCollaborationAlert(message, type, callBack) {
    if (type === undefined)
        return;
    $(".collab-loading").hide();
    $("#alertMessageContent").text(message);
    if (type === "error") {
        $("#divCollabAlertHeader").removeClass("collab-alert-success");
        $("#divCollabAlertHeader").addClass("collab-alert-error");
        $("#divCollabAlert").show("fast")
    } else {
        $("#divCollabAlertHeader").removeClass("collab-alert-error");
        $("#divCollabAlertHeader").addClass("collab-alert-success");
        $("#divCollabAlert").show("fast");
        setTimeout((function() {
            if (callBack) {
                callBack()
            } else {
                $("#divCollabAlert").hide("fast")
            }
        }
        ), 1500)
    }
}
function activateCollaboration(obj) {
    if ($(".collaboration-active").size() == 0) {
        var collabObj = $(".edit-collaboration", obj);
        $(obj).addClass("collaboration-hover");
        $(collabObj).addClass("collaboration-hover");
        if (checkSimpleMode()) {
            $(collabObj).addClass("collaboration-hover-simple-mode")
        }
    }
}
function deactivateCollaboration(obj) {
    $(obj).removeClass("collaboration-hover collaboration-hover-simple-mode");
    $(".edit-collaboration", obj).removeClass("collaboration-hover collaboration-hover-simple-mode")
}
function editCollaboration(object) {
    var parent = $(object).parent();
    $(parent).addClass("collaboration-active");
    $(object).addClass("collaboration-active");
    if (checkSimpleMode()) {
        $(object).addClass("collaboration-active-simple-mode")
    }
    var objectId = getObjectId(parent);
    if (objectId == null)
        return;
    var surveyCode = $('input[type="hidden"][name="id"]').val();
    var authParam = genCollaborationAuthParamString();
    var companyName = $('input[type="hidden"][name="collaboration-companyname"]').val();
    var url = getCollaborationURL + "?id=" + Base64.encode("&surveyCode=" + surveyCode + "&objectId=" + objectId + authParam + "&cname=" + companyName) + "&jsoncallback=?";
    showCollaborationLoading(object);
    $.ajax({
        url: url,
        dataType: "jsonp",
        timeout: 2e4,
        success: function(data) {
            getCollaborationCallback(object, data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            collaborationErrorCallback(jqXHR, textStatus, errorThrown);
            $(".collab-loading").hide()
        }
    })
}
function genCollaborationAuthParamString() {
    var param = $('input[type="hidden"][name="collaboration-email"]').val();
    if (param) {
        return "&email=" + param + "&noauth=1"
    } else {
        param = $('input[type="hidden"][name="collaboration-userid"]').val();
        if (param) {
            return "&cuid=" + param
        }
    }
    return ""
}
function getObjectId(obj) {
    var id = $(obj).attr("id");
    if (endsWith(id, "_table") || endsWith(id, "_text") || endsWith(id, "_image") || endsWith(id, "_social"))
        return handleFromId(id);
    if (endsWith(id, "_question")) {
        id = $(obj).attr("data-handle");
        if (id)
            return handleFromId(id);
        else {
            id = getObjectIdFromChild(obj);
            if (id)
                return id
        }
    }
    if (window.console)
        console.log("Unable to get object id from: " + id);
    return null
}
function getObjectIdFromChild(obj) {
    var id = $("input", obj).attr("name");
    if (id === "languageid") {
        return handleFromId($("input", obj).attr("value"))
    }
    if (id) {
        return handleFromId(id)
    }
    id = $("select", obj).attr("name");
    if (id) {
        return handleFromId(id)
    }
    id = $("textarea", obj).attr("name");
    if (id) {
        return handleFromId(id)
    }
    id = $(obj).attr("id");
    if (id) {
        return handleFromId(id)
    }
    return null
}
function showCollaborationLoading(object) {
    var loading = $("#divCollabLoadingWrapper");
    positionCollaborationElement(loading, object);
    loading.show();
    $(".collab-loading").show()
}
function hideCollaborationLoading() {
    $("#divCollabLoadingWrapper").hide();
    $(".collab-loading").hide()
}
function getCollaborationCallback(object, data) {
    var result = safeParseJson(data);
    if (!result.Valid) {
        showCollaborationAlert(result.Data, "error");
        return
    }
    $("#divCollabAlert").remove();
    var wrapper = $("#divCollabWrapper");
    positionCollaborationElement(wrapper, object);
    wrapper.html(result.Data);
    mapCollaborationEvents();
    hideCollaborationLoading();
    initializeMoreComments();
    wrapper.show()
}
function initializeMoreComments() {
    var hasMore = $(".more-comments").length > 0;
    $(".more-comments").hide();
    $(".more-link").toggle(hasMore);
    $(".more-link").unbind("click").bind("click", (function() {
        $(".more-link").hide();
        $(".more-comments").show()
    }
    ))
}
function positionCollaborationElement(collabElement, object) {
    var top = $(object).offset().top;
    collabElement.css("top", top - 44);
    if (checkSimpleMode()) {
        collabElement.css("right", 340)
    } else {
        collabElement.css("left", $(object).offset().left + 15)
    }
}
function mapCollaborationEvents() {
    $(".collab-save").click((function() {
        saveComment()
    }
    ));
    $("#btnClose").click((function() {
        closeCollaboration()
    }
    ));
    $(".collab-review-comments").click((function() {
        reviewComments()
    }
    ))
}
String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, (function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    }
    ))
}
;
function saveComment() {
    var language = $("input[name='language']").val();
    if (language)
        language = " (" + language + ")";
    else
        language = "";
    var comment = encodeURIComponent($("#collaborationComment").val() + language.toProperCase());
    if (!comment) {
        showCollaborationAlert(emptyCollaborationCommentMsg, "error");
        return
    }
    var objectId = $("#objectId").val();
    var surveyCode = $('input[type="hidden"][name="id"]').val();
    var authParam = genCollaborationAuthParamString();
    var companyName = $('input[type="hidden"][name="collaboration-companyname"]').val();
    var url = saveCollaborationURL + "?id=" + Base64.encode("&surveyCode=" + surveyCode + "&objectId=" + objectId + authParam + "&cname=" + companyName) + "&jsoncallback=?";
    var formData = "comment=" + comment;
    $.ajax({
        url: url,
        dataType: "jsonp",
        data: formData,
        timeout: 2e4,
        success: function(data) {
            saveCollaborationCallback(data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            collaborationErrorCallback(jqXHR, textStatus, errorThrown)
        }
    })
}
function saveCollaborationCallback(data) {
    var result = safeParseJson(data);
    var msgType = result.Valid ? "success" : "error";
    showCollaborationAlert(result.Data, msgType, closeCollaboration)
}
function closeCollaboration() {
    hideCollaborationLoading();
    $("#divCollabContainer").fadeOut();
    $(".collaboration-active").removeClass("collaboration-active")
}
function reviewComments() {
    $(".collab-review-comments").toggleClass("collab-review-comments-expanded");
    $(".collab-comments-list").slideToggle()
}
function collaborationErrorCallback(jqXHR, textStatus, errorThrown) {
    showCollaborationAlert(collaborationErrorMsg, "error")
}
function safeParseJson(data) {
    try {
        return JSON.parse(data)
    } catch (e) {
        return data
    }
}
function initPageRandomization() {
    if (!checkRandomizedPages() || !checkNavigationState()) {
        return
    }
    var currentPage = $("input[name='currentpage']").val();
    if (currentPage) {
        var count = randomizedPages.length;
        for (var i = 0; i < count; i++) {
            if (randomizedPages[i] === parseInt(currentPage)) {
                navigationState.isFirstPage = i === 0;
                navigationState.isLastPage = i + 1 === count;
                navigationState.percentComplete = 100 * ((i + 1) / count);
                if (i < count) {
                    $("input[name='nextpage']").val(randomizedPages[i + 1].toString())
                }
                break
            }
        }
    }
}
function checkRandomizedPages() {
    return typeof randomizedPages !== "undefined" && randomizedPages
}
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1
}
function handleFromId(id) {
    var pos = id.indexOf(".");
    if (pos > 0) {
        return id.substring(0, pos)
    }
    pos = id.indexOf("_");
    if (pos > 0) {
        return id.substring(0, pos)
    }
    return id
}
function postToFacebook(link, name, picture) {
    var obj = {
        method: "feed",
        link: link,
        name: name,
        picture: picture,
        display: "popup",
        redirect_uri: "http://www.allegiancetech.com/"
    };
    FB.init({
        appId: "403188356380446",
        status: true,
        cookie: true
    });
    FB.ui(obj)
}
function postToTwitter(text, url) {
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
    var windowName = "_blank";
    window.open(tweetUrl, windowName, popup_params(575, 255))
}
function popup_params(width, height) {
    var a = typeof window.screenX != "undefined" ? window.screenX : window.screenLeft;
    var i = typeof window.screenY != "undefined" ? window.screenY : window.screenTop;
    var g = typeof window.outerWidth != "undefined" ? window.outerWidth : document.documentElement.clientWidth;
    var f = typeof window.outerHeight != "undefined" ? window.outerHeight : document.documentElement.clientHeight - 22;
    var h = a < 0 ? window.screen.width + a : a;
    var left = parseInt(h + (g - width) / 2, 10);
    var top = parseInt(i + (f - height) / 2.5, 10);
    return "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=1"
}
function exclusiveTableScaleClicks() {
    $("table.exclusive").find("input").click((function() {
        exclusiveTableScaleClicked(this)
    }
    ))
}
function exclusiveTableScaleClicked(input) {
    var cellsInSameColumn = $("tr td:nth-child(" + ($(input).closest("tr").children().index($(input).closest("td")) + 1) + ")", $(input).closest("table"));
    var flatControlParent = $(input).parent("div");
    if ($(input).is(".exclusive")) {
        if ($(flatControlParent).length === 1) {
            $("input[id!='" + $(input).attr("id") + "']", cellsInSameColumn).parent("div").removeClass("checked")
        }
        $("input[id!='" + $(input).attr("id") + "']:checked", cellsInSameColumn).attr("checked", false)
    } else {
        $("input.exclusive:checked", cellsInSameColumn).attr("checked", false)
    }
    if (typeof Update == "function") {
        Update()
    }
}
function initMobile() {
    if (!checkBonfireSurvey()) {
        return
    }
    var currentWidth = getWidth();
    var hasDeviceWidths = false;
    if (typeof mobileDeviceWidth != "undefined" && mobileDeviceWidth && typeof tabletDeviceWidth != "undefined" && tabletDeviceWidth) {
        hasDeviceWidths = true;
        if (currentWidth <= mobileDeviceWidth) {
            mobileDeviceType = "mobile"
        } else if (currentWidth <= tabletDeviceWidth) {
            mobileDeviceType = "tablet"
        } else
            mobileDeviceType = ""
    }
    isMobile = $.browser.mobile;
    if (window.location.search.substring(1).indexOf("&mobilemode=true") >= 0 || !hasDeviceWidths && currentWidth <= 600 || hasDeviceWidths && currentWidth <= mobileDeviceWidth || hasDeviceWidths && currentWidth <= tabletDeviceWidth)
        isMobile = true;
    if (isMobile && !mobileDeviceType)
        mobileDeviceType = "mobile";
    if (isMobile) {
        $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
        $("#survey").css("width", "90%");
        $("#template").addClass("is-mobile");
        if (!isSimpleMode) {
            convertToSimpleMode()
        }
    }
}
function getWidth() {
    if (self.innerHeight) {
        return self.innerWidth
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth
    }
    if (document.body) {
        return document.body.clientWidth
    }
    return $(window).width()
}
function convertToSimpleMode() {
    $("#canvas").css("position", "inherit");
    $("#canvas").css("padding-top", "20px");
    $("#canvas").css("margin-left", "20px");
    $("#canvas").css("height", "auto");
    $("#canvas").css("min-height", "250px");
    $("#header .object").css("position", "absolute");
    $(".object").css("position", "relative");
    $(".object").css("margin-bottom", "30px");
    $(".object").css("top", "auto");
    $(".object").css("left", "auto");
    $(".object").css("width", "auto");
    $(".label").css("margin-bottom", "10px");
    $(".question").css("width", "90%");
    $(".table").css("width", "90%");
    $(".QuestionCell").css("width", "30%");
    $(".Scale1Cell").css("width", "auto");
    $("input[type='text']").css("width", "90%");
    $("textarea").css("width", "90%");
    isSimpleMode = true
}
function checkBonfireSurvey() {
    return typeof isBonfireSurvey !== "undefined" && isBonfireSurvey
}
function checkNavigationState() {
    return typeof navigationState !== "undefined" && navigationState
}
function isPreviewMode() {
    return $("#TestModeBanner").length
}
function ignorePreviewValidation() {
    return isPreviewMode() && $("#previewValidationMode").val() == "off"
}
function ignoreDisplayLogic() {
    return isPreviewMode() && $("#previewDisplayLogicMode").val() == "off"
}
function isBonfireExitPage() {
    return checkBonfireSurvey() && typeof navigationState !== "undefined" && typeof navigationState.isExitPage !== "undefined" && navigationState.isExitPage
}
function perform508Compliance() {
    function removeAltAttributeFromNonImageInputs() {
        $("input[type!=image]").removeAttr("alt")
    }
    function addFieldSetAndLegend() {
        $("#survey").wrapAll((function() {
            $(this).contents().wrapAll("<fieldset>")
        }
        ));
        var surveyTitle = $("title").text();
        $("#survey fieldset").prepend("<legend style='display:none'>" + surveyTitle + "</legend>")
    }
    function addLanguageAttribute() {
        $("html").attr("lang", $("input[name='cultureCode']").val())
    }
    function wrapHeadingsWithTags() {
        $("#canvas .heading1").wrap("<h1 role='heading' tabindex='0'></h1>");
        $(".heading2").wrap("<h2 role='heading' tabindex='0'></h2>");
        $(".heading3").wrap("<h3 role='heading' tabindex='0'></h3>")
    }
    function addAltAttributeToImages() {
        $(".validationCloseIcon img").attr("alt", "Close");
        $(".validationMessageIcon img").attr("alt", "Attention")
    }
    function maketextCounterNontabable() {
        $(".textCounter").attr("tabindex", "-1")
    }
    function makeTableQuestionsCompliant() {
        var selectors = ".table-object td.control-cell input[type!='hidden'] input[type!='checkbox'] input[type!='radio']," + ".table-object td.control-cell select," + ".table-object td.control-cell div.stars," + ".table-object td.control-cell textarea," + ".table-object td.control-cell button";
        $(selectors).each((function() {
            $(this).before("<label for='" + $(this).attr("id") + "' class='mcx-hidden-label'></label>");
            if ($(this).is(":checkbox") || $(this).is(":radio") || $(this).is("button")) {
                var scaleSpan = $("#" + $(this).attr("id") + "_header");
                if ($(scaleSpan).length > 0) {
                    $(this).attr("title", $(scaleSpan).text());
                    $("label[for='" + $(this).attr("id") + "']").text($(this).attr("title"))
                }
            } else if ($(this).is("select")) {
                $("option", $(this)).each((function() {
                    $(this).attr("title", $(this).text())
                }
                ))
            } else if ($(this).is(":text") || $(this).is("textarea")) {
                var parentCell = $(this).parent("td.control-cell");
                if ($(parentCell).length > 0) {
                    var headers = $(parentCell).attr("headers").split(" ");
                    var scaleHeader = headers && headers.length > 1 ? headers[1] : "";
                    if (scaleHeader) {
                        $(this).attr("title", $("span", $("#" + scaleHeader)).text())
                    }
                }
            }
        }
        ));
        $(".ScaleHeaderLeft,.ScaleHeaderCenter,.ScaleHeaderRight").attr("aria-hidden", "true")
    }
    function setFocusOnValidationMessage() {
        if ($("#divValidationMessage").is(":visible")) {
            $(".validationMessageText").focus()
        }
    }
    function setRoleAttributeForTableElements() {
        $("table[class!='table']").attr("role", "presentation")
    }
    function setRequiredFieldAttributesAndClasses() {
        $("input[name$='.rq']:not(input[name$='other.rq'])").parents("div.object:not(div.table-object)").addClass("mcx-is-required-question").find("input[type='radio'],input[type='checkbox'],input[type='text'],textarea,select").attr("aria-required", "true").addClass("mcx-is-required");
        $("div.object.table-object").children("input[name$='.rq']:not(input[name$='other.rq'])").each((function() {
            var thisName = this.name.replace(".rq", "");
            $("[name='" + this.name + "']").parents("div.table-object").addClass("mcx-is-required-question").find("[name^='" + thisName + "']").filter("input[type='radio'],input[type='checkbox'],input[type='text'],textarea").attr("aria-required", "true").addClass("mcx-is-required")
        }
        ))
    }
    function groupRadioButtonsAndCheckboxes() {
        var elements = $("div.question-object:has(input[type='radio'],[type='checkbox'])");
        if ($(elements).length <= 0)
            return;
        $(elements).each((function() {
            var tooltip = $(this).find("span[role='tooltip']");
            if ($(tooltip).length === 0) {
                var questionTextDiv = $(this).find("div.questionText");
                if ($(questionTextDiv).length > 0) {
                    var labelledbyId = $(this).attr("id").replace("_question", "_questionText");
                    $(this).attr("role", "group").attr("aria-labelledby", labelledbyId);
                    $(questionTextDiv).attr("id", labelledbyId)
                }
            }
        }
        ))
    }
    function makeProgressBarsCompliant() {
        var progressSelector = $("div.topNavigation").length > 0 ? "div.topNavigation" : $("div.bottomNavigation").length > 0 ? "div.bottomNavigation" : "";
        if (progressSelector === "")
            return;
        var valueNow = $(progressSelector + " div.progressBar ul li.done").length * 10;
        $("div.progressBar").before("<div id='progressBarText' style='position:absolute;left:-999em;top:-999em'>" + "survey progress " + valueNow + " percent" + "</div>");
        $("div.progressBar ul").attr("aria-hidden", "true")
    }
    function addRadioButtonArias() {
        var elements = $("td.control-cell:has(input[type='radio'])");
        if ($(elements).length <= 0)
            return;
        $(elements).each((function() {
            var radioElement = $(this).find("input[type='radio']");
            var headers = $(this).attr("headers");
            if (!!radioElement) {
                radioElement.attr("aria-labelledby", headers)
            }
        }
        ))
    }
    function addCheckboxArias() {
        var elements = $("td.control-cell:has(input[type='checkbox'])");
        if ($(elements).length <= 0)
            return;
        $(elements).each((function() {
            var checkboxElement = $(this).find("input[type='checkbox']");
            var headers = $(this).attr("headers");
            if (!!checkboxElement) {
                checkboxElement.attr("aria-labelledby", headers)
            }
        }
        ))
    }
    function addTableHeaderArias() {
        var tables = $(".table").has("td.control-cell").has("input[type='radio'],[type='checkbox']");
        if ($(tables).length <= 0)
            return;
        $(tables).each((function() {
            var firstId = $(this).attr("id") + "_first";
            var lastId = $(this).attr("id") + "_last";
            var headers = $(this).find("td.ScaleHeaderLeft, td.ScaleHeaderCenter, td.ScaleHeaderRight");
            if (headers.length <= 0) {
                return true
            } else if (headers.length == 1) {
                $(headers[0]).attr("id", firstId);
                lastId = firstId
            } else {
                $(headers[0]).attr("id", firstId);
                $(headers[headers.length - 1]).attr("id", lastId)
            }
            var rows = $(this).find("tr").has("input[type='radio'],[type='checkbox']");
            if (rows.length <= 0) {
                return true
            }
            $(rows).each((function() {
                var elements = $(this).find("input[type='radio'],[type='checkbox']");
                if (elements.length <= 0) {
                    return true
                }
                var existing = $(elements[0]).attr("aria-labelledby") ? $(elements[0]).attr("aria-labelledby") : "";
                var newVal = existing ? existing + " " + firstId : firstId;
                $(elements[0]).attr("aria-labelledby", newVal);
                existing = $(elements[elements.length - 1]).attr("aria-labelledby") ? $(elements[elements.length - 1]).attr("aria-labelledby") : "";
                newVal = existing ? existing + " " + lastId : lastId;
                $(elements[elements.length - 1]).attr("aria-labelledby", newVal)
            }
            ))
        }
        ))
    }
    function addTableTabsCheckboxRadio() {
        var tableQuestions = $("div.tableDescription");
        $(tableQuestions).each((function() {
            $(this).children().first().children().first().attr("tabIndex", 0)
        }
        ));
        var tables = $(".table").has("td.control-cell").has("input[type='radio'],[type='checkbox']");
        if ($(tables).length <= 0)
            return;
        var tabIndex = 1;
        $(tables).each((function() {
            var rows = $(this).find("tr").has("input[type='radio'],[type='checkbox']");
            if (rows.length <= 0) {
                return true
            }
            $(rows).each((function() {
                var elements = $(this).find("span.tableQuestion,input[type='radio'],[type='checkbox']");
                if (elements.length <= 0) {
                    return true
                }
                for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
                    var input = $(elements[elementIndex]);
                    input.attr("tabIndex", 0)
                }
            }
            ))
        }
        ))
    }
    function addTableTabsAllOthers() {
        var tableQuestions = $("div.tableDescription");
        $(tableQuestions).each((function() {
            $(this).children().first().children().first().attr("tabIndex", 0)
        }
        ));
        var tables = $(".table").has("td.Scale1Cell").has("input, select, textarea");
        if ($(tables).length <= 0)
            return;
        var tabIndex = 1;
        $(tables).each((function() {
            var rows = $(this).find("tr").has("input, select, textarea");
            if (rows.length <= 0) {
                return true
            }
            $(rows).each((function() {
                var elements = $(this).find("span.tableQuestion");
                if (elements.length <= 0) {
                    return true
                }
                for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
                    var input = $(elements[elementIndex]);
                    input.attr("tabIndex", 0)
                }
            }
            ))
        }
        ))
    }
    function addAriasForNavigationButtons() {
        function setLabel(element, replaceChar) {
            if ($(element).length <= 0)
                return;
            var text = $(element).text();
            if (text) {
                $(element).attr("aria-label", text.replace(replaceChar, "").trim())
            }
        }
        var btns = $("button.nextButton");
        $(btns).each((function() {
            setLabel($(this), ">")
        }
        ));
        btns = $("button.backButton");
        $(btns).each((function() {
            setLabel($(this), "<")
        }
        ));
        btns = $("button.saveButton");
        $(btns).each((function() {
            setLabel($(this), "")
        }
        ))
    }
    function hideButtoninputElementFromReaders() {
        var shouldBeHidden = $(".ui-helper-hidden-accessible:not(.ui-buttonset .ui-helper-hidden-accessible)");
        $(shouldBeHidden).each((function() {
            $(this).attr("aria-hidden", "true")
        }
        ))
    }
    if (!checkBonfireSurvey())
        return;
    removeAltAttributeFromNonImageInputs();
    addFieldSetAndLegend();
    wrapHeadingsWithTags();
    addAltAttributeToImages();
    addLanguageAttribute();
    makeTableQuestionsCompliant();
    setRoleAttributeForTableElements();
    setRequiredFieldAttributesAndClasses();
    groupRadioButtonsAndCheckboxes();
    makeProgressBarsCompliant();
    addRadioButtonArias();
    addCheckboxArias();
    addTableHeaderArias();
    addAriasForNavigationButtons();
    addTableTabsCheckboxRadio();
    addTableTabsAllOthers();
    hideButtoninputElementFromReaders();
    addTabIndexToDescriptiveText();
    maketextCounterNontabable();
    setFocusOnValidationMessage()
}
function addTabIndexToDescriptiveText() {
    $("div.object").children("span.normal").attr("tabindex", "0")
}
function convertHelpImagesToButtons() {
    if (!checkBonfireSurvey())
        return;
    $("img.help-text-icon").each((function() {
        var parent = $(this).parent("span");
        $(parent).attr("role", "tooltip");
        var describedBy = $(parent).prop("aria-describedby");
        $(this).replaceWith("<button tabindex=0 aria-describedby='" + describedBy + "' alt='" + $(this).prop("alt") + "' title='" + $(this).prop("title") + "' type='button' class='help-text-button helpt-text-icon' style='background-image:url(" + $(this).prop("src") + ");'</button>")
    }
    ))
}
function convertTablesIfMobile() {
    if (!checkBonfireSurvey() || !isMobile || isMobile && !mobileDeviceType)
        return;
    convertTablesIfMobileBase(mobileDeviceType)
}
function convertTablesIfMobileBase(deviceType) {
    var tableRows = $("input[type='radio'], input[type='checkbox']", $("table.table[data-drop-down-on-" + deviceType + "=true] tr[id$='_row'] td"));
    if ($(tableRows).length > 0) {
        var convert = new Allegiance.ConvertTable;
        var tables = $(tableRows).parents("table");
        $.each(tables, (function(index, table) {
            convert.toMobileOption1("#" + $(table).attr("id"))
        }
        ))
    }
    tableRows = $("input[type='radio'], input[type='checkbox']", $("table.table[data-question-new-row-on-" + deviceType + "=true] tr[id$='_row'] td"));
    if ($(tableRows).length > 0) {
        var convert = new Allegiance.ConvertTable;
        var tables = $(tableRows).parents("table");
        $.each(tables, (function(index, table) {
            convert.toMobileOption2("#" + $(table).attr("id"))
        }
        ))
    }
}
var Allegiance = Allegiance || {};
Allegiance.MobileAppSurvey = {
    isEnabled: function() {
        var retVal = false;
        try {
            if (window.location.href.indexOf("origin=mobileapp") > -1) {
                window.sessionStorage.setItem("isMobileAppSurvey", "1")
            }
            retVal = window.sessionStorage.getItem("isMobileAppSurvey") === "1"
        } catch (err) {
            console.log(err.message);
            retVal = false
        }
        return retVal
    },
    getAction: function() {
        return navigationState.isExitPage ? "exit" : window.sessionStorage.getItem("mobileAppSurveyAction")
    },
    setAction: function(action) {
        action = action || $("#action").val();
        if (action === "next" && navigationState.isLastPage) {
            action = "submit"
        }
        window.sessionStorage.setItem("mobileAppSurveyAction", action)
    },
    performEventProcessing: function() {
        if (!Allegiance.MobileAppSurvey.isEnabled())
            return;
        var action = Allegiance.MobileAppSurvey.getAction();
        if (!action || action === "exit" || action === "completed")
            return;
        function notifyMobileApp(url) {
            var iframe = document.createElement("IFRAME");
            iframe.setAttribute("src", url);
            document.documentElement.appendChild(iframe);
            iframe.parentNode.removeChild(iframe);
            iframe = null
        }
        function androidApp() {
            return typeof MCXAndroid !== "undefined"
        }
        if (action === "submit") {
            if (androidApp()) {
                MCXAndroid.surveySubmit()
            } else {
                notifyMobileApp("https://mcxmobileappsurvey/submit")
            }
            Allegiance.MobileAppSurvey.setAction("completed")
        } else if (action === "next") {
            if (androidApp()) {
                MCXAndroid.surveyNextPage(navigationState.currentPage)
            } else {
                notifyMobileApp("https://mcxmobileappsurvey/next?page=" + navigationState.currentPage)
            }
        } else if (action === "back") {
            if (androidApp()) {
                MCXAndroid.surveyPrevPage(navigationState.currentPage)
            } else {
                notifyMobileApp("https://mcxmobileappsurvey/back?page=" + navigationState.currentPage)
            }
        }
    },
    setActionAndPerformSubmitProcessing: function() {
        if (!Allegiance.MobileAppSurvey.isEnabled())
            return;
        var action = Allegiance.MobileAppSurvey.getAction();
        if (action === "completed")
            return;
        Allegiance.MobileAppSurvey.setAction();
        action = Allegiance.MobileAppSurvey.getAction();
        if (action === "submit") {
            Allegiance.MobileAppSurvey.performEventProcessing()
        }
    }
};
Allegiance.ConvertTable = function() {
    this.toMobileOption1 = function(id, scaleWeight) {
        if (!id)
            return;
        var originalTable = $(id);
        var originalTableDiv = $(id + "_table");
        var tableDescription = getOutsideTableDesc(id);
        var tableDescriptionOutside = tableDescription !== "" && tableDescription !== undefined;
        tableDescription = tableDescription ? tableDescription : getInsideTableDesc(id);
        var headerValues = $(id + " .ScaleHeader .bonfire-header-text");
        var scale = $(id + " .scale th");
        var questions = $(id + ">tbody>tr").not(":first");
        var questionText = $(id + ">tbody>tr .tableQuestion");
        var tableRows = "";
        for (var i = 0; i < questions.length; i++) {
            tableRows += "<tr " + getAttributes(questions[i]) + "><td ";
            if (questionText[i])
                tableRows += getAttributes(questionText[i]) + ">" + $(questionText[i]).html();
            tableRows += "<br>" + generateOptions(scale, scaleWeight, headerValues, $(questions[i]).find("td input"), true, originalTableDiv) + "</td></tr>"
        }
        originalTable.empty();
        if (!tableDescriptionOutside && tableDescription)
            originalTable.append(tableDescription);
        originalTable.append(tableRows);
        $(id).addClass("mobileTable tableDescription")
    }
    ;
    this.toMobileOption2 = function(id) {
        if (!id)
            return;
        $(id + " td.QuestionCell").hide();
        $(id + " th.QuestionCell").hide();
        $(id + " thead td.spacerColumn").hide();
        var originalTable = $(id);
        var colspan = $(id + " tr:nth-child(2) td").length;
        var table = "<table " + getAttributes(id) + ">";
        var header = $(id + " thead");
        if (header.html() != null) {
            var headerTable = header.find("table").first();
            if (headerTable != null)
                headerTable.attr("style", "margin-left:0px;border-spacing:0px");
            var headerCellLeft = header.find("td.ScaleHeaderLeft");
            if (headerCellLeft != null) {
                var headerCellLeftStyle = headerCellLeft.attr("style");
                headerCellLeft.attr("style", headerCellLeftStyle + ";padding:0px")
            }
            table += "<thead>" + header.html() + "</thead>"
        }
        var scaleRow = $(id + " tr").not("thead tr").first();
        var scaleRowIdCounter = 1;
        $(id + " tr").not("thead tr").not(":first").each((function() {
            var rowid = $(this).attr("id");
            var isDisplayLogicTarget = $("#" + rowid).attr("data-display-logic-target");
            var displayLogicAttributeText = "";
            if (isDisplayLogicTarget)
                displayLogicAttributeText = ' data-display-logic-target="true" ';
            var styleText = "";
            var style = $("#" + rowid).attr("style");
            if (style != null)
                styleText = ' style="' + style + '" ';
            var strOriginalRow = $(this).html();
            var strQuestiontext = $(this).find(".QuestionCell").text();
            if (strQuestiontext != "") {
                var newScaleRow = scaleRow.clone();
                $("*", newScaleRow).each((function() {
                    var elementId = $(this).attr("id");
                    if (elementId)
                        $(this).attr("id", elementId + "_" + scaleRowIdCounter)
                }
                ));
                scaleRowIdCounter++;
                table += "<tbody id='" + rowid + "' " + styleText + displayLogicAttributeText + ">";
                table += "<tr class='scale'><td class='QuestionCell' colspan='" + colspan + "'><span class='questionText'>" + strQuestiontext + "<span></td></tr>";
                table += "<tr>" + strOriginalRow + "</tr>";
                table += "<tr>" + newScaleRow.html() + "</tr>";
                table += "</tbody>"
            } else {
                table += "<tbody id='" + rowid + "' " + styleText + displayLogicAttributeText + ">";
                table += "<tr id='" + rowid + "'" + displayLogicAttributeText + ">" + strOriginalRow + "</tr>";
                table += "<tr>" + scaleRow.html() + "</tr>";
                table += "</tbody>"
            }
        }
        ));
        table += "</table>";
        originalTable.replaceWith(table);
        $(id).addClass("mobileTable tableDescription");
        if ($(id).find(".button-set-cell").length > 0) {
            $("tbody#undefined").css("display", "none");
            $(id).find("div.multiScaleTableHeader > table").css({
                "margin-left": "0px"
            });
            $(id).find("div.multiScaleTableHeader > table > tbody > tr > td").css({
                "vertical-align": "top"
            })
        }
    }
    ;
    var generateOptions = function(scale, scaleWeight, headerValues, answers, addSelectDataAttribute, tableDiv) {
        if (!scale || !answers)
            return "";
        var headerArr = $.makeArray(headerValues);
        var naLast = tableDiv.hasClass("alleg-naLastCol");
        var naFirst = tableDiv.hasClass("alleg-naFirstCol");
        var selectName = $(answers[0]).attr("name");
        var selectID = selectName.replace(".", "_");
        var optionId = selectID;
        var optionName = selectName;
        function isSelected(i) {
            return $(answers[i]).is(":checked") ? "selected" : ""
        }
        function isMultiSelect() {
            for (var i = 0; i < answers.length; i++) {
                if ($(answers[i]).attr("type") == "checkbox") {
                    return "multiple"
                }
            }
            return ""
        }
        var selectAnswer = $(answers).is(":checked");
        function genSelectDataAttribute() {
            return addSelectDataAttribute ? ' data-mobile-drop-down="true"' : ""
        }
        var options = "<select " + isMultiSelect() + ' name = "' + selectName + '" id = "' + selectID + '"' + genSelectDataAttribute() + '><option class="option-unselected"></option>';
        for (var i = 0; i < scale.length; i++) {
            var label = "";
            if (headerValues) {
                if (scaleWeight) {
                    for (var j = 0; j < scaleWeight.length; j++) {
                        if (i === scaleWeight[j]) {
                            label += " " + sliceHeader($(headerArr[0]).text());
                            headerArr.splice(0, 1)
                        }
                    }
                } else {
                    if (!naFirst && i === 0 || naFirst && i === 1)
                        label += " " + sliceHeader($(headerValues.first()).text());
                    else if (!naLast && i === scale.length - 1 || naLast && i === scale.length - 2)
                        label += " " + sliceHeader($(headerValues.last()).text())
                }
            }
            options += '<option value = "' + i + '" id="' + optionId + "_A" + i + '" name="' + optionName + '"' + isSelected(i);
            if ($(scale[i]).attr("data-display-logic-target") == "true") {
                options += ' data-display-logic-target="true" ';
                var scaleClass = $(scale[i]).attr("class").replace("Scale1Cell", "");
                options += 'class="' + scaleClass + '" '
            }
            options += ">" + $(scale[i]).text() + label + "</option>"
        }
        options += "</select>";
        return options
    };
    var getOutsideTableDesc = function(id) {
        return $(id).prev(".tableDescription").find("div > div").html()
    };
    var getInsideTableDesc = function(id) {
        return $(id + " .tableDescription div").html()
    };
    var getAttributes = function(id) {
        if (!id || !$(id)[0])
            return "";
        var attributes = "";
        $.each($(id)[0].attributes, (function() {
            if (this.specified) {
                attributes += this.name + '="' + this.value + '"'
            }
        }
        ));
        return attributes
    };
    var sliceHeader = function(header) {
        if (!header) {
            return ""
        }
        headerArr = header.match(/([A-Z]?[^A-Z]*)/g).slice(0, -1);
        var str = "";
        for (var i = 0; i < headerArr.length; i++) {
            str += headerArr[i] + " "
        }
        return str
    }
}
;
function handleImageButtonClick() {
    $("img[data-img-for]").click((function() {
        var id = $(this).attr("data-img-for");
        var inputElement = $("#" + id + "[type=radio]");
        if ($(inputElement).length > 0) {
            $(inputElement).prop("checked", "true")
        }
    }
    ))
}
function initSmartProbe() {
    Allegiance.ignoreSmartProbe = false;
    Allegiance.validateSmartProbe = function(textarea, isNextOrSubmit) {
        if (!checkBonfireSurvey())
            return;
        $(".smart-probe-container").hide();
        if (Allegiance.ignoreSmartProbe)
            return;
        if (textarea) {
            validate(textarea)
        } else {
            $("textarea[data-smart-probe='true']").each((function() {
                validate($(this))
            }
            ))
        }
        function validate(textarea) {
            var parentDiv = $(textarea).parent("div.object");
            if ($(parentDiv).css("visibility") === "hidden")
                return;
            if (!doSaidTooLittleCheck($(textarea))) {
                doNotSpecificCheck($(textarea))
            }
        }
        function getWordCount(value) {
            if (!value || value == "" || value.trim() == "")
                return 0;
            var string = value;
            var r1 = new RegExp("[　-䷿]","g");
            var r2 = new RegExp("[一-鿿]","g");
            var r3 = new RegExp("[฀-๿]","g");
            string = string.replace(r1, " {PNK} ");
            string = string.replace(r2, " {CJK} ");
            string = string.replace(r3, " {THI} ");
            string = string.replace(/(\(|\)|\*|\||\+|\?|\?|_|;|:|,|\.|\?)/gi, " ");
            string = string.replace(/\s+/gi, " ");
            var a = string.split(/[\s+|\\|\/]/g);
            var count = 0;
            var pnkCounter = 0;
            var thiCounter = 0;
            for (var i = 0; i < a.length; i++) {
                if (a[i] == "{PNK}") {
                    pnkCounter++
                } else if (a[i] == "{THI}") {
                    thiCounter++
                } else if (a[i].length > 0) {
                    count++
                }
            }
            count += Math.ceil(pnkCounter / 3) + Math.ceil(thiCounter / 4);
            return count
        }
        function setPosition(textArea, smartProbeContainer) {
            $(smartProbeContainer).css("width", $(textArea).width() - 18);
            $(smartProbeContainer).children(".smart-probe-message").each((function() {
                $(this).css({
                    width: "100%"
                })
            }
            ))
        }
        function doSaidTooLittleCheck(textArea) {
            if ($(textArea).prop("data-said-too-little-check-done") === "true")
                return false;
            $(textArea).prop("data-said-too-little-check-done", "true");
            var result = false;
            var id = $(textArea).attr("id");
            var smartProbeContainer = $("#" + id + "_too-little");
            if ($(smartProbeContainer).length > 0) {
                var smartProbeWords = $(smartProbeContainer).attr("data-number-of-words");
                smartProbeWords = !smartProbeWords ? 0 : parseInt(smartProbeWords);
                var wordCount = getWordCount($(textArea).val());
                $("#" + id + "_too-little .smart-probe-message").html($("#" + id + "_too-little .smart-probe-message-source").html());
                $(smartProbeContainer).toggle(wordCount < smartProbeWords);
                setPosition($(textArea), $(smartProbeContainer));
                result = $(smartProbeContainer).is(":visible")
            }
            return result
        }
        function doNotSpecificCheck(textArea) {
            if ($(textArea).prop("data-notspecific-check-done") === "true")
                return false;
            $(textArea).prop("data-notspecific-check-done", "true");
            function buildKeywordMessage(keywordArray) {
                var result = "";
                for (var i = 0; i < keywordArray.length; i++) {
                    if (i == keywordArray.length - 1) {
                        result += " or " + keywordArray[i].trim()
                    } else if (i > 0) {
                        result += ", " + keywordArray[i].trim()
                    } else {
                        result += keywordArray[i].trim()
                    }
                }
                return result
            }
            var id = $(textArea).attr("id");
            var smartProbeContainer = $("#" + id + "_not-specific");
            if ($(smartProbeContainer).length == 0)
                return;
            var answer = $(textArea).val().toLowerCase();
            var wordCountTarget = parseInt($(smartProbeContainer).attr("data-number-of-words"));
            var wordCountActual = getWordCount(answer);
            if (wordCountActual >= wordCountTarget)
                return;
            var keywordsMessageArray = [];
            var keywordsArray = $(smartProbeContainer).attr("data-keywords").split(/[\u002C\uFF0C\u3001]/);
            for (var i = 0; i < keywordsArray.length; i++) {
                var keyword = keywordsArray[i].trim();
                var lowerKeyword = keyword !== "" ? keyword.toLowerCase() : "";
                if (lowerKeyword == "" || !wordInString(answer, lowerKeyword))
                    continue;
                keywordsMessageArray.push(keyword)
            }
            if (keywordsMessageArray.length == 0)
                return;
            var length = keywordsMessageArray.length;
            var keywordString = "";
            switch (length) {
            case 1:
                keywordString = keywordsMessageArray[0];
                break;
            case 2:
                keywordString = keywordsMessageArray[0] + " or " + keywordsMessageArray[1];
                break;
            default:
                keywordString = buildKeywordMessage(keywordsMessageArray);
                break
            }
            var messageContainer = $("#" + id + "_not-specific .smart-probe-message");
            var message = $("#" + id + "_not-specific .smart-probe-message-source").html();
            message = message.replace("[keywords]", keywordString);
            $(messageContainer).html(message);
            setPosition($(textArea), $(smartProbeContainer));
            $(smartProbeContainer).show()
        }
    }
    ;
    Allegiance.smartProbeValid = function() {
        return !$(".smart-probe-container").is(":visible")
    }
    ;
    if (!checkBonfireSurvey())
        return;
    $("textarea[data-smart-probe='true']").blur((function(e) {
        var target = e.relatedTarget;
        if (target === null || typeof target === "undefined") {
            target = document.activeElement
        }
        if ($(target).prop("type") != "button")
            Allegiance.validateSmartProbe($(this))
    }
    ))
}
function wordInString(s, word) {
    var testword = escapeRegExp(word);
    var testword_temp = "x" + testword + "x";
    var regex_replace = new RegExp(testword,"g");
    var s_temp = s.replace(regex_replace, testword_temp);
    return new RegExp("\\b" + testword_temp + "\\b","i").test(s_temp)
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function adjustTableHeaders() {
    $(".alleg-naFirstCol").each((function() {
        var tableName = $(this).find("table:first").attr("id");
        var totalColumns = $(this).find("tr.scale > th").length;
        $(this).find(".table tr>td:nth-child(2)").addClass("highlightCol");
        $(this).find(".table tr>th:nth-child(2)").addClass("highlightCol");
        standardRemakeHeader("#" + tableName, totalColumns, 1, 0)
    }
    ));
    $(".alleg-naLastCol").each((function() {
        var tableName = $(this).find("table:first").attr("id");
        var totalColumns = $(this).find("tr.scale > th").length;
        var highlightColumn = totalColumns + 1;
        $(this).find(".table tr>td:nth-child(" + highlightColumn + ")").addClass("highlightCol");
        $(this).find(".table tr>th:nth-child(" + highlightColumn + ")").addClass("highlightCol");
        standardRemakeHeader("#" + tableName, totalColumns, 0, 1)
    }
    ))
}
function standardRemakeHeader(tableName, colTotalScale, colBefore, colAfter) {
    try {
        var newColSpan = colTotalScale - colAfter - colBefore;
        if (colBefore > 0) {
            $(tableName + " .spacerColumn").after("<td colspan = '" + colBefore + "'>&nbsp;</td>")
        }
        $(tableName + " .ScaleHeader").html($(tableName + " .ScaleHeader").html().replace('="' + colTotalScale + '"', '="' + newColSpan + '"'));
        var emptyColSpan = colAfter;
        if (emptyColSpan > 0) {
            var sTablehtml = $(tableName + " .ScaleHeader").html();
            var sTableHeader = "<td colspan = '" + emptyColSpan + "'></td>";
            $(sTableHeader).appendTo(tableName + " .ScaleHeader")
        }
    } catch (e) {}
}
function SkipIfAllObjectsAreHidden() {
    if ($("#firstPage").val() == "1") {
        var allHidden = true;
        $('[id*="_question"]').each((function(index, value) {
            if ($(this).is(":visible") && $(this).css("visibility") != "hidden")
                allHidden = false
        }
        ));
        $('[id*="_text"]').each((function(index, value) {
            if ($(this).is(":visible") && $(this).css("visibility") != "hidden")
                allHidden = false
        }
        ));
        $('[id*="_image"]').each((function(index, value) {
            if ($(this).is(":visible") && $(this).css("visibility") != "hidden")
                allHidden = false
        }
        ));
        $('[id*="_table"]').each((function(index, value) {
            if ($(this).is(":visible") && $(this).css("visibility") != "hidden")
                allHidden = false
        }
        ));
        $('[id*="_social"]').each((function(index, value) {
            if ($(this).is(":visible") && $(this).css("visibility") != "hidden")
                allHidden = false
        }
        ));
        if (allHidden)
            $("#survey").fadeOut(100, (function() {
                nextButtonClicked()
            }
            ))
    }
}
function setUserAgent() {
    var useragentHdnField = document.getElementById("useragent");
    var rawuseragentHdnField = document.getElementById("rawuseragent");
    if (useragentHdnField) {
        try {
            var userAgentParser = new UAParser;
            var userAgent = userAgentParser.getResult();
            var userAgentString = JSON.stringify(userAgent);
            useragentHdnField.value = userAgentString
        } catch (e) {
            useragentHdnField.value = "parse_error: " + e
        }
    }
    if (rawuseragentHdnField)
        rawuseragentHdnField.value = navigator.userAgent
}
function getFirstPageUserAgent() {
    if (typeof document.forms[0] === "undefined" || typeof document.forms[0].currentpage === "undefined") {
        return
    }
    var currentPage = document.forms[0].currentpage.value;
    if (currentPage) {
        if (currentPage == 1) {
            var mainform = document.getElementsByName("mainForm")[0];
            if (mainform) {
                var formAction = mainform.getAttribute("action");
                var respondent = document.getElementsByName("respondent")[0].value;
                var useragentHdnField = document.getElementById("useragent");
                if (useragentHdnField) {
                    var surveyCode = document.getElementsByName("id")[0];
                    if (surveyCode) {
                        var url = formAction + "?request=agent&respondent=" + respondent + "&surveycode=" + surveyCode.value + "&useragent=" + useragentHdnField.value;
                        $.ajax({
                            url: url,
                            dataType: "text",
                            timeout: 2e3,
                            success: function(data) {},
                            error: function() {}
                        })
                    }
                }
            }
        }
    }
}
function randomizeQuestionsOnSamePage() {
    objectsHtmls = [];
    var element = document.getElementById("RandomizedQuestionList");
    if (typeof element == "undefined" || element == null)
        return;
    if ($("#RandomizedQuestionList").val() == "")
        return;
    $(".SamePageQuestionRandomization").each((function(i, el) {
        objectsHtmls[$(el).attr("id").toUpperCase()] = $(el).prop("outerHTML")
    }
    ));
    var questionsInRandomOrder = $("#RandomizedQuestionList").val().split(",");
    var numberOfObjectsToRandomizeOnPage = Object.keys(objectsHtmls).length;
    for (var i = 0; i < numberOfObjectsToRandomizeOnPage; i++) {
        var ReplacingObjectId = questionsInRandomOrder[i].toUpperCase();
        var html = objectsHtmls[ReplacingObjectId];
        if (html != "") {
            $("#randomOnPage" + i).html(html);
            $("#randomOnPage" + i).show()
        }
    }
}
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}
)(navigator.userAgent || navigator.vendor || window.opera);
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(c) {
        var a = "";
        var k, h, f, j, g, e, d;
        var b = 0;
        c = Base64._utf8_encode(c);
        while (b < c.length) {
            k = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = k >> 2;
            g = (k & 3) << 4 | h >> 4;
            e = (h & 15) << 2 | f >> 6;
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
        }
        return a
    },
    decode: function(c) {
        var a = "";
        var k, h, f;
        var j, g, e, d;
        var b = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (b < c.length) {
            j = this._keyStr.indexOf(c.charAt(b++));
            g = this._keyStr.indexOf(c.charAt(b++));
            e = this._keyStr.indexOf(c.charAt(b++));
            d = this._keyStr.indexOf(c.charAt(b++));
            k = j << 2 | g >> 4;
            h = (g & 15) << 4 | e >> 2;
            f = (e & 3) << 6 | d;
            a = a + String.fromCharCode(k);
            if (e != 64) {
                a = a + String.fromCharCode(h)
            }
            if (d != 64) {
                a = a + String.fromCharCode(f)
            }
        }
        a = Base64._utf8_decode(a);
        return a
    },
    _utf8_encode: function(b) {
        b = b.replace(/\r\n/g, "\n");
        var a = "";
        for (var e = 0; e < b.length; e++) {
            var d = b.charCodeAt(e);
            if (d < 128) {
                a += String.fromCharCode(d)
            } else {
                if (d > 127 && d < 2048) {
                    a += String.fromCharCode(d >> 6 | 192);
                    a += String.fromCharCode(d & 63 | 128)
                } else {
                    a += String.fromCharCode(d >> 12 | 224);
                    a += String.fromCharCode(d >> 6 & 63 | 128);
                    a += String.fromCharCode(d & 63 | 128)
                }
            }
        }
        return a
    },
    _utf8_decode: function(a) {
        var b = "";
        var d = 0;
        var e = c1 = c2 = 0;
        while (d < a.length) {
            e = a.charCodeAt(d);
            if (e < 128) {
                b += String.fromCharCode(e);
                d++
            } else {
                if (e > 191 && e < 224) {
                    c2 = a.charCodeAt(d + 1);
                    b += String.fromCharCode((e & 31) << 6 | c2 & 63);
                    d += 2
                } else {
                    c2 = a.charCodeAt(d + 1);
                    c3 = a.charCodeAt(d + 2);
                    b += String.fromCharCode((e & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    d += 3
                }
            }
        }
        return b
    }
};
