import React from 'react';
import './index.scss';
import { Input } from '../../shared/ui/input';
import { Select } from '../../shared/ui/select';
import { Button } from '../../shared/ui/button';
import { Moon, Search } from 'lucide-react';

export const ControlPanel = () => {
  return (
    <div className='control-panel'>
        <Input placeholder='Search note...' value='' onChange={() => console.log('Hi')}>
            <Search size={21} />
        </Input>
        <Select />
        <Button variant='theme' onClick={() => console.log('Hi')}>
            <Moon size={22} />
        </Button>
    </div>
  )
}
