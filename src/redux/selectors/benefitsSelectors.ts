import { RootState } from "../types";

const getBenefits = (state:RootState) => state.benefits;
const benefitsSelectros = {
    getBenefits,
}
export default benefitsSelectros;