/**
 * Created by deepcoder on 24/01/17.
 */
import React from 'react';

const formObj = {
  "Questions": [
    {
      "question": "President of USA",
      "options": [
        "Bush",
        "Obama",
        "Trumph",
        "Modi"
      ]
    },
    {
      "question": "National animal of India",
      "options": [
        "Lion",
        "Tiger",
        "Cat",
        "Rat"
      ]
    },
    {
      "question": "National bird of India",
      "options": [
        "Pigeon",
        "Peecock",
        "Hen",
        "Parrot"
      ]
    }
  ]
}
const optionNumbers = ['A', 'B', 'C', 'D'];
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }


  renderOptions = (options) => {
    return (
      options.map((option, index) => (
        <div className="option-box" key={Math.random()}>
          <labeL>{`${optionNumbers[index]})`}</labeL>
          <input key={option} type="checkbox" value={option}/>
          <label>{option}</label>
        </div>
      ))
    )
  }
  renderQuestions = (Questions) => {
    return (
      <div>
        {Questions.map((Question, index) => (
          <div key={index} ref={index} id={`A${index.toString()}`}>
            <p>{`${index}.)`} {Question.question}</p>
            {this.renderOptions(Question.options)}
          </div>
        ))}
      </div>)
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    let finalAnswer = [];
    let optionsSelected = [];
    let showAlert = false;
    for (let i = 0; i < formObj.Questions.length; i++) {
      var container = document.querySelector(`#A${i}`);
      const questionSelector = container.querySelector('p');
      const question = questionSelector.innerText;
      const optionSelector = container.querySelectorAll('div input[type="checkbox"]:checked');
      if (optionSelector.length !== 0) {
        optionSelector.forEach((node) => {
          optionsSelected.push(node.value);
        });
      }
      else {
        showAlert = true;
      }
      finalAnswer[i] = ({ question, options: optionsSelected });
      optionsSelected = [];
    }
    if (showAlert) {
      alert('Select All the Answers'); // Ask User to Select All Options
    }
    else {
      let finalAnsObj = { Questions: finalAnswer };
      console.log(finalAnsObj); // finalAnsObj is the final Answer .Submit if all OPtion are selected and
    }

  }

  render() {
    const { Questions } = formObj;//ES6 Destructuring
    return (
      <div className="form-container">
        <p>Multiple Choice Question.All Question are mandatory</p>
        <form ref="form" onSubmit={(event) => this.onSubmitForm(event)}>
          {this.renderQuestions(Questions)}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
