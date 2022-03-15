export type NavItemProps = {
    item: string,
}
function NavItem(props: NavItemProps) {
    const { item } = props;
    return (
        <li className="header-list-item myLinks">
            <a>{item}</a>
        </li>
    )
}
export default NavItem;