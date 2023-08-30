import React, {useContext} from 'react';
import {TiDelete, TiPlus, TiMinus, TiPlusOutline} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';
import {Button} from "react-bootstrap";

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><Button
                onClick={event => increaseAllocation(props.name)}
                className="rounded-circle"
                style={{background: '#3bbe3b'}}
            >
                <TiPlus/>
            </Button></td>
            <td><Button
                onClick={event => decreaseAllocation(props.name)}
                className="rounded-circle"
                style={{background: 'red'}}
            >
                <TiMinus/>
            </Button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
