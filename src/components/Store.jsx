import React, { useState } from 'react';
import products from '../data/products.json';
import ListView from './ListView';
import CardView from './CardView';
import IconSwitch from './IconSwitch';

const Store = () => {
  const [view, setView] = useState('module');

  const onSwitch = () => {
    setView(view === 'module' ? 'list' : 'module');
  };

  return (
    <div>
      <IconSwitch icon={view === 'module' ? 'view_list' : 'view_module'} onSwitch={onSwitch} />
      {view === 'module' ? <CardView cards={products} /> : <ListView items={products} />}
    </div>
  );
};

export default Store;
