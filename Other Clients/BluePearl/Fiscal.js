let cDt = '3/22/2020';
let resultCategories = [];
console.log(customField(cDt));
function customField(cDt) {
    // Only copy the code below this line for the custom field
const yearStarts = ['1/1/2012', '12/30/2012', '12/29/2013', '12/28/2014', '1/3/2016', '1/1/2017', '12/31/2017', '12/30/2018', '12/29/2019', '1/3/2021', '1/2/2022', '1/1/2023', '12/31/2023', '12/29/2024', '12/28/2025', '1/3/2027', '1/2/2028', '12/31/2028', '12/30/2029', '12/29/2030', '12/28/2031'];
const firstFiscalYear = 2012;
const visitDate = new Date(cDt);
for (let i = 0; i < yearStarts.length - 1; i++) {
    let yearEnd = new Date(yearStarts[i + 1]);
    if (visitDate < yearEnd) {
        const fiscalYear = firstFiscalYear + i;
        const yearStart = new Date(yearStarts[i]);
        const milliseconds = visitDate.getTime() - yearStart.getTime();
        const days=Math.ceil(milliseconds/1000/3600/24) //Rounds up to offset daylight savings
        const periodsBetween = Math.floor(days / 7 / 4); //Returns a number between 0 and 13 (for a year that has 5 weeks in P13)
        let fiscalPeriod;
        if (periodsBetween < 9) {
            fiscalPeriod = 'P0' + (periodsBetween + 1);
        } else {
            if (periodsBetween >= 12) {
                fiscalPeriod = 'P13';
            } else {
                fiscalPeriod = 'P' + (periodsBetween + 1);
            }
        }
        // For Fiscal Period custom field, 
        // return fiscalPeriod;
        //For Fiscal, 
        return fiscalYear + ' ' + fiscalPeriod;
    }
}
}
