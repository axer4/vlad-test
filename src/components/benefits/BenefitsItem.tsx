import { BenefitsObject } from "./Benefits";

interface BenefitsItemProps {
    item: BenefitsObject,
}
function BenefitsItem(props:BenefitsItemProps) {
    const {image,alt,width,height,description} = props.item;
    return (
        <li className='benefits-list_item'>
            <img src={image} alt={alt} width={width} height={height} className='benefits-icon' />
            <p className='benefits-description'>{description}</p>
        </li>
        )
}
export default BenefitsItem;