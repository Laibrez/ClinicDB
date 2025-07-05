import React, { useState } from 'react';

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <button onClick={() => setOpen(!open)}>Chat with Support</button>
      {open && (
        <div style={{ border: '1px solid #ccc', padding: 10, background: '#fff' }}>
          <p>Hi! How can we help you?</p>
          <input type="text" placeholder="Type your message..." />
        </div>
      )}
    </div>
  );
}
