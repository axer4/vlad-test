import FooterItem from './FooterItem';
import './FooterNavList.css';
function FooterNavList () {
    const FooterNavListItems : Array<string> = ['О комплексе','Район','Каталог квартир','Ипотека','Контакты']
    return <nav className="footer-menu">
    <ul className="footer-list">
        {FooterNavListItems.map((item:string,index:number) => <FooterItem item={item} key={`${item}-${index}`}/>  )}
    </ul>
</nav>
}
export default FooterNavList;