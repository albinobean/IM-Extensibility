function main
    (
        // workbook: ExcelScript.Workbook,
        csvString: string,
        skipRows: number = 0,
        chunkSize: number = 0
    ): Array<Array<Array<string | number> | string | number>> {
    let rowArray: Array<string | number> = [];
    let chunk: Array<Array<string | number>> = [];
    let arr: Array<Array<Array<string | number> | string | number>> = [];
    let rows: Array<string> = csvString.split('\n');
    // console.log('Rows: ' + rows.length);
    for (let i = skipRows; i < rows.length; i++) {
        let rw: Array<string | number> = parseCSVRow(rows[i]);
        if (rw && rw.join('').match(/[a-z0-9]/gi)) { //Skip empty rows
            if (chunkSize == 0) { //No chunks
                arr.push(rw);
            } else {
                chunk.push(rw);
                if (chunk.length >= chunkSize || i == rows.length - 1) {
                    arr.push(chunk);
                    chunk = [];
                }
            }
        }
    }
    return arr;
}
function parseCSVRow(rw: string): Array<string | number> {
    let cols = rw.split(',');
    if (!cols) return;
    // console.log('Cells: ' + cols.length);
    let cells: Array<string | number> = [];
    let cell: string | number;
    let beginWithQuote = /^"(""|[^"|\\\"])+/; //Begins with an odd number of quotes
    let endsWithQuote = /(""|[^"|\\\"])+"$/; //Ends with an odd number of quotes
    for (let i: number = 0; i < cols.length; i++) {
        cell = cols[i];
        // console.log('Cell: ' + cell);
        // console.log('Begins with quote: ' + beginWithQuote.test(cell));
        // console.log('Ends with quote: ' + endsWithQuote.test(cell));
        //Begins with quote but doesn't end in a quote
        if (beginWithQuote.test(cell)) {
            cell = cell.replace(/^\"*/, '');
            if (endsWithQuote.test(cell)) {
                cell = cell.replace(/\"*$/, '');
            } else {
                for (let j = i + 1; j < cols.length; j++) {
                    cell += ',' + cols[j];
                    // console.log('Append: ' + cols[j]);
                    // console.log('Ends with quote: ' + endsWithQuote.test(cols[j]));
                    if (endsWithQuote.test(cell)) {
                        i = j; //Skip the cells that were joined together
                        j = cols.length; //exit the inner for loop
                        cell = cell.replace(/\"*$/, '');
                    }
                }
            }
        }

        if (isNumeric(cell)) { //
            cells.push(parseFloat(cell))
        } else {
            cells.push(cell);
        }

    }
    return cells;
}
function isNumeric(str: string): boolean {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(parseFloat(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}