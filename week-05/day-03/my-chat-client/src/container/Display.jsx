import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Display() {
  const message = useSelector((state) => state.message).reverse();

  function dateFormatter(timestamp) {
    let rst = ' ';
    rst += timestamp.substring(0, 10);
    rst += ' ';
    rst += timestamp.substring(11, 19);
    return rst;
  }

  function updateScroll() {
    let element = document.querySelector('.chat-window');
    element.scrollTop = element.scrollHeight;
  }

  useEffect(() => {
    updateScroll();
  });

  return (
    <div className="chat-window">
      {message.map((item) => {
        return (
          <section key={item.id}>
            {item.user}
            <span>{dateFormatter(item.createdAt)}</span>
            <br />
            <p>{item.text}</p>
          </section>
        );
      })}
    </div>
  );
}
