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
]
 const header = document.createElement('header');
 const main = document.createElement('main');
 const footer = document.createElement('footer');
 const wrapper = document.createElement('div');
 const headerWrapper = document.createElement('div');
 const keysObj = engKeysObj; 

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
const activeKeys = document.querySelectorAll('.active-key');



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
keysArr[42].className = 'key shift';
keysArr[42].innerHTML = `<p class='speckey' id='ShiftLeft'>Shift</p>`;
keysArr[53].className = 'key arrow arrow-up';
keysArr[53].innerHTML = `<p class='speckey' id='ArrowUp'>&uarr;</p>`;
keysArr[54].className = 'key shift';
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
}


capsLock.addEventListener('click', switchCase);
document.addEventListener('keydown', (event) => {    
    if(event.key === 'CapsLock'){        
       switchCase();              
    }
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

function printFromVirtKeyboard(){   
        activeKeys.forEach((button, index) => {
            button.closest('.key').addEventListener('click', () => {
            textArea.value += `${activeKeys[index].textContent}`;
        })
    });       
};
printFromVirtKeyboard();

