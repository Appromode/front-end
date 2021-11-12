import React from 'react';
import {
  ProgressBar,
} from 'react-bootstrap';

const now = 60;

const ProgressInstance = () => (
  <ProgressBar now={now} label={`${now}%`} />);

export default ProgressInstance;
