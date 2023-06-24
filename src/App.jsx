import React, { useEffect, useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Button } from 'react-bootstrap'; 
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SkillsInput from './inputs/skillsInput.jsx';
import exportToWord from './document/document.jsx';
import Test from './document/test.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import GptInput from './gptInput/gptInput';





function App() {

  const API_KEY = "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";
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
  // handleSend is an asynchronous function that takes user input (message) as a parameter
  // const handleSend = async (message) => {
  //   console.log("hi")
  //   message = `
  //   give me one sample for the following in same format:
  //   {
  //     Name:'',
  //     PhoneNumber:''
  //   }
  //   `
  //   // Define a new message object to represent the user's message
  //   const newMessage = {
  //     message: message,
  //     sender: "user",
  //     direction: "outgoing"
  //   };
  //   // Concatenate the new message to the current messages array
  //   const newMessages = [...messages, newMessage];
  //   // Update the messages state variable with the new messages array
  //   setMessages(newMessages);
  //   // Set typing state to true, indicating that the bot is 'typing' a response
  //   setTyping(true);
  //   // Process the new messages through the OpenAI API
  //   await processMessageToChatGpt(newMessages);
  // };

  // // processMessageToChatGpt is an asynchronous function that takes chat messages array as input
  // async function processMessageToChatGpt(chatMessages) {
  
  //   // Convert chat messages to the format required by OpenAI's API
  //   let apiMessages = chatMessages.map((messageObject) => {
  //     let role = "";
  //     // If the sender is the user, set the role to 'assistant' for OpenAI API
  //     // Otherwise, set the role to 'user'
  //     if (messageObject.sender === "user") {
  //       role = "assistant";
  //     } else {
  //       role = "user";
  //     }
  //     return {role: role, content: messageObject.message};
  //   });

  //   // Define a system message for the chatbot
  //   const systemMessage = {
  //     role: "system",
  //     content: "chatGpt"
  //   }
    
  //   // Construct the request body for the OpenAI API call
  //   const apiRequestBody = {
  //     "model": "gpt-3.5-turbo",
  //     "messages": [systemMessage, ...apiMessages]
  //   };

  //   // Make an API call to OpenAI
  //   await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(apiRequestBody)
  //   }).then((response) => {
  //     // Parse the JSON response
  //     return response.json();
  //   }).then((data) => {
  //     // Log the data to the console
  //     console.log(data);
  //     // Extract the content of the message from chatGpt
  //     console.log(data.choices[0].message.content);
  //     // Update the messages state variable with chatGpt's message
  //     console.log(chatMessages);
  //     setMessages([
  //       ...chatMessages, {
  //         message: data.choices[0].message.content,
  //         sender: "ChatGpt",
  //       }
  //     ]
  //     );
  //     // Log the chatMessages array for debugging
  //     // Set typing state to false, indicating that the bot has finished 'typing'


  //     setTyping(false);
  //   })
  // };
  

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
      <SkillsInput skillsInput = {skillsInput} />
      </li>
      <li className="list-group-item ">
      <Button className='primary'>click</Button>
      </li>
      </ul>
      </div>
      <GptInput API_KEY = {API_KEY} messages = {messages} setMessages = {setMessages}/>
      {/* <div style = {{position: 'relative', height: '800px', width: '700px'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            scrollBehavior='smooth'
            typingIndicator = {typing ? <TypingIndicator content = "chatGpt is typing"/>:null}
            >
              {messages.map((message, i) => {
                return <Message key = {i} model = {message} /> 

              })}
            </MessageList>      
            <MessageInput placeholder = "Type message here" onSend = {handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div> */}
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