import { createSlice } from "@reduxjs/toolkit";

import images from "../../images";
const {
    room1,
    room2,
    room3,
    room4,
} = images;
const initialState  = {apartments: [
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
        reducers: {
            deleteRoom: (state,action) => {
                state.apartments.splice(action.payload,1)
            },
            addRoom: (state,action) => {
                 state.apartments.push(state.apartments[action.payload])
            }
        },
    
},
)
export const {
    deleteRoom,
    addRoom,
} = apartmentsSlice.actions;
export default apartmentsSlice.reducer;