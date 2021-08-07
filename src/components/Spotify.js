
import React, {useState, useEffect} from 'react';
import '../styles/Spotify.css'


function Spotify() {


  return (
    <div >
      <p className='Spotify-player'>Curently Spotify Embedded Playlist do not allow for volume control :( <br /> <br /> Please Enjoy this Playlist and return to festivals soon. </p>

        <iframe src="https://open.spotify.com/embed/playlist/3AM8ICUthd0h8Ci7cEaPia" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>





    </div>

  )
}

export default Spotify