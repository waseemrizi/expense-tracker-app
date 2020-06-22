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
            desc: newdesc,
            id: transactions.length
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
    function handleDelete(ind) {
        console.log(ind)
        deleteTransaction({
            index: ind
        })
    }



    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h4 className="text-center">Develope by waseem</h4>

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
                        <button className="delete-btn" onClick={() => { handleDelete(transObj.id) }}>Delete me</button>

                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>)
                })}

            </ul>

            <h3 className="new">Add New Transaction</h3>

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description:   <br />
                    <input type="text"  placeholder=  "آپ انگریزی اور اردو میں لکھ سکتے ہیں" value={newdesc} onChange={(ev) => setDesc(ev.target.value)} required />
                </label>

                <br />

                <label>
                Enter Amount: &emsp;  Enter negative &ensp; ( - ) &ensp; sign for expense  <br />
                    <input type="number"  value={newAmount} onChange={(ev) => setAmount(ev.target.value)} required />

                </label>

                <br />
                <br />

                <button className="btn" type="submit" value="ass transaction">Add Transaction</button>
                {/* <input type="submit" value="Add Transaction" /> */}

            </form>
            <br />


        </div>
    )
}

export default Child
