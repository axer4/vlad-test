import "./Apartaments.css"
import ApartamentItem from "./ApartmentItem"
import { useDispatch, useSelector } from "react-redux";
import apartmentsSelectors from "../../redux/selectors/apartmentsSelectors";
import { addRoom, deleteRoom } from "../../redux/reducers/apartmentsReducer";
import getRandomIntInclusive from "../../helpers/randomNumber";
export interface RoomObject {
    image: string,
    description: string
}
function Apartaments() {
    const apartments = useSelector(apartmentsSelectors.getApartments);
    const RoomItems: Array<RoomObject> = apartments.apartments;
    const dispatch = useDispatch();
    console.log(RoomItems);
    return (
        <div className="apartaments">
            <h2 className="apartaments-heading heading-second-level">Наши квартиры</h2>
            <ul className="apartaments-list">
                {RoomItems.map((item: RoomObject, index: number) =>
                    <ApartamentItem
                        item={item}
                        key={`${item.description}-${index}`} />)}
            </ul>
            {RoomItems.length < 10 &&
                <button
                    type="button"
                    className="apartments-add_room"
                    onClick={() => dispatch(addRoom(getRandomIntInclusive(0, RoomItems.length - 1)))}
                >Добавить комнату</button>
            }
            {RoomItems.length > 1 &&
                <button
                    type="button"
                    className="apartments-delete_room"
                    onClick={() => dispatch(deleteRoom(getRandomIntInclusive(0, RoomItems.length - 1)))}
                >Удалить комнату</button>
            }
        </div>
    )
}
export default Apartaments