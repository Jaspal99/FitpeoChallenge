import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Dashboard.css'
import Header from '../../components/Header/Header';
import Highlight from '../../components/Highlight/Highlight';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import PieGraph from '../../components/Graph/Piegraph/Piegraph';
import Table from '../../components/Table/Table';
const Dashboard = ()=>{
    return(
        <div className='dashboardContainer'>
            <div className='headerContainer'>
                <Header />
            </div>
            <div className='highlightContainer'>
                <Highlight />
                <Highlight />
                <Highlight />
                <Highlight />
            </div>
            <div className='graphContainer'>
                <Bargraph />
                <PieGraph />
            </div>
            <div className='tableContainer'>
                <Table />
            </div>
        </div>
    )
}

export default Dashboard;