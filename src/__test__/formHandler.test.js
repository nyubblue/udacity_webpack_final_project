import { postData } from "../client/js/connectUtil";
import { handleSubmit } from "../client/js/formHandler";

/**
 * @jest-environment jsdom
 */
const data = {
  case1: {
    in: "Hello",
    out:
    {
      agreement: 'AGREEMENT',
      confidence: '100',
      irony: 'NONIRONIC',
      model: 'general_en',
      score_tag: 'NONE',
      sentence_list: [
        {
          agreement: 'AGREEMENT',
          bop: 'y',
          confidence: '100',
          endp: '1',
          inip: '0',
          score_tag: 'NONE',
          segment_list: [Array],
          sentimented_concept_list: [],
          sentimented_entity_list: [],
          text: 'ss'
        }
      ],
      sentimented_concept_list: [],
      sentimented_entity_list: [],
      status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '94' },
      subjectivity: 'OBJECTIVE'
    }
  },
  case2: {
    in: "$$$",
    out:
      { status: { code: '212', msg: 'no content to analyze', credits: '0' } }
  },
  case3: {
    in: "42323",
    out:
    {
      agreement: 'AGREEMENT',
      confidence: '100',
      irony: 'NONIRONIC',
      model: 'general_en',
      score_tag: 'NONE',
      sentence_list: [
        {
          agreement: 'AGREEMENT',
          bop: 'y',
          confidence: '100',
          endp: '4',
          inip: '0',
          score_tag: 'NONE',
          segment_list: [Array],
          sentimented_concept_list: [],
          sentimented_entity_list: [],
          text: '42323'
        }
      ],
      sentimented_concept_list: [],
      sentimented_entity_list: [],
      status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '94' },
      subjectivity: 'OBJECTIVE'
    }

  }
}
const fakeDataFnc = async (a) => {

  return await (data.case1.out);
}
jest.mock('../client/js/connectUtil');

test('should return false if form input is empty', () => {
  // Create a mock event object
  const event = { preventDefault: jest.fn() };

  // Set up our document body
  document.body.innerHTML =
    `<div>
    <input type ="text" id="name" value="${data.case1.in}" />
    <div id="results">Init</div>
    </div>`

  //const postData = require('../client/js/connectUtil');

  postData.mockImplementation(fakeDataFnc);
  postData('1', '2');
  // Call the handleSubmit function with an empty form input
  handleSubmit(event);
  const agreeDiv = document.getElementById('results');
  console.log("debugger " + agreeDiv);
  expect(agreeDiv.id).toBe('AGREEMENT')
  // Expect the result to be false
  //expect(result).toBe(false);
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