import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props) => {
    return (
        <div>
            <h1 style={{ color: "red", fontSize: 60 }}> {props.fullName}</h1>
            <h1 style={{ color: "pink", fontSize: 60 }}> {props.bio}</h1>
            <h1 style={{ color: "orange", fontSize: 60 }}> {props.profession}</h1>
            <img src={props.children} />
            <div>
             
            </div>
          
        </div>
    );
};
const handleName = (fullName)=> alert(fullName);

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    children : PropTypes.any
};


   
Profile.defaultProps = {
fullName: "Mariam GHiloufi",
bio:"f",
profession:"technologue"

}


export default Profile;







