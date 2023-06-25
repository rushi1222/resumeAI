import React, { useEffect, useState } from 'react'

import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'

const GptInput = (props)=> {

    const [typing, setTyping] = useState(false);
    const handleSend = async (message) => {
        console.log("hi")
        message = `
        give me one sample for the following in same format:
        {
          Name:'',
          PhoneNumber:''
        }
        `
     // Define a new message object to represent the user's message
     const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing"
      };
      // Concatenate the new message to the current messages array
      const newMessages = [...props.messages, newMessage];
      // Update the messages state variable with the new messages array
      props.setMessages(newMessages);
      // Set typing state to true, indicating that the bot is 'typing' a response
      setTyping(true);
      // Process the new messages through the OpenAI API
      await processMessageToChatGpt(newMessages);
    };
  
    // processMessageToChatGpt is an asynchronous function that takes chat messages array as input
    async function processMessageToChatGpt(chatMessages) {
    
      // Convert chat messages to the format required by OpenAI's API
      let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        // If the sender is the user, set the role to 'assistant' for OpenAI API
        // Otherwise, set the role to 'user'
        if (messageObject.sender === "user") {
          role = "assistant";
        } else {
          role = "user";
        }
        return {role: role, content: messageObject.message};
      });
  
      // Define a system message for the chatbot
      const systemMessage = {
        role: "system",
        content: "chatGpt"
      }
      
      // Construct the request body for the OpenAI API call
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [systemMessage, ...apiMessages]
      };
  
      // Make an API call to OpenAI
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${props.API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody)
      }).then((response) => {
        // Parse the JSON response
        return response.json();
      }).then((data) => {
        // Log the data to the console
        console.log(data);
        // Extract the content of the message from chatGpt
        console.log(data.choices[0].message.content);
        // Update the messages state variable with chatGpt's message
        console.log(chatMessages);
        props.setMessages([
          ...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGpt",
          }
        ]
        );
        // Log the chatMessages array for debugging
        // Set typing state to false, indicating that the bot has finished 'typing'
  
  
        setTyping(false);
      })
    };
    
  return (
              <div style = {{position: 'relative', height: '800px', width: '700px'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            scrollBehavior='smooth'
            typingIndicator = {typing ? <TypingIndicator content = "chatGpt is typing"/>:null}
            >
              {props.messages.map((message, i) => {
                return <Message key = {i} model = {message} /> 

              })}
            </MessageList>      
            <MessageInput placeholder = "Type message here" onSend = {handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
  )
}

export default GptInput