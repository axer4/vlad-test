import images from '../../images';
import './Video.css';
const {play} = images;
function Video() {
    return (
        <div className='video'>
            <img
                src={play}
                alt='play-button'
                className='video-buton' />
        </div>
    )
}
export default Video;