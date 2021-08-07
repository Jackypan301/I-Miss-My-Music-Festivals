
import React, {useState} from 'react';

import Festival from "../audio/Festival.mp3"

import ReactHowler from 'react-howler'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import '../styles/Tracks.css'

function Track1() {

  const [play, setPlay ] = useState(false)
  const [volume, setVolume ] = useState(1.0)

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div >
      <div className="music-container">
      <ReactHowler src= {Festival} playing={play} volume={volume} loop={true}/>Festival
      <button className="music-button" onClick={() => setPlay(!play)} >
        { play ? <PauseIcon /> : <PlayArrowIcon  /> }
      </button>
      </div>
      <Typography id="continuous-slider" gutterBottom>

      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider className="music-volume" value={volume} onChange={handleChange}  aria-labelledby="continuous-slider"  step={0.01}  min={0}
  max={1.000000}/>
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>

    </div>

  )
}

export default Track1;




