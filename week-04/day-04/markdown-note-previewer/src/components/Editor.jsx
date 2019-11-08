import React from 'react';

export default function Editor({ setText }) {
  return (
    <section>
      <h1>Editor</h1>
      <textarea onChange={(e) => setText(e.target.value)} />
    </section>
  );
}
