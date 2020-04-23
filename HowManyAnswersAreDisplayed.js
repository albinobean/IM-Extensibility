function HowManyAnswersAreDisplayed(qTag){
    return $('#' + qTag + '_question .question table tr:not(.row-disabled)').length;
}
console.log(HowManyCheckboxesAreDisplayed('CheckboxCount'));