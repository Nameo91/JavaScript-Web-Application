/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ParagraphView = require('./paragraphView');

describe('Paragraph view', () => {
  it('add new paragraph', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new ParagraphView();

    //Act
    view.display('This is a new paragraph!');
    
    //Assert
    const paragraphEl = document.querySelector('p');
    expect(paragraphEl.innerText).toBe('This is a new paragraph!');
  })
})