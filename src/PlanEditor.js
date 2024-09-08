// PlanEditor.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function PlanEditor() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('businessPlan').doc('plan').onSnapshot(doc => {
      setContent(doc.data()?.text || '');
    });

    return () => unsubscribe();
  }, []);

  const updatePlan = (e) => {
    setContent(e.target.value);
    db.collection('businessPlan').doc('plan').set({ text: e.target.value });
  };

  return (
    <div>
      <h2>Business Plan</h2>
      <textarea
        value={content}
        onChange={updatePlan}
        rows="10"
        cols="50"
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default PlanEditor;
