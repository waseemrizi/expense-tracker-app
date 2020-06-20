import React, { createContext, useReducer } from 'react';
import Transactionreducer from './transReducer';



const initialTransactions = [
    { amount: 500, desc: "Pen" },
    { amount: 100, desc: "Gloves" },
    { amount: -300, desc: "Coffe" },
    { amount: -400, desc: "stationary" }
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(Transactionreducer, initialTransactions);

    function AddTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })

    }
    
    function deleteTransaction(id) {
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
        });
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            AddTransaction,
            deleteTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )
}

