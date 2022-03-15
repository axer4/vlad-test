import { createSlice } from "@reduxjs/toolkit";
import images from "../../images";
import { BenefitsSliceState } from "../types";
const {
    bench,
    building,
    fountain,
    bicycle,
} = images;
const initialState: BenefitsSliceState = {benefits: [{
    image:bench,
    description: 'Рядом исторические парки и скверы',
    alt: 'bench',
    width: '80',
    height: '80'
},
{
    image:building,
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