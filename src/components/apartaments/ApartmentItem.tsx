import { RoomObject } from "./Apartaments";

interface ApartamentItemProps {
    item: RoomObject
}
function ApartamentItem (props: ApartamentItemProps)  {
    const { image, description } = props.item
  
    return (
        <li className="apartaments-list_item">
            <img
                src={image}
                alt='room'
                className="apartments-image" />
            <p className="apartments-description">{description}</p>
        </li>
    )

}
export default ApartamentItem;