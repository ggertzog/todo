import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '../shared/ui/button';
import { Input } from '../shared/ui/input';

const App = () => {

  const[value, setValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Button variant='theme' onClick={() => console.log('Hello')}>
        <Search size={22} />
      </Button>
      <Button variant='add' onClick={() => console.log('Hello')}>
        <Plus size={24} />
      </Button>
      <Button variant='apply' onClick={() => console.log('Hello')}>
        APPLY
      </Button>
      <Button variant='cancel' onClick={() => console.log('Hello')}>
        CANCEL
      </Button>
      <Input placeholder='Search note...' value={value} onChange={handleChangeInput}>
        <Search size={21} />
      </Input>
    </>
  )
}

export default App;