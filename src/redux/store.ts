import {configureStore } from '@reduxjs/toolkit';
import apartmentsSlice from './reducers/apartmentsReducer';
import benefitsSlice from './reducers/benefitsReducer';
export default configureStore({
    reducer:{
        apartments: apartmentsSlice,
        benefits: benefitsSlice,
    }
})