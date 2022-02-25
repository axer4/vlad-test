import "./Apartaments.css"
import room1 from '../../images/room1.png'
import room2 from '../../images/room2.png'
import room3 from '../../images/room1.png'
import room4 from '../../images/room2.png'
function Apartaments () {
    type Object = {
        image: string,
        description: string
    }
    const items:Array<Object> = [
        {
        image:room1,
        description: 'Лофт — 3 этажа'
    },
    {
        image:room2,
        description: 'Лофт — 2 этажа'
    },
    {
        image:room3,
        description: 'Лофт — 3 этажа'
    },
    {
        image:room4,
        description: 'Лофт — 2 этажа'
    },
]
    return <div className="apartaments">
        <h2 className="apartaments-heading heading-second-level">Наши квартиры</h2>
        <ul className="apartaments-list">
            {items.map(item => {
                return <li className="apartaments-list_item">
                    <img src={item.image} alt='room'/>
                    <p className="apartments-description">{item.description}</p></li>
            })}
        </ul>
    </div>
}
export default Apartaments