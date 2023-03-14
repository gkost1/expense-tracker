import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul class="list">
              {transactions.map(transaction => (<Transaction key={transaction.key} transaction={transaction} />))}

            </ul>
        </>
    )
}
