import React from 'react';
import '../styles/BodyHeader.css';

const BodyHeader = () => {
    return (
        <div className="bodyHeader_container">
            <div className="bodyHeader_content_container_left">
                <img className="logo_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHloUtQC0N0S5-HZl_M0I2A5UlobpG-xIXWg&usqp=CAU" />
                <h5>RadioReacT</h5>
                <div className="bodyHeader_content_container_right">
                <p>Music</p>
                <p>Videos</p>
                <p>Podcast</p>
                <p>ReactTV</p>
                <p>Events</p>
                <p>Photos</p>
            </div>
            </div>
            
            
        </div>
    )
}

export default BodyHeader
