type FooterProps = {
    item: string,
}
function FooterItem(props: FooterProps) {
    const { item } = props
    return (
        <li className="footer-list-item">
            <a>{item}</a>
        </li>
    )
}
export default FooterItem;