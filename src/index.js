import '../assets/style.css';
import "../assets/style.scss";

const engKeysObj = [
    {"0":"~", "1":"!", "2":"@", "3":"#", "4":"$", "5":"%", "6":"^", "7":"&", "8":"*", "9":"(", "10":")", "11":"_", "12":"+"},
    {"0":"`", "1":"1", "2":"2", "3":"3", "4":"4", "5":"5", "6":"6", "7":"7", "8":"8", "9":"9", "10":"0", "11":"-", "12":"="},
    {"1":"q", "2":"w", "3":"e", "4":"r", "5":"t", "6":"y", "7":"u", "8":"i", "9":"o", "10":"p", "11":"[", "12":"]", "13":"\\"},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"", "10":"", "11":"{", "12":"}", "13":"|"},
    {"1":"a", "2":"s", "3":"d", "4":"f", "5":"g", "6":"h", "7":"j", "8":"k", "9":"l", "10":";", "11":"'"},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"", "10":":", "11":"\""},
    {"1":"z", "2":"x", "3":"c", "4":"v", "5":"b", "6":"n", "7":"m", "8":",", "9":".", "10":"/"},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"<", "9":">", "10":"?"}
];
const ruKeysObj = [
    {"0":"", "1":"!", "2":"\"", "3":"№", "4":";", "5":"%", "6":":", "7":"?", "8":"*", "9":"(", "10":")", "11":"_", "12":"+"},
    {"0":"ё", "1":"1", "2":"2", "3":"3", "4":"4", "5":"5", "6":"6", "7":"7", "8":"8", "9":"9", "10":"0", "11":"-", "12":"="},
    {"1":"й", "2":"ц", "3":"у", "4":"к", "5":"е", "6":"н", "7":"г", "8":"ш", "9":"щ", "10":"з", "11":"х", "12":"ъ", "13":"\\"},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"", "10":"", "11":"", "12":"", "13":"|"},
    {"1":"ф", "2":"ы", "3":"в", "4":"а", "5":"п", "6":"р", "7":"о", "8":"л", "9":"д", "10":"ж", "11":"э"},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"", "10":"", "11":""},
    {"1":"я", "2":"ч", "3":"с", "4":"м", "5":"и", "6":"т", "7":"ь", "8":"б", "9":"ю", "10":"."},
    {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"", "10":","}
];
 const header = document.createElement('header');
 const main = document.createElement('main');
 const footer = document.createElement('footer');
 const wrapper = document.createElement('div');
 const headerWrapper = document.createElement('div');
 
 let activeKeys = [];
 let keysObj = engKeysObj; 

 headerWrapper.className = 'wrapper header-wrapper';
 wrapper.className = 'wrapper';
 document.body.append(header);
 document.body.append(main);
 document.body.append(footer);
 headerWrapper.innerHTML = '<h1>Virtual Keyboard</h1>';
 header.append(headerWrapper);
 main.append(wrapper);
//  footer.append(wrapper);

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
wrapper.append(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.appendChild(keyboard);
 
 
//Fill the keybord field

for (let i = 0; i < 5; i++){  
    const keyboardRow = document.createElement('div'); 
    keyboardRow.className = 'keyboard-row'; 
    keyboard.appendChild(keyboardRow);
}

const keyboardRowArr = document.querySelectorAll('.keyboard-row');

for(let i = 0; i < 14; i++){
    const key = document.createElement('div');
    key.className = `key`;      
    keyboardRowArr[0].appendChild(key); 
    if(i < 13){
        key.innerHTML = `<p class="up-row">${keysObj[0][i]}</p><br><p class="down-row active-key">${keysObj[1][i]}</p>`;
    };      
};

for(let i = 0; i < 15; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[1].appendChild(key);
    if(i > 0 && i < 14){
        if(i > 10){
            key.innerHTML = `<p class="up-row">${keysObj[3][i]}</p><br><p class="down-row active-key">${keysObj[2][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case active-key">${keysObj[2][i]}</p>`;
        };        
    }; 
};

for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[2].appendChild(key); 
    if(i > 0 && i < 12){
        if(i > 9){
            key.innerHTML = `<p class="up-row">${keysObj[5][i]}</p><br><p class="down-row active-key">${keysObj[4][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case active-key">${keysObj[4][i]}</p>`;
        };        
    };
};

for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[3].appendChild(key);
    if(i > 0 && i < 11){
        if(i > 7){
            key.innerHTML = `<p class="up-row">${keysObj[7][i]}</p><br><p class="down-row active-key">${keysObj[6][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case active-key">${keysObj[6][i]}</p>`;
        }; 
    };
};  

for(let i = 0; i < 9; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[4].appendChild(key);    
};
 

const keysArr = document.querySelectorAll('.key');
const keyCase = document.querySelectorAll('.key-case');
activeKeys = document.querySelectorAll('.active-key');


