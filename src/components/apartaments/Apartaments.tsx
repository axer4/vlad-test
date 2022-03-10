import "./Apartaments.css"
import ApartamentItem from "./ApartmentItem"
import { useSelector } from "react-redux";
import apartmentsSelectors from "../../redux/selectors/apartmentsSelectors"
export interface RoomObject {
    image: string,
    description: string
}
const Apartaments = () => {
    const apartments = useSelector(apartmentsSelectors.getApartments);
    const RoomItems: Array<RoomObject> = apartments.apartments;
    return (
        <div className="apartaments">
            <h2 className="apartaments-heading heading-second-level">Наши квартиры</h2>
            <ul className="apartaments-list">
                {RoomItems.map((item: RoomObject, index: number) => <ApartamentItem item={item} key={`${item.description}-${index}`} />)}
            </ul>
        </div>
    )
}
export default Apartaments