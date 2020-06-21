import React, { useContext, useState } from 'react'
import { TransactionContext } from './transContext';



function Child() {

    let { transactions, AddTransaction, deleteTransaction } = useContext(TransactionContext);

    let [newdesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        //for 0 eentering
        if (Number(newAmount) === 0) {
            alert("enter correct amount like greatee than 0");
            return false;
        }
        AddTransaction({
            amount: Number(newAmount),
            desc: newdesc
        });

        setDesc('');
        setAmount(0);

    }

    //  adding function for 

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    // deletetion 




    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h4 className="text-center">Personal Use</h4>

            <h3 className="blnc">Your Blance<br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>Your Income<br /> ${getIncome()}</h3><hr />
                <h3>Your Expense<br /> ${getExpense()}</h3>
            </div>

            <h3 className="history">History</h3>
            <hr />

            <ul className="trnsaction-list ">
                {/* showing tranactions here */}

                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <button className="delete-btn" onClick={() => deleteTransaction(transObj.ind)}>X</button>

                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>)
                })}

            </ul>

            <h3 className="new">Add New Transaction</h3>

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" value={newdesc} onChange={(ev) => setDesc(ev.target.value)} required />
                </label>

                <br />

                <label>
                    Enter Amount <br />
                    <input type="number" value={newAmount} onChange={(ev) => setAmount(ev.target.value)} required />

                </label>

                <br />
                <br />

                <button className="btn" type="submit" value="ass transaction">Add Transaction</button>
                {/* <input type="submit" value="Add Transaction" /> */}

            </form>


        </div>
    )
}

export default Child
