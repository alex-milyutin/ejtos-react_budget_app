import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import {DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import './Currency.css';

const Currency = () => {
    const {dispatch, currency, currencyList, currencyListOrder} = useContext(AppContext);
    const [currencyValue, setCurrencyValue] = useState(currency);
    const onChange = (eventKey, event) => {
        setCurrencyValue(eventKey);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey,
        });
    };

    return <div className='alert alert-primary'>
        <DropdownButton
            className="my-dd-currency"
            value={currencyValue}
            title={'Currency (' + currencyValue + ' ' + currencyList[currencyValue] + ')'}
            onSelect={onChange}
        >
            {currencyListOrder.map((v) => {
                return (<DropdownItem
                    key={v}
                    eventKey={v}
                    selected={v===currencyValue}
                >
                    {v} {currencyList[v]}
                </DropdownItem>)
            })}
        </DropdownButton>
    </div>;
};
export default Currency;
