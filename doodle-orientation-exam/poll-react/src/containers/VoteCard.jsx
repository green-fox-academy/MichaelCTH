import React, { useState, useEffect } from 'react';
import { Card, Button, Grid, Checkbox, Form, Label } from 'semantic-ui-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setResult } from '../redux/actionCreater';

export default (props) => {
  const { id } = props;
  console.log(id);
  const [vote, setVote] = useState({});
  const [warn, setWarn] = useState(false);
  const [selection, setSelection] = useState(null);
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!selection) {
      setWarn(true);
      return;
    }
    setWarn(false);
    const target = vote.options.filter((item) => item.name === selection)[0];
    axios
      .post(`http://127.0.0.1:4000/vote/${target.id}`)
      .then((resp) => {
        dispatch(setResult(resp.data));
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (!vote.question)
      axios
        .get(`http://127.0.0.1:4000/poll/${id}`)
        .then((resp) => {
          setVote(resp.data);
        })
        .catch(console.log);
  });

  let options = null;
  if (vote.options) {
    options = vote.options.map((item) => (
      <Form.Field key={item.id}>
        <Checkbox
          radio
          label={item.name}
          name="checkboxRadioGroup"
          value={item.name}
          checked={selection === item.name}
          onChange={() => setSelection(item.name)}
        />
      </Form.Field>
    ));
  }

  let warnMsg = null;
  if (warn) {
    warnMsg = (
      <Label basic color="red" pointing="above">
        Please select a option
      </Label>
    );
  }

  return (
    <Card centered style={{ width: '500px' }}>
      <Card.Content>
        <Card.Header>{vote.question}</Card.Header>
        <hr />
        <Card.Description>
          <Form>{options}</Form>
          {warnMsg}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid columns={2}>
          <Grid.Column width={12}>
            Selected value: <b>{selection}</b>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button positive icon="checkmark" content="vote" onClick={submitHandler} />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};
