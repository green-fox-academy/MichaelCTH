import React from 'react';
import { Card, Progress } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

export default () => {
  const { result } = useSelector((state) => state);

  let totalVote = 0;
  result.forEach((item) => (totalVote += item.votes));

  let pageResult = null;
  pageResult = result.map((item) => (
    <div key={item.id}>
      <p>{`${item.name}: ${item.votes} votes`}</p>
      <Progress percent={(item.votes / totalVote) * 100} indicating />
    </div>
  ));

  return (
    <Card centered style={{ width: '500px' }}>
      <Card.Content>
        <Card.Header>{result[0].question}</Card.Header>
        <hr />
        <Card.Description>{pageResult}</Card.Description>
      </Card.Content>
    </Card>
  );
};
