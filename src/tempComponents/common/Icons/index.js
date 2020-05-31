import React from 'react';

const upArrow = (
  <svg viewBox='0 0 16 16'>
    <polygon points='8,0 14,6 10,6 10,16 6,16 6,6 2,6' />
  </svg>
);

const downArrow = (
  <svg viewBox='0 0 16 16'>
    <polygon points='6,0 10,0 10,10 14,10 8,16 2,10 6,10' />
  </svg>
);

const threeDots = (
  <svg width='16' height='24' viewBox='0 0 16 24'>
    <circle cx='8' cy='6' r='2' />
    <circle cx='8' cy='12' r='2' />
    <circle cx='8' cy='18' r='2' />
  </svg>
);

const doneIcon = (
  <svg viewBox='0 0 16 16'>
    <circle cx='8' cy='8' r='7' fill='none' strokeWidth='1' />
    <polyline points='3,7 7,11 13,5' fill='none' strokeWidth='2' />
  </svg>
);

const inProgressIcon = (
  <svg viewBox='0 0 16 16'>
    <circle cx='8' cy='8' r='7' fill='none' strokeWidth='1' />
    <circle cx='4' cy='8' r='1' />
    <circle cx='8' cy='8' r='1' />
    <circle cx='12' cy='8' r='1' />
  </svg>
);

const pendingIcon = (
  <svg viewBox='0 0 24 24'>
    <circle cx='12' cy='12' r='11' fill='none' strokeWidth='1' />
    <polyline points='12,3 12,12 20,12' fill='none' strokeWidth='2' />
  </svg>
);

export {
  upArrow,
  downArrow,
  threeDots,
  doneIcon,
  inProgressIcon,
  pendingIcon,
};