import bench from '../../images/bench.svg';
import buliding from '../../images/building.svg';
import fountain from '../../images/fountain.svg';
import bicycle from '../../images/bicycle.svg';
import './Benefits.css';
function Benefits () {
    type Object = {
        image: string,
        description:string,
        alt:string,
        width:string,
        height:string
    }
    const items : Array<Object> = [{
        image:bench,
        description: 'Рядом исторические парки и скверы',
        alt: 'bench',
        width: '80',
        height: '80'
    },
    {
        image:buliding,
        description: 'Полностью обустроенный',
        alt: 'building',
        width: '80',
        height: '80'
    },
    {
        image:fountain,
        description: '10 фонтанов на территории',
        alt: 'fountain',
        width: '80',
        height: '80'
    },
    {
        image:bicycle,
        description: '6 км велодорожек',
        alt: 'bicycle',
        width: '80',
        height: '80'
    },
    
]
    return <div className="benefits">
        <ul className='benefits-list'>
            {items.map(item => {
                return <li className='benefits-list_item' key=''>
                    <img src={item.image} alt={item.alt} width={item.width} height={item.height} className='benefits-icon'/>
                    <p className='benefits-description'>{item.description}</p>
                </li>
            })}
            {/* <li className='benefits-list_item'>
                <img src={bench} alt ='bench' width='80' height='80' className='benefits-icon'/>
                <p className='benefits-description'>Рядом исторические парки и скверы</p>
            </li>
            <li className='benefits-list_item'>
                <img src={buliding} alt='building' width='80' height='80' className='benefits-icon'/>
                <p className='benefits-description'>Полностью обустроенный</p>
            </li>
            <li className='benefits-list_item'>
                <img src={fountain} alt='fountain' width='80' height='80' className='benefits-icon'/>
                <p className='benefits-description'>10 фонтанов на территории</p>
            </li>
            <li className='benefits-list_item'>
                <img src={bicycle} alt='bocycle' width='80' height='80' className='benefits-icon'/>
                <p className='benefits-description'>6 км велодорожек</p>
            </li> */}
        </ul>
             
    </div>
}
export default Benefits;