keysArr[13].className = 'key backspace';
keysArr[13].innerHTML = `<p class='speckey' id='Backspace'>Backspace</p>`;
keysArr[14].className = 'key tab';
keysArr[14].innerHTML = `<p class='speckey' id='Tab'>Tab</p>`;
keysArr[28].className = 'key del';
keysArr[28].innerHTML = `<p class='speckey' id='Delete'>Del</p>`;
keysArr[29].className = 'key caps-lock';
const capsLock = keysArr[29];
keysArr[29].innerHTML = `<p class='speckey' id='CapsLock'>Caps Lock</p>`;
keysArr[41].className = 'key enter';
keysArr[41].innerHTML = `<p class='speckey' id='Enter'>Enter</p>`;
keysArr[42].className = 'key shift shift-left';
keysArr[42].innerHTML = `<p class='speckey' id='ShiftLeft'>Shift</p>`;
keysArr[53].className = 'key arrow arrow-up';
keysArr[53].innerHTML = `<p class='speckey' id='ArrowUp'>&uarr;</p>`;
keysArr[54].className = 'key shift shift-right';
keysArr[54].innerHTML = `<p class='speckey' id='ShiftRight'>Shift</p>`;
keysArr[55].className = 'key ctrl';
keysArr[55].innerHTML = `<p class='speckey' id='ControlLeft'>Ctrl</p>`;
keysArr[56].className = 'key win';
keysArr[56].innerHTML = `<p class='speckey' id='MetaLeft'>Win</p>`;
keysArr[57].className = 'key alt';
keysArr[57].innerHTML = `<p class='speckey' id='AltLeft'>Alt</p>`;
keysArr[58].className = 'key space';
keysArr[58].innerHTML = `<p class='speckey' id='Space'></p>`;
keysArr[59].className = 'key alt';
keysArr[59].innerHTML = `<p class='speckey' id='AltRight'>Alt</p>`;
keysArr[60].className = 'key arrow arrow-left';
keysArr[60].innerHTML = `<p class='speckey' id='ArrowLeft'>&larr;</p>`;
keysArr[61].className = 'key arrow arrow-down';
keysArr[61].innerHTML = `<p class='speckey' id='ArrowDown'>&darr;</p>`;
keysArr[62].className = 'key arrow arrow-right';
keysArr[62].innerHTML = `<p class='speckey' id='ArrowRight'>&rarr;</p>`;
keysArr[63].className = 'key ctrl';
keysArr[63].innerHTML = `<p class='speckey' id='ControlRight'>Ctrl</p>`;

//Change keybord lang

let langIsEng = true;

window.addEventListener('keydown', function (event) {
    if (event.shiftKey && event.ctrlKey) { 
        if(langIsEng){
            keysObj = ruKeysObj;
            langIsEng = false;
        } else {
            keysObj = engKeysObj;
            langIsEng = true;
        }      
                         
       }
       reloadKeyboardFilds();
      
});

// Switching upper and lower case

function switchCase(){         
    keyCase.forEach((el) =>{
        
        if(el.classList.contains('upper-case')){
            el.classList.remove('upper-case');
            el.textContent = el.textContent.toLowerCase();                       
        } else {
            el.textContent = el.textContent.toUpperCase();            
            el.classList.add('upper-case');             
        }        
    });            
};

capsLock.addEventListener('click', switchCase);
document.addEventListener('keydown', (event) => {    
    if(event.key === 'CapsLock'){        
       switchCase();              
    }
});

// Shift key perfomance

const leftShift = document.querySelector('.shift-left');
const rightShift = document.querySelector('.shift-right');
const upRowKeys = document.querySelectorAll('.up-row');
const downRowKeys = document.querySelectorAll('.down-row');
let down = false;

function rowSwiching(){
    upRowKeys.forEach((el) => {
        el.classList.toggle('active-key');
    })
    downRowKeys.forEach((el) => {
        el.classList.toggle('active-key');
    })
    switchCase();
    activeKeys = document.querySelectorAll('.active-key');  
}

leftShift.addEventListener('click', rowSwiching);
rightShift.addEventListener('click', rowSwiching);

document.addEventListener('keydown', (event) => {
    if(down) return;
    down = true;
    if(event.key === 'Shift'){
       rowSwiching();
    }
})


document.addEventListener('keyup', (event) => {
    if(event.key === 'Shift'){
       rowSwiching();
    }
    down = false;
})

// Backspace and Delet keys event

const backspaceKey = document.querySelector('.backspace');
const deletKey = document.querySelector('.del');

function getCaret(el) {
    if (el.selectionStart) {
        return el.selectionStart;
    } else if (document.selection) {
        el.focus();

        let r = document.selection.createRange();
        if (r == null) {
            return 0;
        }

        let re = el.createTextRange(),
            rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);

        return rc.text.length;
    }
    return 0;
}

