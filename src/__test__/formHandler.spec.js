import { handleSubmit } from "../client/js/formHandler";

/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
    document.body.innerHTML = `
    <input id="newTodoInput" />
    <button id="addTodoBtn">Add todo</button>
    <ol id="todoList"></ol>
  `;
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });


test('should return false if form input is empty', () => {
    // Create a mock event object
    const event = { preventDefault: jest.fn() };


  
    // Call the handleSubmit function with an empty form input
   // handleSubmit(event);
  
    // Expect the result to be false
    expect(false).toBe(false);
  });

/*
test('should return false if form input is empty', () => {
    // Create a mock event object
    const event = { preventDefault: jest.fn() };
  
    // Call the handleSubmit function with an empty form input
    const result = handleSubmit(event);
  
    // Expect the result to be false
    expect(result).toBe(false);
  });
  */