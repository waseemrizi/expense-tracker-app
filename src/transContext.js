import React, { createContext, useReducer } from 'react';
import Transactionreducer from './transReducer';



const initialTransactions = [
    { amount: 500, desc: "Pen", id: 0 },
    { amount: 100, desc: "Gloves", id: 1 },
    { amount: -300, desc: "Coffe", id: 2 },
    { amount: -400, desc: "stationary", id: 3}
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(Transactionreducer, initialTransactions);

    function AddTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
                id: transObj.id
            },
        })

    }

    // delete transaction added
    function deleteTransaction(transObj) {
        dispatch({
            type: "DELETE TRANSACTION",
            payload: {
                id: transObj.index
            }
        })
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

