import axios from "axios";
import React from "react";
import styled from "styled-components";
import {useStateProviser} from '../utils/StateProvider'

export default function Volume() {

    const [{token}]=useStateProviser()
    const setVolume =async (e) => {
        await axios.put(
            "https://api.spotify.com/v1/me/player/volume",
            {},
            {
              params: {
                volume_percent: parseInt(e.target.value),
              },
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
        )
    }
 

    return (
        <Container>
        <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
      </Container>
    )
}



const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 13rem;
  margin-left:8rem;
  
  input {
    height: 4px;
  appearance: none;
  width: 100%;
  margin: 2px;
  border-radius: 8px;
  transition: 0.2s ease;
  background-color: #5e5e5e;
  }
  
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* display: none; */
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: green;
}

input[type="range"]:hover {
  background: green;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: white;
}
`;