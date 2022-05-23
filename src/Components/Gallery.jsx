import React, {useRef} from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styled from 'styled-components';
import images from './images';

export default function Gallery() {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const {current} = scrollRef;
        
        if(direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }

    }

    return (
        <>
        <GalleryOverline>
            <div className='gallery-overline'/>
        </GalleryOverline>
        <GallerySection>
            {/* <div className='gallery-overline'/> */}
            <div className='gallery-content'>
                <div className='gallery-title'>
                    <h2>Gallery</h2>
                    <div className='gallery-underline'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                </div>
            </div>
            <div className='gallery-images'>
                <div className='images-container' ref={scrollRef}>
                {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                    <div className="images-card " key={`gallery-image-${index + 1}`}>
                    <img src={image} alt="gallery-image" />
                    <BsInstagram className="image-icon" />
                    </div>
                ))}
                </div>
                <div className='images-arrows'>
                    <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')}/>
                    <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')}/>
                </div>
            </div>
        </GallerySection>
        </>
    )
}

const GallerySection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #b8c2c5;
    padding-top: 7rem;
    padding-bottom: 7rem;
    .gallery-content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        /* min-width: 1000px; */
        /* padding-right: 2rem; */
        .gallery-title {
            text-align: center;
            margin-bottom: 5rem;
            padding-top: 7rem;
            h2 {
                letter-spacing: 10px;
                font-size: 8rem;
                font-weight: 500;
                font-family: 'Bosch';
                text-transform: capitalize;
                line-height: 1.25;
                margin-bottom: 0.75rem;
                margin-top: 0px;
                color: #7b5750;
            }
            .gallery-underline {
                width: 9rem;
                height: 0.25rem;
                background: #7b5750;
                margin-left: auto;
                margin-right: auto;
            }
            p {
                font-family: 'Commissioner', sans-serif;
                color: #7b5750;
                font-size: 4.5rem;
                font-weight: 400;
                line-height: 1.5;
                text-align: center;
                margin-left: 5rem;
                margin-right: 5rem;
            }
        }
    }
    .gallery-images {
        flex: 1;
        display: flex;
        flex-direction: row;
        max-width: 55%;
        position: relative;
        .images-container {
            /* display: flex;
            flex-direction: row; */
            display: flexbox;
            width: max-content;
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .images-container::-webkit-scrollbar {
            display: none;
        }
        .images-card {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            min-width: 305px;
            height: 1500px;
            margin-right: 2rem;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 1;
                transition: 0.5s ease;
                &:hover {
                    opacity: 0.35;
                }
            }
        }
        .image-icon {
            position: absolute;
            color: #b8c2c5;
            font-size: 5rem;
            opacity: 0.5;
            transition: .5s ease;
            cursor: pointer;
            &:hover {
                opacity: 0.7;
                font-size: 7rem;
            }
        }
        .images-arrows {
            width: 98%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            padding-left: 1rem;
            bottom: 4%;
            .arrow-icon {
                color: #cabeb3;
                font-size: 5rem;
                cursor: pointer;
                background-color: #7b5750;
                border-radius: 5px;
                &:hover {
                    color: #b8c2c5 ;
                }
            }
        }
    }
    @media screen and (max-width: 1440px) {
        width: inherit;
        padding-top: 3rem;
        padding-bottom: 3rem;
        .gallery-content {
            .gallery-title {
                margin-bottom: 2rem;
                padding-top: 2rem;
                h2 {
                    letter-spacing: 5px;
                    font-size: 2rem;
                    line-height: 1;
                    margin-bottom: 0.75rem;
                }
                .gallery-underline {
                    width: 1.9rem;
                    height: 0.1rem;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 320px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        width: inherit;
        padding-top: 3rem;
        padding-bottom: 3rem;
        .gallery-content {
            min-width: 100%;
            padding-right: 0rem;
            .gallery-title {
                margin-bottom: 2rem;
                padding-top: 2rem;
                h2 {
                    letter-spacing: 5px;
                    font-size: 2rem;
                    line-height: 1;
                    margin-bottom: 0.75rem;
                }
                .gallery-underline {
                    width: 1.9rem;
                    height: 0.1rem;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 320px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        .gallery-images {
            max-width: 100%;
            margin: 5rem 0;
        }
    }

    @media screen and (max-width: 850px) {
        width: inherit;
        padding-top: 3rem;
        padding-bottom: 3rem;
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 320px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        width: inherit;
        padding-top: 3rem;
        padding-bottom: 3rem;
        .gallery-content {
            min-width: 100%;
            padding-right: 0rem;
            .gallery-title {
                margin-bottom: 2rem;
                padding-top: 2rem;
                h2 {
                    letter-spacing: 5px;
                    font-size: 2rem;
                    line-height: 1;
                    margin-bottom: 0.75rem;
                }
                .gallery-underline {
                    width: 1.9rem;
                    height: 0.1rem;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 320px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }
    @media screen and (max-width: 426px) {
        width: inherit;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        .gallery-content {
            min-width: 100%;
            padding-right: 0rem;
            .gallery-title {
                margin-bottom: 1.5rem;
                padding-top: 0.5rem;
                h2 {
                    letter-spacing: 2px;
                    font-size: 1.8rem;
                    line-height: 0.9;
                    margin-bottom: 0.8rem;
                }
                .gallery-underline {
                    width: 1.8rem;
                }
                p {
                    font-size: 1.05rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 300px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }
    @media screen and (max-width: 376px) {
        width: inherit;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        .gallery-content {
            min-width: 100%;
            padding-right: 0rem;
            .gallery-title {
                margin-bottom: 1.5rem;
                padding-top: 0.5rem;
                h2 {
                    letter-spacing: 2px;
                    font-size: 1.8rem;
                    line-height: 0.9;
                    margin-bottom: 0.8rem;
                }
                .gallery-underline {
                    width: 1.8rem;
                }
                p {
                    font-size: 1.05rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 300px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }
    @media screen and (max-width: 320px) {
        width: inherit;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        .gallery-content {
            min-width: 100%;
            padding-right: 0rem;
            .gallery-title {
                margin-bottom: 1.5rem;
                padding-top: 0rem;
                h2 {
                    letter-spacing: 3px;
                    font-size: 1.7rem;
                    font-weight: 500;
                    line-height: 0.9;
                    margin-bottom: 0.7rem;
                }
                .gallery-underline {
                    width: 1.7rem;
                }
                p {
                    font-size: 1rem;
                    line-height: 1.3;
                }
            }
        }
        .gallery-images {
            .images-card {
                min-width: 240px;
                height: 300px;
            }
            .image-icon {
                font-size: 2rem;
                &:hover {
                    font-size: 3rem;
                }
            }
            .images-arrows {
                width: 93%;
                padding-left: 0.7rem;
                bottom: 3%;
                .arrow-icon {
                    font-size: 2rem;
                }
            }
        }
    }
`;

const GalleryOverline = styled.div`
    background-color: #b8c2c5;
    padding-bottom: 3rem;
    .gallery-overline {
        width: 70vw;
        height: 1rem;
        opacity: 0.3;
        background: #7b5750;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 1440px) {
        .gallery-overline {
            height: 0.2rem;
        }
    }
    @media screen and (max-width: 1024px) {
        .gallery-overline {
            height: 0.2rem;
        }
    }

    @media screen and (max-width: 768px) {
        .gallery-overline {
            height: 0.2rem;
        }
    }
    
    @media screen and (max-width: 376px) {
        padding-bottom: 0rem;
    }
    @media screen and (max-width: 320px) {
        padding-bottom: 0rem;
    }
    
`;