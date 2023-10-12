import { Input } from '@mui/material'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return (
        <div className="headerInnerContainer">
            <h2 className='headerNameDiv'>Hello Shahrukh👋🏻,</h2>
            <div className='inputDiv'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input
                 placeholder='Search' />
            </div>
        </div>
    )
}