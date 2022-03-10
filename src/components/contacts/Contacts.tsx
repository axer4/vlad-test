import './Contacts.css';
import youtube from '../../images/youtube.svg';
import vk from '../../images/vk.svg';
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg';
function Contacts() {
    return (
        <div className='contacts'>
            <ul className='contacts-list'>
                <li className='contacts-list-item'>Адрес: Наб. реки Фонтанки 10-15</li>
                <li className='contacts-list-item'>Телефон: 8 (812) 123-45-67</li>
                <li className='contacts-list-item'>Отдел продаж: 10:00 - 20:00</li>
                <li className='contacts-list-item'>E-mail: vip@housevip.ru</li>
                <li className='contacts-list-item'>
                    <img src={youtube} className='contacts-icons' />
                    <img src={vk} className='contacts-icons' />
                    <img src={facebook} className='contacts-icons' />
                    <img src={instagram} className='contacts-icons' />
                </li>
            </ul>
        </div>
    )
}
export default Contacts;