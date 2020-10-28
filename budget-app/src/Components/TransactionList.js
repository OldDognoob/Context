import React from 'react'

export const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ul class="list">
               <li className="minus">
                    Cash <span>-€150</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}
