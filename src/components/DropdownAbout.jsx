import "./DropdownAbout.scss"
import dataAbout from "../dataAbout.json";
import Dropdown from './Dropdown';


function DropdownAbout() {
    const dropdownsData = dataAbout

  return (
        <div className='mainAbout'>
            {dropdownsData.map((dropdown)=>
        <Dropdown
          title=  {dropdown.title}
          description=  {dropdown.description}
        />
      )}
        </div>
  )
}

export default DropdownAbout