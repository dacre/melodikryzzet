import React from 'react';
import PropTypes from 'prop-types';

import { CELL_WIDTH } from '../config';

const Line = ({ position, locations, direction }) => {
  let [x1, x2, y1, y2] = [0, 0, CELL_WIDTH / 2, CELL_WIDTH / 2];
  const lineLength = 11;
  const strokeWidth = 4;
  if (direction === 'across') {
    x1 = position.x + (locations[0] * CELL_WIDTH);
    x2 = x1 + lineLength;
    y2 = y1;
  } else {
    x1 = (position.x * (CELL_WIDTH + 1)) + (CELL_WIDTH / 2) + 1;
    x2 = x1;
    y1 = (position.y - 1) + (locations[0] * CELL_WIDTH);
    y2 = y1 + lineLength;
  }
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke="black" />
  );
};

Line.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  locations: PropTypes.arrayOf(PropTypes.number).isRequired,
  direction: PropTypes.string.isRequired,
};

export default Line;
