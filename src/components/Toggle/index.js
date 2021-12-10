import './Toggle.css';
import Sun from '../../media/sun.png';
import Moon from '../../media/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: 'TOGGLE'})
    };

    return (
        <div className='t'>
            <img src={Sun} alt='sun' className='t_icon'/>
            <img src={Moon} alt='moon' className='t_icon'/>
            <div className='t_button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}} ></div>
        </div>
    )
};

export default Toggle;
