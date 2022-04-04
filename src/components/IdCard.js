import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    const date=birth.toDateString();
  return (<div>
      <p><b>First Name: </b>{firstName}</p>
      <p><b>Last Name: </b>{lastName}</p>
      <p><b>Height: </b>{height}</p>
      <p><b>Birth: </b>{date}</p>
      <p><b>Gender: </b>{gender}</p>
      <img src={picture} alt="picture"/>
  </div>)
}

export default IdCard;
