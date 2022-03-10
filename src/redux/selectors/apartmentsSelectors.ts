import { RootState } from "../types";

const getApartments = (state:RootState) => state.apartments;
const apartmentsSelectors = {
    getApartments,
}
export default apartmentsSelectors;