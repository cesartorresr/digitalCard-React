import React from 'react'


function Info() {
    return (
        <div className='info'>
            <img src="./images/photo.jpeg" width="300px"/>
            <h1 className="name">César Torres</h1>
            <h4 className="job">Frontend Developer</h4>
            <h4 className="web">cesartorres.co</h4>
            <div className="botones">
            <button className="email">Email</button>
            <button className="linkedin">Linkedin</button>
            </div>
        </div>
    )
}

export default Info;