import React from 'react';
import './index.scss';

export const Select = () => {
  return (
    <select className='select' id="status-filter">
        <option value="all" selected>ALL</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
    </select>
  )
}
