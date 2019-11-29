import React from 'react';
import { useSelector } from 'react-redux';
import VoteCard from './VoteCard';
import ResultCard from '../components/ResultCard';
import { Container, Grid } from 'semantic-ui-react';
export default (props) => {
  const { id } = props;
  const { showResult } = useSelector((state) => state);
  const myStyle = {
    marginTop: '100px',
  };
  let body = <VoteCard id={id} />;
  if (showResult) {
    body = <ResultCard />;
  }
  return (
    <Container style={myStyle}>
      <Grid>
        <Grid.Column>{body}</Grid.Column>
      </Grid>
    </Container>
  );
};
