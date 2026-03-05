import "../App.css";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__links'> 
        <li><NavLink className={'sidebar__link'} to="/"> Home </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/products"> Products </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/products/create"> CreateProduct </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/notfound"> NotFound </NavLink></li>
      </ul>
    </div>
  )
}
export default Sidebar