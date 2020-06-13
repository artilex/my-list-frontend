import React from 'react';

const threeDots = (
  <svg width='16' height='24' viewBox='0 0 16 24'>
    <circle cx='8' cy='6' r='2' />
    <circle cx='8' cy='12' r='2' />
    <circle cx='8' cy='18' r='2' />
  </svg>
);

const upArrow = (
  <svg viewBox='0 0 32 32'>
    <polygon points='16,2 28,14 20,14 20,30 12,30 12,14 4,14' />
  </svg>
);

const downArrow = (
  <svg viewBox='0 0 32 32'>
    <polygon points='12,2 20,2 20,18 28,18 16,30 4,18 12,18' />
  </svg>
);

const doneIcon = (
  <svg viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='14' fill='none' strokeWidth='2' />
    <polyline points='6,14 14,22 26,10' fill='none' strokeWidth='4' />
  </svg>
);

const inProgressIcon = (
  <svg viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='14' fill='none' strokeWidth='2' />
    <circle cx='8' cy='16' r='2' />
    <circle cx='16' cy='16' r='2' />
    <circle cx='24' cy='16' r='2' />
  </svg>
);

const pendingIcon = (
  <svg viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='14' fill='none' strokeWidth='2' />
    <polyline points='16,5 16,17 26,17' fill='none' strokeWidth='2' />
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