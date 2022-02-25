import './FooterNavList.css';
function FooterNavList () {
    const items : Array<string> = ['О комплексе','Район','Каталог квартир','Ипотека','Контакты']
    return <nav className="footer-menu">
    <ul className="footer-list">
        {items.map(item => {
            return <li className="footer-list-item"><a>{item}</a></li>
        })}
    </ul>
</nav>
}
export default FooterNavList;