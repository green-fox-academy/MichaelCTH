import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputMessage, sendMessage } from '../redux/actionCreater';

export default function InputMessage() {
  const inputMessage = useSelector((state) => state.inputMessage);
  const dispatch = useDispatch();

  function changeHandler(e) {
    dispatch(updateInputMessage(e.target.value));
  }
  return (
    <div className="input-box">
      <textarea value={inputMessage} onChange={changeHandler}></textarea>
      <input
        type="submit"
        value="Send"
        onClick={() => dispatch(sendMessage('Michael', inputMessage))}
      />
    </div>
  );
}
