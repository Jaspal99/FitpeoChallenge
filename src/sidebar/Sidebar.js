import * as React from 'react';
import './Sidebar.css'
export default function TemporaryDrawer() {
  
  const screenlist = ["Dashboar","Product","Customers","Income","Promote","Help"]
  return (
    <div className='sidebarContainer'>
      <div>
      <div className='sidebarHeaderDiv'>Dashboard</div>
      <div>
        {
          screenlist?.map((item)=>{
            return (
              <div>{item}</div>
            )
          })
        }
      </div>
      </div>
      <div>
        <div>Evano</div>
        <div>Project Manager</div>
      </div>
    </div>
  );
}
