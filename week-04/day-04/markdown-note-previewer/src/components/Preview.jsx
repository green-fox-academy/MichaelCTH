import React, { useEffect } from 'react';
import marked from 'marked';

export default function Preview({ text }) {
  useEffect(() => {
    document.querySelector('.preview-result').innerHTML = marked(text);
  });

  return (
    <section>
      <h1>Preview</h1>
      <div className="preview-result" />
    </section>
  );
}
