import { useEffect, useState } from 'react';
import './BMenustyles.css';
import P from 'prop-types';

export function ButtonMenu({onClick = () => {}, ref}) {
  const [vvalue, setVvalue] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setVvalue((value)=>value+1);
  }
  const handleClick = () => {
    setChecked(!checked);
    onClick();
  }

  useEffect(()=>{
    console.log(ref);
  }, [vvalue, ref]);

  return (
    <div className='marginalizado' >
      <div className="containerButton"  >
        <input ref={ref} checked={checked} onChange={handleChange} onClick={handleClick} type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden"/>
        <label htmlFor="checkbox1">
            <div className="hamburger hamburger1">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
            </div>
        </label>
      </div>
    </div>

  )
}

ButtonMenu.propTypes = {
onClick: P.func,
}


