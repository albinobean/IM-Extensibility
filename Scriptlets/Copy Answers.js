// javascript: $('.answer').toArray().forEach(a=>console.log($(a).val()))
//NOT WORKING YET
let prevName = $('#FormattedText').val();
$('#FormattedText').val($('.answer').toArray().map(t => $(t).val().trim()).join('\r\n'));
$('#FormattedText').select();
document.execCommand('copy');
console.log(prevName);
$('#FormattedText').val(prevName);

$('.answer').toArray().forEach(a => console.log($(a).val()))


