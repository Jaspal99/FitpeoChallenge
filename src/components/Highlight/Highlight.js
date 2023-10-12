import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Highlight'
import { faCircleDollarToSlot, faCoffee, faDollar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faDollar} />
export default function Highlight(){
    return (
        <div className="highlightInnerContainer">
            <div className="imageContainer">
  {element}

            </div>
            <div>
                <p>Earning</p>
                <h3>$198k</h3>
                <p>^37.8% this month</p>
            </div>
        </div>
    )
}