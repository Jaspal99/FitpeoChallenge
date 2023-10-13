import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Highlight.css'
import { faArrowDown, faArrowUp, faCircleDollarToSlot, faCoffee, faDollar } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faDollar} />
export default function Highlight({item}){
    return (
        <div className="highlightInnerContainer">
            <div className={`${item?.className}`} style={{
                backgroundColor:item?.bgcolor
            }}>{item?.element}</div>
            <div class="container">
    <div class="item">
        <div className='heading'>{item?.heading}</div>
        <div className='amount'>{item?.amount}</div>
        <div className='subContainer'>
            <div className={item?.paraClass} >
                <FontAwesomeIcon icon={item?.paraClass === 'inc' ? faArrowUp : faArrowDown} />
            {item?.perc + " "} 
                </div>
             {" "+ item?.desc}
        </div>
    </div>
</div>
        </div>
    )
}