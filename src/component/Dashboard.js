import React from 'react'

const Dashboard = (props) => {
    const completed = props.data.lanes.filter(row => row.id === 'COMPLETED')
    const Backlogs = props.data.lanes.filter(row => row.id === 'Backlogs')
    const wip = props.data.lanes.filter(row => row.id === 'WIP')
    const archive = props.data.lanes.filter(row => row.id === 'ARCHIVED')

    return(
        <div>
            <h1>My Dashboard</h1>
            <div className="container">
                <div className="card">
                    <h4>Completed Tasks</h4>
                    <p>{completed[0].cards.length}</p>
                </div>
                <div className="card">
                    <h4>No. of Backlog Tasks</h4>
                    <p>{Backlogs[0].cards.length}</p>
                </div>
                <div className="card">
                    <h4>Work in Progress Tasks</h4>
                    <p>{wip[0].cards.length}</p>
                </div>
                <div className="card">
                    <h4>Archived Tasks</h4>
                    <p>{archive[0].cards.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;