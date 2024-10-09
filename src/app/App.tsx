import React, { useState } from 'react';
import { Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { Button } from '../shared/ui/button';
import { Input } from '../shared/ui/input';
import { Checkbox } from '../shared/ui/checkbox';
import { EditingButton } from '../shared/ui/editing-button';
import { Popup } from '../shared/ui/popup';
import { Select } from '../shared/ui/select';

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
      <Checkbox />
      <EditingButton type='pen' onClick={() => console.log('Hello')} ></EditingButton>
      <EditingButton type='trash' onClick={() => console.log('Hello')} ></EditingButton>
      <Popup onSubmit={() => console.log('hi')}>TEXT</Popup>
      <Select/>
    </>
  )
}

export default App;