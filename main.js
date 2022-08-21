let notes = document.querySelector('.notes');
let bfr = document.querySelector('.bfr');
const fragment = new DocumentFragment();
let n = 0;

function postNote() {
    n++;
    bfr.style.display = 'none';
    let note = document.querySelector('#note').value;
    let infoContent = '';

    var div = document.createElement('div');
    var noteHeader = document.createElement('div');
    var info = document.createElement('p');
    var dlt = document.createElement('p');
    var noteContent = document.createElement('p');

    div.classList.add('note');
    noteHeader.classList.add('note-header');
    info.classList.add('info');
    dlt.classList.add('delete');
    noteContent.classList.add('note-txt');

    var today = new Date();
    var date = today.getDate() +' ' + today.toLocaleString('default', { month: 'short' }) + ', '+today.getFullYear();
    tm = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    
    infoContent = date + ' | ' + tm;

    info.innerText = infoContent;
    noteContent.innerText = note;
    dlt.innerText = '×';

    noteHeader.append(info, dlt);
    div.append(noteHeader, noteContent);

    fragment.append(div);

    notes.append(fragment);

    dlt.addEventListener('click', ()=> {
        div.remove();
        n--;
        
        if (n == 0) {
            bfr.style.display = 'block';
        }
    })
}   

