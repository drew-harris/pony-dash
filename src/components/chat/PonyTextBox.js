import React from 'react';
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function PonyTextBox({ user }) {
    const [textInfo, setTextInfo] = useState([
        {
            text: '',
            user,
        },
    ]);

    async function handleClick(e) {
        if (textInfo.text.trim()) {
            setTextInfo({ user, text: '' });
            await addDoc(collection(db, 'messages'), {
                ...textInfo,
                time: Date.now(),
            });
        } else {
            alert('empty text');
            setTextInfo({ user, text: '' });
        }
    }

    return (
        <div>
            <textarea
                onChange={e => setTextInfo({ user, text: e.target.value })}
                value={textInfo.text}
                name='chat'
                id='ratatouille'
                cols='29'
                rows='10'
                placeholder='Send a Message'
            ></textarea>
            <button onClick={handleClick}>Click this damn button</button>
        </div>
    );
}

export default PonyTextBox;
