import React from "react";

const Navbar = () => {
    return (
        <div style={{
          backgroundColor: 'white',
          position: 'relative',
          width: '100%',
          zIndex: '0',
          height: '90px',
          justifyContent: 'space-between',
          
          display: 'flex',
        }}>
          <div className='nav-bar'>
            <img src='https://iili.io/pY2kZl.png' alt='Brasão Barretos'
              style={{
                width: '100px',
                height: '75px',
                backgroundColor: 'blue',
                padding: '10px',
                borderRadius: '15px'
              }}></img>
          </div>
          <div className='nav-bar' style={{
            borderRadius: '0 0 100px 100px',
            borderTop: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0px 5px 5px 2px gray'
          }}>
            <p style={{
              fontWeight: 'bold',
              fontSize: '25px',
              fontFamily: 'verdana'
            }}>
              NOTÍCIAS
            </p>
          </div>
          <div className='nav-bar'>
            <ul style={{display: 'flex', gap: '5px'}}>
              <li style={{margin:0}}><button className='button-li'><a href='#'><p className="text-li">Matérias</p></a></button></li>
              <li style={{margin:0}}><button className='button-li'><a href='#'><p className="text-li">Sugestões</p></a></button></li>
            </ul>
          </div>
         
        </div>
        
    
      )
}

export default Navbar;
