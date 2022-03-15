import { HeroObject } from "./Hero";
interface HeroItemProps {
    item: HeroObject,
}
function HeroItem(props: HeroItemProps) {
    const {
        link,
        image,
        text
    } = props.item;
    return (
        <li className='hero-list_item'>
            <a
                href={link}
                className='hero-contact_links '>
                <img
                    src={image}
                    className='hero-contact_icons' />
                {text}
            </a>
        </li>
    )
}
export default HeroItem;