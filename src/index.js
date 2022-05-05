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