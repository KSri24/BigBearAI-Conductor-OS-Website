import './Banner.css';
import video from '../media/background-vid.mp4';

export default function Banner() {
  return (
    <div className='bannerContainer'>

      <video className="bannerVideo" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="banner-text">
          <h1>Conductor OS</h1>
          <p>Orchestrating AI and Data for the Future</p>
      </div>

      <div className='overlay' />
    </div>
  );
}
