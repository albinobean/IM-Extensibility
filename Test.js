/*Script to have headers placed over 1 and 10.  Copy and paste the 2nd line to add same formatting to other questions.  Will need to update the Q Code for the new question.*/
$(document).ready(function () {
    /* This is for Q1 */ remakeHeader("#Q001F8C7E", 11, 0, 1);
    /* This is for Q2 */ remakeHeader("#Q001F8C8B", 11, 0, 1);
    /* This is for Q3 */ remakeHeader("#Q001F8C98", 11, 0, 1);
    /* This is for Q4 */ remakeHeader("#Q001F8CA5", 11, 0, 1);
    /* This is for Q5 */ remakeHeader("#Q0000022C", 11, 0, 1);
    /* This is for Q7 */ remakeHeader("#Q0005711B", 11, 0, 1);
    /* This is for Q8 */ remakeHeader("#Q00171F5A", 11, 0, 1);
    /* This is for Q9 */ remakeHeader("#Q0000000D", 11, 0, 1);
    /* This is for Q10 */ remakeHeader("#Q00003FE0", 11, 0, 1);
    /* This is for Q11 */ remakeHeader("#Q000040BD", 11, 0, 1);
    /* This is for Q12 */ remakeHeader("#Q0001A38D", 11, 0, 1);
    /* This is for Q13 */ remakeHeader("#Q00166B68", 11, 0, 1);
    /* This is for Q14 */ remakeHeader("#Q00171FF0", 11, 0, 1);
    /* This is for Q16 */ remakeHeader("#Q001F8D92", 11, 0, 1);
    /* This is for Q17 */ remakeHeader("#Q00000056", 11, 0, 1);
    /* This is for Q18 */ remakeHeader("#Q001F8CE1", 11, 0, 1);
    /* This is for Q19 */ remakeHeader("#Q00042157", 11, 0, 1);
    /* This is for Q20 */ remakeHeader("#Q0001A494", 11, 0, 1);
    /* This is for Q21 */ remakeHeader("#Q00166C12", 11, 0, 1);
    /* This is for Q22 */ remakeHeader("#Q00000172", 11, 0, 1);
    /* This is for Q26 */ remakeHeader("#Q001F8E0D", 11, 0, 1);
    /* This is for Q34b */ remakeHeader("#Q00366C25", 11, 0, 1);
    /* This is for Q8 */ remakeHeader("#Q00373D8D", 11, 0, 1);
});
function remakeHeader(tableName, colTotalScale, colBefore, colAfter) {
   try {
      var newColSpan = colTotalScale - colAfter - colBefore;
      if (colBefore > 0) { $(tableName + ' .spacerColumn').after("<td colspan = '" + colBefore + "'>&nbsp;</td>"); }
      $(tableName + ' .ScaleHeader').html($(tableName + ' .ScaleHeader').html().replace('="' + colTotalScale + '"', '="' + newColSpan + '"'));
      var emptyColSpan = colAfter + colBefore;
      if (emptyColSpan > 0) {
         var sTablehtml = $(tableName + ' .ScaleHeader').html();
         var sTableHeader = "<td colspan = '" + emptyColSpan + "'></td>";
         $(sTableHeader).appendTo(tableName + ' .ScaleHeader')
      }
   }
   catch (e) { }
}
/*This next section is to wrap text for the headers.*/
$(document).ready(function () {
    /* This is for Q1 */ centerHeaders("#Q001F8C7E", 9, 10);
    /* This is for Q2 */ centerHeaders("#Q001F8C8B", 9, 10);
    /* This is for Q3 */ centerHeaders("#Q001F8C98", 9, 10);
    /* This is for Q4 */ centerHeaders("#Q001F8CA5", 9, 10);
    /* This is for Q5 */ centerHeaders("#Q0000022C", 9, 10);
    /* This is for Q7 */ centerHeaders("#Q0005711B", 9, 10);
    /* This is for Q8 */ centerHeaders("#Q00171F5A", 9, 10);
    /* This is for Q9 */ centerHeaders("#Q0000000D", 9, 10);
    /* This is for Q10 */ centerHeaders("#Q00003FE0", 9, 10);
    /* This is for Q11 */ centerHeaders("#Q000040BD", 9, 10);
    /* This is for Q12 */ centerHeaders("#Q0001A38D", 9, 10);
    /* This is for Q13 */ centerHeaders("#Q00166B68", 9, 10);
    /* This is for Q14 */ centerHeaders("#Q00171FF0", 9, 10);
    /* This is for Q16 */ centerHeaders("#Q001F8D92", 9, 10);
    /* This is for Q17 */ centerHeaders("#Q00000056", 9, 10);
    /* This is for Q18 */ centerHeaders("#Q001F8CE1", 9, 10);
    /* This is for Q19 */ centerHeaders("#Q00042157", 9, 10);
    /* This is for Q20 */ centerHeaders("#Q0001A494", 9, 10);
    /* This is for Q21 */ centerHeaders("#Q00166C12", 9, 10);
    /* This is for Q22 */ centerHeaders("#Q00000172", 9, 10);
    /* This is for Q26 */ centerHeaders("#Q001F8E0D", 9, 10);
    /* This is for Q34b */ centerHeaders("#Q00366C25", 9, 10);
    /* This is for Q8 */ centerHeaders("#Q00373D8D", 9, 10);
});
function centerHeaders(tableID, percent, colBet) {
   $(tableID + '_scale_header table tbody tr td').attr('class', "ScaleHeaderCenter");
   for (i = 0; i < colBet; i++) {
      $(tableID + '_scale_header table tbody tr td:nth-child(1)').after('<td></td>');
   }
   $(tableID + '_scale_header table tbody tr td').attr('style', "width:" + percent + "%;");
   $(".bonfire-header-text").attr('style', "font-weight:bold")
}
$(document).ready(function () {
   var curPage = parseInt($('input[name=currentpage]').val(), 10);
   if (curPage == 7) {
      var selectedVal = "";
      var selected = $('#Combos_question input[type=radio]:checked');
      if (selected.length > 0) {
         selectedVal = selected.val();
      }
      if (selectedVal == 0) {
         randomizeQuestion('#Random1_question');
      }
      if (selectedVal == 1) {
         randomizeQuestion('#Random2_question');
      }
      if (selectedVal == 2) {
         randomizeQuestion('#Random3_question');
      }
      if (selectedVal == 3) {
         randomizeQuestion('#Random4_question');
      }
      if (selectedVal == 8) {
         randomizeQuestion('#Random5_question');
      }
      if (selectedVal == 9) {
         randomizeQuestion('#Random6_question');
      }
      if (selectedVal == 10) {
         randomizeQuestion('#Random7_question');
      }
      if (selectedVal == 11) {
         randomizeQuestion('#Random8_question');
      }
      if (selectedVal == 12) {
         randomizeQuestion('#Random9_question');
      }
      if (selectedVal == 13) {
         randomizeQuestion('#Random10_question');
      }
      if (selectedVal == 14) {
         randomizeQuestion('#Random11_question');
      }
   }
   function randomizeQuestion(QID) {
      try {
         var answerCount = $(QID + ' input').length;
         var randomAnswer = Math.floor((Math.random() * answerCount) + 1);
         randomAnswer = randomAnswer - 1;
         $(QID + ' input[value=' + randomAnswer + ']').attr('checked', true);
         $(QID).hide();
      }
      catch (e) {
         $(QID).hide();
      }
      nextButtonClicked();
   }
});
$(document).ready(function () {
   var curPage = parseInt($('input[name=currentpage]').val(), 10);
   if (curPage == 9) {
      $(":button").first().hide();
   }
});
/*Adding percentage to progress bar*/
$(document).ready(function () {
   var count = $('.progressBar ul').children('.done').size() * 10;
   $('<div class="percentComplete">' + count + '%</div>').insertAfter('.progressBar ul');
});