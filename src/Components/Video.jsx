import React from 'react'
import styled from 'styled-components';
import video from '../assets/kouzina intro.mp4'

export default function Video() {
  return (
    <>
    <VideoContainer>
        <video autoPlay loop muted playsInline noControls>
            <source src={video} type='video/mp4'/>
        </video>
    </VideoContainer>
    </>
  )
}

const VideoContainer = styled.div`
    display: flex;
    height: 92vh;
    video {
        width: 100%;
        background-color: #42453c;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
        height: 31rem;
    }
    @media screen and (max-width: 600px) {
        height: 26rem;
    }
    @media screen and (max-width: 426px) {
        height: 20rem;
    }
    @media screen and (max-width: 376px) {
        height: 18rem;
    }
    @media screen and (max-width: 320px) {
        height: 15rem;
    }
`;