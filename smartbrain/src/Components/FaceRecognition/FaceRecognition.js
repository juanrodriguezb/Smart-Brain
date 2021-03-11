import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (imageUrl, box) => {
    return (
    <div className='center ma'>
        <div classNAme='absolute mt2'>
        <img id= 'inputimage' alt='' src={imageUrl} width='500px' height='auto'></img> 
        <div className= 'bounding-box' style={{top: box.topCol, right: box.rightRow, bottom: bottomRow, left: leftCol}}></div>   
        </div>
    </div>

    );
}

export default FaceRecognition;