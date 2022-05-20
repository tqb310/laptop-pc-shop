import React from 'react'

const statusMap = {
    'success': {
        backgroundColor: 'rgba(25, 135, 84, 0.2)',
        color: 'text-success'
    },
    'danger': {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        color: 'text-danger'
    },
    'successDeliveried': {
        backgroundColor: 'rgba(25, 135, 84)',
        color: 'text-white'
    },
    'dangerDeliveried': {
        backgroundColor: '#0f0f0f',
        color: 'text-white'
    }
}

function StatusPaper({ title, status, isRounded }) {
    const { backgroundColor, color } = statusMap[status];
    return (
        <div className={(isRounded ? 'rounded-pill ' : 'rounded-3 ') + color + ' p-1 px-3 text-success'} style={{ width: 'fit-content', backgroundColor: backgroundColor }}>{title}</div>
    )
}

export default StatusPaper