function resetCursor(txtElement, currentPos) { 
    if (txtElement.setSelectionRange) { 
        txtElement.focus(); 
        txtElement.setSelectionRange(currentPos, currentPos); 
    } else if (txtElement.createTextRange) { 
        let range = txtElement.createTextRange();  
        range.moveStart('character', currentPos); 
        range.select(); 
    } 
}

function backspaceClick() {
    let currentPos = getCaret(textArea);    
    let text = textArea.value;
    let backSpace = text.substr(0, currentPos-1) + text.substr(currentPos, text.length);

    textArea.value = backSpace;
    
    resetCursor(textArea, currentPos-1);
}

function deletClick() {
    let currentPos = getCaret(textArea);    
    let text = textArea.value;
    let deletChar = text.substr(0, currentPos) + text.substr(currentPos+1, text.length);

    textArea.value = deletChar;
    
    resetCursor(textArea, currentPos);
}

backspaceKey.addEventListener('click', backspaceClick);
deletKey.addEventListener('click', deletClick);

// Space attrib

const spaceKey = document.querySelector('.space');

spaceKey.addEventListener('click', () => {    
    textArea.value += " ";
    textArea.focus();
});

// Enter key click add

const enterKey = document.querySelector('.enter');

enterKey.addEventListener('click', () => {
    textArea.value += `\n`;
    textArea.focus();
});

//Tab key click add

const tabKey = document.querySelector('.tab');

// function tabClick() {
//     let currentPos = getCaret(textArea);    
//     let text = textArea.value;
//     let tabSpace = text.substr(0, currentPos) + text.substr(currentPos, text.length);

//     textArea.value = tabSpace;
    
//     resetCursor(textArea, currentPos);
// }

tabKey.addEventListener('click', () => {
    textArea.value += `\t`;
    textArea.focus();
});


//Arrow key events on click


const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');
arrowUp.addEventListener('click', () =>{
    textArea.value += `\u{2B06}`;
    textArea.focus();
})
arrowLeft.addEventListener('click', () =>{
    textArea.value += `\u{2B05}`;
    textArea.focus();
})
arrowDown.addEventListener('click', () =>{
    textArea.value += `\u{2B07}`;
    textArea.focus();
})
arrowRight.addEventListener('click', () =>{
    textArea.value += `\u{27A1}`;
    textArea.focus();
})

// Keys lighter on click

const specKeys = document.querySelectorAll('.speckey');

document.onkeydown = function (event) {
    specKeys.forEach((el) => {
        if(el.id === event.code){
            el.closest('.key').style.backgroundColor = 'rgb(107, 62, 62)';
        }
    })

activeKeys.forEach((el) => {
    if(el.textContent === event.key){
        el.closest('.key').style.backgroundColor = 'rgb(107, 62, 62)';
    }        
})
}

document.onkeyup = function (event) {
    specKeys.forEach((el) => {
        if(el.id === event.code){
            el.closest('.key').style.backgroundColor = 'rgb(41, 40, 40)';
        }
    })
    activeKeys.forEach((el) => {
        if(el.textContent === event.key){
            el.closest('.key').style.backgroundColor = 'rgb(82, 82, 82)';
        }        
    })
}  

// Print from VirtualKeyboard

function printFromVirtKeyboard(){   
    activeKeys.forEach((button, index) => {
        button.closest('.key').addEventListener('click', () => {
        textArea.value += `${activeKeys[index].textContent}`;
        textArea.focus(); 
        });
    });
          
};

printFromVirtKeyboard();

function reloadKeyboardFilds(){      
    for(let i = 0; i < 13; i++){        
            keyboardRowArr[0].children[i].children[0].textContent = `${keysObj[0][i]}`;             
            keyboardRowArr[0].children[i].children[2].textContent = `${keysObj[1][i]}`;             
    };
    
    for(let i = 1; i < 14; i++){                 
            if(i > 10){
                keyboardRowArr[1].children[i].children[0].textContent = `${keysObj[3][i]}`;
                keyboardRowArr[1].children[i].children[2].textContent = `${keysObj[2][i]}`;
            } else {
                keyboardRowArr[1].children[i].children[0].textContent = `${keysObj[2][i]}`;
            };         
    };
    
    for(let i = 1; i < 12; i++){                 
            if(i > 9){
                keyboardRowArr[2].children[i].children[0].textContent = `${keysObj[5][i]}`;
                keyboardRowArr[2].children[i].children[2].textContent = `${keysObj[4][i]}`;
            } else {
                keyboardRowArr[2].children[i].children[0].textContent = `${keysObj[4][i]}`;
            };       
    };
    
    for(let i = 1; i < 11; i++){       
            if(i > 7){
                keyboardRowArr[3].children[i].children[0].textContent = `${keysObj[7][i]}`;
                keyboardRowArr[3].children[i].children[2].textContent = `${keysObj[6][i]}`;
            } else {
                keyboardRowArr[3].children[i].children[0].textContent = `${keysObj[6][i]}`;
            };         
    };   
    
    
};
