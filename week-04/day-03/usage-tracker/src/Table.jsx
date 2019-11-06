import React from 'react';

export default function Table(props) {
  const { log } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {log.map((item) => (
          <tr key={item.name + item.time}>
            <td>{item.name}</td>
            <td>{`${item.time}s`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
