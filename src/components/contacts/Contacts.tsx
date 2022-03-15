import './Contacts.css';
import images from '../../images';
const {
    youtube,
    vk,
    facebook,
    instagram
} = images;
function Contacts() {
    return (
        <div className='contacts'>
            <ul className='contacts-list'>
                <li className='contacts-list-item'>Адрес: Наб. реки Фонтанки 10-15</li>
                <li className='contacts-list-item'>Телефон: 8 (812) 123-45-67</li>
                <li className='contacts-list-item'>Отдел продаж: 10:00 - 20:00</li>
                <li className='contacts-list-item'>E-mail: vip@housevip.ru</li>
                <li className='contacts-list-item'>
                    <img
                        src={youtube}
                        className='contacts-icons'
                        alt='youtbe' />
                    <img
                        src={vk}
                        className='contacts-icons'
                        alt='vk' />
                    <img
                        src={facebook}
                        className='contacts-icons'
                        alt='facebook' />
                    <img
                        src={instagram}
                        className='contacts-icons'
                        alt='instagram' />
                </li>
            </ul>
        </div>
    )
}
export default Contacts;