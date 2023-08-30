import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, remaining, currency} = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);

    const onChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget upper limit is £ 20000");
            return;
        }
        if(event.target.value < remaining) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setBudgetValue(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span style={{whiteSpace: 'nowrap'}}>Budget: { currency }
                                <input
                                    required='required'
                                    type='number'
                                    step='10'
                                    id='budget'
                                    value={budgetValue}
                                    style={{marginLeft: '2rem', size: 10}}
                                    onChange={onChange}>
                    </input>

            </span>
        </div>
    );
};
export default Budget;
