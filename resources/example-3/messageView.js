class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    
    const inputEl = document.querySelector('#message-input');
    const message = inputEl.value;

    const messageEl = document.createElement('div');
    messageEl.innerText = message;
    messageEl.id = 'message';

    document.querySelector('#main-container').append(messageEl);
  }

  hideMessage() {
    console.log('Message disappeared!');

    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;