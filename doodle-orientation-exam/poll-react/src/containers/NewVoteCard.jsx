import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';
import { setModal } from '../redux/actionCreater';
import axios from 'axios';

const NewVoteCard = () => {
  const { modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const openModal = () => dispatch(setModal(true));
  const closeModal = () => dispatch(setModal(false));

  const [question, setQuestion] = useState('');

  // const [options, setOptions] = useState(['', '']);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const submitHandler = () => {
    if (!question || !option1 || !option2) {
      return;
    }

    axios({
      method: 'post',
      url: `http://127.0.0.1:4000/poll`,
      data: {
        question,
        options: [option1, option2],
      },
    })
      .then((res) => {
        setQuestion('');
        setOption1('');
        setOption2('');
        console.log(res.data);
        closeModal();
      })
      .catch(console.log);
  };

  return (
    <Modal trigger={<Button onClick={openModal}>Create New</Button>} centered={false} open={modal}>
      <Modal.Header>Create your poll!!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form size="large">
            <Form.Input
              fluid
              icon="question"
              iconPosition="left"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Form.Input
              icon="check square"
              iconPosition="left"
              placeholder="Option"
              type="text"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
            <Form.Input
              icon="check square"
              iconPosition="left"
              placeholder="Option"
              type="text"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
            {/* <Button onClick={() => setOptions([...options, ''])}>Add option</Button> */}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={closeModal}>
          Cancel <Icon name="right close" />
        </Button>
        <Button positive onClick={submitHandler}>
          Create <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NewVoteCard;
