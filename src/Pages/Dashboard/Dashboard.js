import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Dashboard.css'
import Header from '../../components/Header/Header';
import Highlight from '../../components/Highlight/Highlight';
import Bargraph from '../../components/Graph/Bargraph/Bargraph';
import PieGraph from '../../components/Graph/Piegraph/Piegraph';
import TableContainer from '../../components/Table/TableContainer';
import { faArrowDown, faArrowDown19, faBagShopping, faCoins, faDollar, faDollarSign, faFile, faFilterCircleDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Dashboard = ()=>{

    const highlightArray = [
        {
            id:1,
            element:
                <FontAwesomeIcon
            color='green'
            style={{
                border:'3px solid green',
                padding:'7px',
                margin:'5px',
                borderRadius:'50%',
                height:'25px',
                width:'25px'
            }}
            icon={faDollar} />,
            amount:"198k",
            heading:"Earning",
            desc:"this month",
            className:"imageContainer",
            paraClass:'inc',
            perc:'37.8% ',bgcolor:'#e0ffef'
        },
        {
            id:2,
            element:
                <FontAwesomeIcon
            color='purple'
            style={{
                padding:'7px',
                margin:'5px',
                borderRadius:'50%',
                height:'40px',
                width:'40px'
            }}
            icon={faFile} />,
            amount:"2.4k",
            heading:"Orders",
            desc:" this month",
            className:"imageContainer",
            paraClass:'dec',
            perc:'37.8% ',bgcolor:'#e7daff'
        }
        ,{
            id:3,
            element:
                <FontAwesomeIcon
            color='blue'
            style={{
                padding:'7px',
                margin:'5px',
                borderRadius:'50%',
                height:'40px',
                width:'40px'
            }}
            icon={faCoins} />,
            amount:"2.4k",
            heading:"Balance",
            desc:" this month",
            className:"imageContainer",
            paraClass:'dec',
            perc:'37.8% ',bgcolor:'#cbf2fe'
        }
        ,{
            id:4,
            element:
                <FontAwesomeIcon
            color='red'
            style={{
                padding:'7px',
                margin:'5px',
                borderRadius:'50%',
                height:'40px',
                width:'40px'
            }}
            icon={faBagShopping} />,
            amount:"89k",
            heading:"Total Sales",
            desc:" this week",
            className:"imageContainer",
            paraClass:'inc',
            perc:'37.8% ',bgcolor:'#fec8ea'
        }
    ]

    return(
        <div className='dashboardContainer'>
            <div className='headerContainer'>
                <Header />
            </div>
            <div className='highlightContainer'>
                {
                    highlightArray?.map((item)=>{
                        return (
                            <Highlight item={item} />
                        )
                    })
                }
            </div>
            <div className='graphContainer'>
                <Bargraph />
                <PieGraph />
            </div>
            <div className='tableContainer'>
                <TableContainer />
            </div>
        </div>
    )
}

export default Dashboard;