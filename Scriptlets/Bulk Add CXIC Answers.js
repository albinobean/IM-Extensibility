let answerList = prompt("Please enter the list of answer options.  They can be on separate lines or separated by pipes.");
let answers
let r = /[^\n\r]*/gm
if (r.test(answerList)) {
    answers = answerList.match(r);
} else {
    answers = answerList.split('|');
}
answers = answers.filter(a => a.length > 0)
console.log(answers.length);
for (let i = 0; i < answers.length; i++) {
    $('#Submit_2').click();
    do {
        await sleep(1000);
    } while (document.readyState != 'complete')
    console.log(`Adding: ${answers[i]}`)
    $('#token').val(answers[i]);
    $('#submitButton').click();
    do {
        await sleep(1000);
    } while (document.readyState != 'complete')
}
async function waitForPageToLoad() {
    await sleep(10000);
    do {
        await sleep(1000);
    } while (document.readyState != 'complete')
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}