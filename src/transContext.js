import React, { createContext, useReducer } from 'react';
import Transactionreducer from './transReducer';



const initialTransactions = [
    
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

