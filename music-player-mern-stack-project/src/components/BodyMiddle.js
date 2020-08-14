import React from 'react';
import '../styles/BodyMiddle.css';

const BodyMiddle = ()  => {
    return (
        <div className="bodyMiddle_container">
            <p><span className="playlist">Playlist</span></p>
            <div className="bodyMiddle_image_container">
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/5883691/9f584fd8969db21.jpg" alt="music"/>
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/8999965/fa3fc4c903f9cd7.jpg" alt="music"/>
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/10037922/ab477e6f3bf77bc.jpg" alt="music"/>
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/4867701/b577f89618e32dc.jpg" alt="music"/>
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/2127294/427d6e33bef931b.jpg" alt="music"/>
                 <img className="bodyMiddle_image" src="https://d1eqqkloubk286.cloudfront.net/static/playlist/1530970/4f591a8686c14c5.jpg" alt="music"/>
            </div>
        </div>
    )
}

export default BodyMiddle;
