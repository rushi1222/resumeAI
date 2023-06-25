import React, { useEffect, useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Button } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SkillsInput from './inputs/skillsInput.jsx';
import exportToWord from './document/document.jsx';
import Test from './document/test.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import GptInput from './gptInput/gptInput';
function App() {


  // const [typing, setTyping] = useState(false);
  const [skillsInput, setSkillsInput] = useState(["react.js","HTML"]);
  // messages keeps track of all messages exchanged in the chat
  const [messages, setMessages] = useState([
    {
      message: 'Hello i am chatgpt input your job description',
      sender: "chatGpt",
      direction: "incoming"
    }
  ]);
  const [endingLine, setEndingLine] = useState([])


	const addSkill = skill => {
		skill.id = skillsInput.length + 1
		setSkillsInput([ ...skillsInput, skill ])
	}
const printData = () => {
  const inputString =endingLine.message
  var jsonString = inputString.substring(
    inputString.indexOf("{"),
    inputString.lastIndexOf("}") + 1
);

// Convert the JSON-like string to a JavaScript object
try {
    var contactInfo = eval('(' + jsonString + ')');
    console.log("Name: " + contactInfo.Name);
    console.log("PhoneNumber: " + contactInfo.PhoneNumber);
} catch (error) {
    console.error("Error parsing the string", error);
}}

useEffect(() => {

  setEndingLine(messages[messages.length-1])
  console.log("endingline:",endingLine.message);

  
}, [messages, endingLine]);

////////////////////////////////////////////////
  return (
    <div className= "App">
      <div>
      <ul className="list-group">
      <li className="list-group-item ">
      <SkillsInput addSkill = {addSkill} />
      </li>
      <li className="list-group-item ">
      <Button className='primary'>click</Button>
      </li>
      </ul>
      </div>
      <GptInput API_KEY = {API_KEY} messages = {messages} setMessages = {setMessages}/>
      <div>
         {/* Trigger the export when the button is clicked */} 
          <button onClick={exportToWord}>Export to Word</button> 
      </div>
      <div>
        <button onClick = {printData}>Print Data</button>
      </div>
      <div>
      <FontAwesomeIcon icon={faArrowDown} />
      
    </div>
    </div>
  )
}

export default App