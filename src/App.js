import { useState, useEffect } from 'react';

import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { auth, db } from './firebase';

import PonyTextBox from './components/chat/PonyTextBox';

import './App.css';
import { signInAnonymously } from '@firebase/auth';

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        signInAnonymously(auth)
            .then(() => {
                console.log('signed in anonymously');
            })
            .catch(error => {
                console.log(error);
            });

        const q = query(collection(db, 'messages'));
        onSnapshot(q, snapshot => {
            const messages = [];
            snapshot.forEach(doc => {
                messages.push(doc.data());
            });
            messages.sort((first, second) => first.time - second.time);
            console.log(messages);
            setMessages(messages);
        });
    }, []);
    return (
        <div className='App'>
            {auth.currentUser ? auth.currentUser.uid : 'loading...'}
            {messages
                ? messages.map(message => (
                      <div key={message.id}>{message.text}</div>
                  ))
                : 'loading....'}
            {auth.currentUser && <PonyTextBox user={auth.currentUser.uid} />}
        </div>
    );
}

export default App;
