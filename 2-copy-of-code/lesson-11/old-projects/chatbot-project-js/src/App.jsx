import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import RobotProfileImage from './assets/robot.png';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4'
  }]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  // Note: in React, <title>{chatMessages.length} Messages</title>
  // counts as putting 2 pieces of text in <title> like this:
  // <title>{chatMessages.length} {'Messages'}</title>
  //
  // The <title> element may not support this. That's why we
  // save it in a variable first and insert it as 1 text.
  const title = `${chatMessages.length} Messages`;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />

      <div className="app-container">
        <ChatMessages
          chatMessages={chatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App
