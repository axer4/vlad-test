import { createSlice } from "@reduxjs/toolkit";
import room1 from '../../images/room1.png'
import room2 from '../../images/room2.png'
import room3 from '../../images/room1.png'
import room4 from '../../images/room2.png'
import { ApartmentsSliceState } from "../types";
const initialState : ApartmentsSliceState = {apartments: [
    {
        image: room1,
        description: 'Лофт — 3 этажа'
    },
    {
        image: room2,
        description: 'Лофт — 2 этажа'
    },
    {
        image: room3,
        description: 'Лофт — 3 этажа'
    },
    {
        image: room4,
        description: 'Лофт — 2 этажа'
    },
] }
const apartmentsSlice = createSlice({
    name:'apartments',
    initialState,
        reducers: {},
    
},
)
export default apartmentsSlice.reducer;