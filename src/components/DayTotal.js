import React from 'react'
import AdminSmNav from './AdminSmNav'

export default function DayTotal(props) {
    return (
        <tr key={props.id}>
            <td colspan={2} >
                <img className="rounded-circle me-2" width="50" height="50" src={props.image} />
            </td>
            <td colspan={1}>{props.name}</td>
            <td colspan={1}>{props.count}</td>
            <td colspan={1}>{props.price}</td>
        </tr>
    )
}

