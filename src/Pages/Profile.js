import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Profile() {
    let navigate = useNavigate();
    let {username, alap} = useParams();
  return <div>Ez {username} profil {alap} oldala!
      <button
      onClick={() => {
          navigate("/about");
      }}
      >Átugrunk az about oldalra!</button>
  </div>;
}

export default Profile;
