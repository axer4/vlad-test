import {RoomObject} from '../../src/components/apartaments/Apartaments';
import { BenefitsObject } from '../components/benefits/Benefits';
import store from './store';


export interface ApartmentsSliceState {
   apartments: Array<RoomObject>
}
export interface BenefitsSliceState {
    benefits: Array<BenefitsObject>
}
export type RootState = ReturnType<typeof store.getState>;