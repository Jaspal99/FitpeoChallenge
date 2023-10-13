import './Bargraph.css'

export default function Bargraph(){
    return (
        <div className="barMainDiv">
            <div className="headerDiv">
                <h2>Overview</h2>
                <div>Quarterly</div>
            </div>
            <div>Monthly Earning</div>
            <div className="bargraphDiv"></div>
        </div>
    )
}