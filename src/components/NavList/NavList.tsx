import { useState } from 'react'
import './NavList.css'
import Media from 'react-media';
import NavItem from './NavItem';
import NavItemMobile from './NavItemMobile';
function NavList() {
    const [isOpen, setMode] = useState<boolean>(false);
    const [isHidden, setHidden] = useState<boolean>(false)
    function openMenu() {
        setMode(!isOpen)
        setHidden(!isHidden)
    }
    function closeMenu() {
        setHidden(!isHidden)
        setMode(!isOpen)
    }
    const NavListItems: Array<string> = ['О комплексе', 'Район', 'Каталог квартир', 'Ипотека', 'Контакты']
    return (
    <nav className="header-menu topnav">
        <ul className="header-list ">
            {NavListItems.map((item:string,index:number) => <NavItem item = {item} key={`${item}-${index}`}/>)} 
            </ul>
        <Media query="(max-width: 767.5px)" 
        render={() => (<nav className="header-menu__mobile topnav">
            {isOpen && <ul className="header-list__mobile ">
                <li>
                    <button onClick={closeMenu} className='close-menu'>X</button>
                    </li>
                {NavListItems.map((item:string,index:number) => <NavItemMobile item ={item} key={`${item}-${index}`}/>)} </ul>}</nav>
        )}
        />
        {!isHidden && <button className='icon' onClick={openMenu} >
            <i className="fa fa-bars"></i>
        </button>}
    </nav>)
}
export default NavList;