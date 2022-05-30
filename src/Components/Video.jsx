import React from 'react'
import styled from 'styled-components';
import video from '../assets/kouzina intro.mp4'

export default function Video() {
  return (
    <>
    <VideoContainer>
        <video autoPlay loop muted>
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
        height: 90vh;
    }
    @media screen and (max-width: 600px) {
        height: 65vh;
    }
    @media screen and (max-width: 426px) {
        height: 50vh;
    }
    @media screen and (max-width: 376px) {
        height: 45vh;
    }
    @media screen and (max-width: 320px) {
        height: 42vh;
    }
`;