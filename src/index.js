import '../assets/style.css';
import "../assets/style.scss";


 const header = document.createElement('header');
 const main = document.createElement('main');
 const footer = document.createElement('footer');
 const wrapper = document.createElement('div');
 const headerWrapper = document.createElement('div');
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


for(let i = 0; i < 15; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[0].appendChild(key);    
}
for(let i = 0; i < 15; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[1].appendChild(key);    
}
for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[2].appendChild(key);    
}
for(let i = 0; i < 13; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[3].appendChild(key);    
}
for(let i = 0; i < 9; i++){
    const key = document.createElement('div');
    key.className = 'key';
    keyboardRowArr[4].appendChild(key);    
}


const keysArr = document.querySelectorAll('.key');
keysArr[14].className = 'key backspace';
keysArr[14].innerHTML = 'Backspace';
keysArr[15].className = 'key tab';
keysArr[15].innerHTML = 'Tab';
keysArr[29].className = 'key del';
keysArr[29].innerHTML = 'Delet';
keysArr[30].className = 'key caps-lock';
keysArr[30].innerHTML = 'Caps Lock';
keysArr[42].className = 'key enter';
keysArr[42].innerHTML = 'Enter';
keysArr[43].className = 'key shift';
keysArr[43].innerHTML = 'Shift';
keysArr[54].className = 'key arrow arrow-up';
keysArr[54].innerHTML = '&uarr;';
keysArr[55].className = 'key shift';
keysArr[55].innerHTML = 'Shift';
keysArr[56].className = 'key ctrl';
keysArr[56].innerHTML = 'Ctrl';
keysArr[57].className = 'key win';
keysArr[57].innerHTML = 'Win';
keysArr[58].className = 'key alt';
keysArr[58].innerHTML = 'Alt';
keysArr[59].className = 'key space';
keysArr[60].className = 'key alt';
keysArr[60].innerHTML = 'Alt';
keysArr[61].className = 'key arrow arrow-left';
keysArr[61].innerHTML = '&larr;';
keysArr[62].className = 'key arrow arrow-down';
keysArr[62].innerHTML = '&darr;';
keysArr[63].className = 'key arrow arrow-right';
keysArr[63].innerHTML = '&rarr;';
keysArr[64].className = 'key ctrl';
keysArr[64].innerHTML = 'Ctrl';