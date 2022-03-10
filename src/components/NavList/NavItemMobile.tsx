import { NavItemProps } from "./NavItem";

function NavItemMobile (props:NavItemProps) {
    const {item} = props;
    return <li className="header-list-item__mobile myLinks" ><a>{item}</a></li>
}
export default NavItemMobile;