import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputMessage, sendMessage, loadHisChatMessage } from '../redux/actionCreater';

export default function InputMessage() {
  const inputMessage = useSelector((state) => state.inputMessage);
  const dispatch = useDispatch();

  function changeHandler(e) {
    dispatch(updateInputMessage(e.target.value));
  }
  return (
    <div className="input-box">
      <textarea value={inputMessage} onChange={changeHandler}></textarea>
      <div className="input-box-right">
        <input
          type="submit"
          value="Send"
          onClick={() => dispatch(sendMessage('Michael', inputMessage))}
        />
        <input type="submit" value="Update" onClick={() => dispatch(loadHisChatMessage())} />
      </div>
    </div>
  );
}
