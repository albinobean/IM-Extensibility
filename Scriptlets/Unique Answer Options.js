$('.hidden-weight').click(); $('.weight').val(0);
findDuplicates();
function findDuplicates() {
  let answers = {};
  $('.answer').toArray().map(b => $(b).val()).forEach(a => {
    if (answers[a]) {
      alert(`"${a}" is duplicated as an answer option.`);
      return;
    } else {
      answers[a] = a;
    }
  });
}

