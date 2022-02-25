import play from '../../images/play-button.svg';
import './Video.css'
function Video () {
    return <div className='video'>
         <img src={play} alt='play-button' className='video-buton'/>
    </div>
}
export default Video;