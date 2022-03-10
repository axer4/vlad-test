import { createSlice } from "@reduxjs/toolkit";
import bench from '../../images/bench.svg';
import buliding from '../../images/building.svg';
import fountain from '../../images/fountain.svg';
import bicycle from '../../images/bicycle.svg';
import { BenefitsSliceState } from "../types";
const initialState: BenefitsSliceState = {benefits: [{
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
] }
const benefitsSlice = createSlice({
    name:'benefits',
    initialState,
    reducers:{},
})
export default benefitsSlice.reducer;