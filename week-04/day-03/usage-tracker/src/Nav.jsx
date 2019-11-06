import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/component1">Component 1</NavLink>
      <NavLink to="/component2">Component 2</NavLink>
      <NavLink to="/component3">Component 3</NavLink>
    </nav>
  );
}
