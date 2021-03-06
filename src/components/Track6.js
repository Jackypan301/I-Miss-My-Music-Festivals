import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';
import Male from "../audio/Male.mp3"
import ReactHowler from 'react-howler'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import '../styles/Tracks.css'

function Track6() {

  const [play, setPlay ] = useState(false)
  const [volume, setVolume ] = useState(0.1)

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div >
      <div className="music-container">
      <ReactHowler src= {Male} playing={play} volume={volume} loop={true}/>Guy Friend
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

export default Track6;