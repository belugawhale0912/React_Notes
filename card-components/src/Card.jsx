import profilePic from './assets/beluga.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Beluga</h2>
            <p className="card-text">Student @ Asia Pacific University</p>
        </div>
    );
}

export default Card