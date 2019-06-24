function download(filename, elId, mimeType) {
    var elHtml = tinymce.get(elId).getBody().innerHTML
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

function setContent() {
    tinymce.get('mytextarea').getBody().innerHTML = '<p>This is my new content!</p>';
}

function runScript() {
    var ed = tinyMCE.get('mytextarea'); // get editor instance
    var range = ed.selection.getRng().startOffset; // get range
    alert(range);
}