import React from 'react';
import {smallData} from "../smallData";
import {bigData} from "../bigData";

export default props => {

    return (
        <div className='container my-3'>
            <div className='mb-2'>Выберите желаемое количество элементов, выводимое в таблице</div>
            <button className="btn btn-success" onClick={() => props.onModeSelect(smallData)}>32 элемента</button>
            <button className="btn btn-primary mx-2" onClick={() => props.onModeSelect(bigData)}>1000 элементов</button>
        </div>
    )
}