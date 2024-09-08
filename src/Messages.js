// Messages.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    db.collection('messages').add({
      message: newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNewMessage('');
  };

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg.message}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Messages;
