import images from '../../images';
import Header from '../header/Header';
import './Hero.css';
import HeroItem from './HeroItem';
const {
    location,
    mouse,
    phone
} = images;
export interface HeroObject {
    link: string,
    image: string,
    text: string,
}
const HeroItems: Array<HeroObject> = [
    {
        link: "https://goo.gl/maps/NTpTobV8a6TY8SF76",
        image: location,
        text: 'Наб. реки Фонтанки 10-15'
    },
    {
        link: 'tel',
        image: phone,
        text: '8 (812) 123-45-67'
    }];
function Hero() {
    return (
        <div className="hero">
            <Header />
            <div className='hero-centerblock'>
                <h1 className='hero-heading'>Жилой комплекс в историческом центре</h1>
                <img
                    src={mouse}
                    alt='mouse'
                    width='40'
                    height='40'
                    className='hero-mouse' />
                <ul className='hero-list'>
                    {HeroItems.map((item: HeroObject, index: number) =>
                        <HeroItem
                            item={item}
                            key={`${item.text}-${index}`} />)}
                </ul>
            </div>
        </div>
    )
}
export default Hero;