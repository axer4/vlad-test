import Apartaments from "../apartaments/Apartaments";
import Benefits from "../benefits/Benefits";
import Maps from "../maps/Maps";
import Questions from "../questions/Questions";
import Video from "../video/Video";
import WantToWatch from "../wantToWatch/WantToWatch";
import './Main.css'
function Main () {
    return <div className="main">
        <Benefits/>
        <Apartaments/>
        <WantToWatch/>
        <Video/>
        <Maps/>
        <Questions/>
    </div>
}
export default Main;