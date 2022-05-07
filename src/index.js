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
        key.innerHTML = `<p class="up-row">${keysObj[0][i]}</p><br><p class="down-row active">${keysObj[1][i]}</p>`;
    };      
};

for(let i = 0; i < 15; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[1].appendChild(key);
    if(i > 0 && i < 14){
        if(i > 10){
            key.innerHTML = `<p class="up-row">${keysObj[3][i]}</p><br><p class="down-row active">${keysObj[2][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case">${keysObj[2][i]}</p>`;
        };        
    }; 
};

for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[2].appendChild(key); 
    if(i > 0 && i < 12){
        if(i > 9){
            key.innerHTML = `<p class="up-row">${keysObj[5][i]}</p><br><p class="down-row active">${keysObj[4][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case">${keysObj[4][i]}</p>`;
        };        
    };
};

for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[3].appendChild(key);
    if(i > 0 && i < 11){
        if(i > 7){
            key.innerHTML = `<p class="up-row">${keysObj[7][i]}</p><br><p class="down-row active">${keysObj[6][i]}</p>`;
        } else {
            key.innerHTML = `<p class="key-case">${keysObj[6][i]}</p>`;
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




keysArr[13].className = 'key backspace';
keysArr[13].innerHTML = 'Backspace';
keysArr[14].className = 'key tab';
keysArr[14].innerHTML = 'Tab';
keysArr[28].className = 'key del';
keysArr[28].innerHTML = 'Delet';
keysArr[29].className = 'key caps-lock';
const capsLock = keysArr[29];
keysArr[29].innerHTML = 'Caps Lock';
keysArr[41].className = 'key enter';
keysArr[41].innerHTML = 'Enter';
keysArr[42].className = 'key shift';
keysArr[42].innerHTML = 'Shift';
keysArr[53].className = 'key arrow arrow-up';
keysArr[53].innerHTML = '&uarr;';
keysArr[54].className = 'key shift';
keysArr[54].innerHTML = 'Shift';
keysArr[55].className = 'key ctrl';
keysArr[55].innerHTML = 'Ctrl';
keysArr[56].className = 'key win';
keysArr[56].innerHTML = 'Win';
keysArr[57].className = 'key alt';
keysArr[57].innerHTML = 'Alt';
keysArr[58].className = 'key space';
keysArr[59].className = 'key alt';
keysArr[59].innerHTML = 'Alt';
keysArr[60].className = 'key arrow arrow-left';
keysArr[60].innerHTML = '&larr;';
keysArr[61].className = 'key arrow arrow-down';
keysArr[61].innerHTML = '&darr;';
keysArr[62].className = 'key arrow arrow-right';
keysArr[62].innerHTML = '&rarr;';
keysArr[63].className = 'key ctrl';
keysArr[63].innerHTML = 'Ctrl';

function switchCase(){
    keyCase.forEach((el) =>{
        el.classList.toggle('upper-case');
       });
}

capsLock.addEventListener('click', switchCase);
document.addEventListener('keyup', (event) => {
    if(event.getModifierState('CapsLock')){
       switchCase();
    } else {
        switchCase();
    }
})
