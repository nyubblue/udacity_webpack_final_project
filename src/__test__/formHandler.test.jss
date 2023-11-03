import { text } from "body-parser";
import { handleSubmit } from "../client/js/formHandler";

/**
 * @jest-environment jsdom
 */

const inputArr = ["Hello"]

test('should return false if form input is empty', () => {
  // Create a mock event object
  const event = { preventDefault: jest.fn() };

  // Set up our document body
  document.body.innerHTML =
    `<div>
    <input type ="text" id="name" value="${inputArr[0]}"
    </div>`

  // Call the handleSubmit function with an empty form input
  const result = handleSubmit(event);

  // Expect the result to be false
  expect(result).toBe(false);
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