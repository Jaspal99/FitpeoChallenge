import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Highlight.css'
import { faCircleDollarToSlot, faCoffee, faDollar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faDollar} />
export default function Highlight(){
    return (
        <div className="highlightInnerContainer">
            <div className="imageContainer">
  {element}

            </div>
            <div className='infoContainer'>
                <p>Earning</p>
                <h1>$198k</h1>
                <p>^37.8% this month</p>
            </div>
        </div>
    )
}