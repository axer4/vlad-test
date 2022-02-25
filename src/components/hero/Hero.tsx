import Header from '../header/Header';
import './Hero.css';
import mouse from '../../images/mouse.svg';
import location from '../../images/location.svg';
import phone from '../../images/phone.svg'
function  Hero () {
    type Object = {
        link: string,
        image:string,
        text:string,
    }
    const items : Array<Object> = [
        {
        link:"https://goo.gl/maps/NTpTobV8a6TY8SF76",
        image:location,
        text:'Наб. реки Фонтанки 10-15'
    },
{
    link: 'tel',
    image: phone,
    text: '8 (812) 123-45-67'

}];
    return <div className="hero">
        <Header/>
        <div className='hero-centerBlock'>
        <h1 className='hero-heading'>Жилой комплекс в историческом центре</h1>
        <img src={mouse} alt='mouse' width='40' height='40' className='hero-mouse'/>
        <ul className='hero-list'>
            {items.map(item => {
                return <li className='hero-list_item'><a href={item.link}><img src={item.image}/>{item.text}</a></li>
            })}
            {/* <li className='hero-list_item'>
                <a href="https://goo.gl/maps/NTpTobV8a6TY8SF76" className='hero-contact_links'>
                    <img src={location} alt='location' width='19' height='19' className='hero-contact_icons'/>Наб. реки Фонтанки 10-15</a></li>
            <li>
                <a href='tel' type='' className='hero-contact_links'>
                    <img src={phone} alt='phone' width='19' height='19' className='hero-contact_icons'/>8 (812) 123-45-67</a></li> */}
        </ul>
        </div>
    </div>
}
export default Hero;