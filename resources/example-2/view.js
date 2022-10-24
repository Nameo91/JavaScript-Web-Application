class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagragh = document.createElement('p');
    newParagragh.innerText = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(newParagragh);
  }

  clearParagraphs() {
    const elementToRemove = document.querySelectorAll('p');
    elementToRemove.forEach(paragraph => {
      paragraph.remove();
    })
  }
}

module.exports = View;