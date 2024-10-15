import React, {FC} from 'react';
import './index.scss';
import { Pencil, Trash2 } from 'lucide-react';

interface EditingButtonProps {
    type: string;
    onClick: () => void;
}

export const EditingButton: FC<EditingButtonProps> = ({type, onClick}) => {
    return (
        <button className={`editing-button editing-button_type_${type}`} onClick={onClick}>
            {type === 'pen' ? <Pencil size={18} strokeWidth={1} /> : <Trash2 size={18} strokeWidth={1} />}
        </button>
    )
}
