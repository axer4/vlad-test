import { useState } from 'react'
import './NavList.css'
import Media from 'react-media';
function NavList () {
    const [isOpen, setMode] = useState<boolean>(false);
    const [isHidden,setHidden] = useState<boolean>(false)
    function openMenu () {
       setMode(!isOpen)
       setHidden(!isHidden)
    }
    function closeMenu () {
        setHidden(!isHidden)
        setMode(!isOpen)
    }
    const items : Array<string> = ['О комплексе','Район','Каталог квартир','Ипотека','Контакты']
return  <nav className="header-menu topnav">
     <ul className="header-list ">
        {items.map(item => {
            return <li className="header-list-item myLinks" ><a>{item}</a></li>
        })} </ul>  
         <Media query="(max-width: 767.5px)" render={() =>
          (<nav className="header-menu__mobile topnav">
    {isOpen && <ul className="header-list__mobile ">
        <li><button onClick={closeMenu} className='close-menu'>X</button></li>
        {items.map(item => {
            return <li className="header-list-item__mobile myLinks" ><a>{item}</a></li>
        })} </ul> }</nav> 
          )}
        />
        {/* <li className="header-list-item"><a href='/'>О комплексе</a></li>
        <li className="header-list-item"><a href='/'>Район</a></li>
        <li className="header-list-item"><a href='/'>Каталог квартир</a></li>
        <li className="header-list-item"><a href='/'>Ипотека</a></li>
        <li className="header-list-item"><a href='/'>Контакты</a></li> */}
    {!isHidden && <button className='icon' onClick = {openMenu} >
    <i className="fa fa-bars"></i>
  </button>}
</nav>
}
export default NavList;