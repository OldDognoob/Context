import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="minus">
            {transaction.text} <span>-€150</span>
            <button className="delete-btn">x</button>
          </li>
    )
}
