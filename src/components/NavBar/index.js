import React from "react";

const Navbar = () => {
    return (
        <div style={{
          backgroundColor: 'blue',
          position: 'relative',
          width: '100%',
          zIndex: '0',
          height: '90px',
          justifyContent: 'space-between',
          
          display: 'flex',
        }}>
          <div className='nav-bar'>
            <img src='https://iili.io/pY2kZl.png' alt='Logo Professor Adilson'
              style={{
                width: '100px',
                height: '75px',
                backgroundColor: 'blue',
                paddingRight: '550px',
                borderRadius: '15px',
              }}></img>
          </div>
          {/* <div className='nav-bar' style={{
            borderRadius: '0 0 100px 100px',
            borderTop: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0px 5px 5px 2px gray'
          }}>

          </div> */}
          <div className='nav-bar'>
            <ul style={{display: 'flex', gap: '50px'}}>
            <li style={{margin:0}}><button className='button-li'><a href='#'><p className="text-li" style={{fontSize:'18px'}}>Home</p></a></button></li>
              <li style={{margin:0}}><button className='button-li'><a href='#'><p className="text-li" style={{fontSize:'18px'}}>Matérias</p></a></button></li>
              <li style={{margin:0}}><button className='button-li'><a href='#'><p className="text-li" style={{fontSize:'18px'}}>Sugestões</p></a></button></li>
            </ul>
          </div>
         
        </div>
        
    
      )
}

export default Navbar;
