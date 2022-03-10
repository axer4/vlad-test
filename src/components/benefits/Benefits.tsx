import bench from '../../images/bench.svg';
import buliding from '../../images/building.svg';
import fountain from '../../images/fountain.svg';
import bicycle from '../../images/bicycle.svg';
import './Benefits.css';
import BenefitsItem from './BenefitsItem';
import { useSelector } from 'react-redux';
import benefitsSelectros from '../../redux/selectors/benefitsSelectors';
export interface BenefitsObject {
    image: string,
    description:string,
    alt:string,
    width:string,
    height:string
}
function Benefits () {
    const benefits = useSelector(benefitsSelectros.getBenefits)
    const BenefitsItems : Array<BenefitsObject> = benefits.benefits;
    return <div className="benefits">
        <ul className='benefits-list'>
            {BenefitsItems.map((item:BenefitsObject,index:number) => <BenefitsItem item={item} key={`${item.description}-${index}`}/>)}
        </ul>
             
    </div>
}
export default Benefits;