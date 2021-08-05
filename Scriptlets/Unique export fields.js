let maxChar = 67;
let hdrs = [];
let inputs = $('#sortable2 input');
for (let i = 0; i < inputs.length; i++) {
    let input = $(inputs[i]);
    let nm = `${input.attr('questionalias') ? input.attr('questionalias') : ''}:
    ${input.attr('questiontext')}`;
    nm = nm.replace(/\s+/g, ' ');
    if (nm.length > maxChar) nm = nm.substring(0, maxChar);
    hdrs.push(nm);
    let cnt = hdrs.filter(hdr => hdr == nm).length;
    let digits = cnt.toString().length
    if (cnt > 1) {
        if (nm.length > maxChar - digits) {
            nm = nm.substring(0, maxChar - digits) + cnt;
        }
    }
    input.val(nm);
}