import './Banner.css';
import video from '../media/background-vid.mp4';

export default function Banner() {
  return (
    <div className='bannerContainer'>
      <video className="bannerVideo" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='overlay' />
    </div>
  );
}
