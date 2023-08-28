import Sidebar from "./Sidebar";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

import Body from "./Body";
import { useState, useRef, useEffect } from 'react';
import { useStateProviser } from '../utils/StateProvider';
import { reducerCases } from '../utils/Contants';


export default function Spotify() {


    const [{ token }, dispatch] = useStateProviser();
    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);

    const bodyScrolled = () => {
        bodyRef.current.scrollTop >= 30
            ? setNavBackground(true)
            : setNavBackground(false);
        bodyRef.current.scrollTop >= 268
            ? setHeaderBackground(true)
            : setHeaderBackground(false);
    };




    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            const userInfo = {
                userId: data.id,
                userUrl: data.external_urls.spotify,
                name: data.display_name,
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
        };
        getUserInfo();
    }, [dispatch, token]);


    useEffect(() => {
        const getPlaybackState = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            dispatch({
                type: reducerCases.SET_PLAYER_STATE,
                playerState: data.is_playing,
            });
        };
        getPlaybackState();
    }, [dispatch, token]);






    return (
        <Container>
            <div className="spotify__body">
                <Sidebar />
                <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
                    <Navbar navBackground={navBackground} />
                    <div className="body__contents">
                        <Body headerBackground={headerBackground} />
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </Container>
    )
}



const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(152, 19, 173);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;