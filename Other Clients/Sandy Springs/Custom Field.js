var Q8a ; // Value - Integer as String
var Q4 ; // Value - Integer as String
var Q8 ; // Value - Integer as String
var resultCategories = [10,9,8,7,6,5,4,3,2,1,0];
function CustomField() {
    var sum = 0;
    var count = 0;

    var array = [Q4, Q8, Q8a];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] <= 10) {
            var valueString = array[i];

            var valueInt = parseInt(valueString);
            var hasValue = !isNaN(valueInt);

            if (hasValue) {
                sum += valueInt;
                count++;

            }
        }
        //do nothing if answer is not a number
    }

//Avoid Division By 0
    if (count > 0) {
        var average = Math.round(sum * 10 / count) / 10; // converts to a numeral
        return average;
        if (average >= 9.5) {
            return resultCategories[0];
        } else if (average < 9.5 && average >= 8.5) {
            return resultCategories[1];
        } else if (average < 8.5 && average >= 7.5) {
            return resultCategories[2];
        } else if (average < 7.5 && average >= 6.5) {
            return resultCategories[3];
        } else if (average < 6.5 && average >= 5.5) {
            return resultCategories[4];
        } else if (average < 5.5 && average >= 4.5) {
            return resultCategories[5];
        } else if (average < 4.5 && average >= 3.5) {
            return resultCategories[6];
        } else if (average < 3.5 && average >= 2.5) {
            return resultCategories[7];
        } else if (average < 2.5 && average >= 1.5) {
            return resultCategories[8];
        } else if (average < 1.5 && average >= 0.5) {
            return resultCategories[9];
        } else if (average < 0.5 && average >= 0) {
            return resultCategories[10];
        }
    }
}