import { React } from 'react';

import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from "../src/components/CSSReset";
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import StyledBanner from '../src/components/Banner'
import Image from 'next/image';
import { StyledFavorites } from '../src/components/Favorites';


const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`;


function HomePage() {
  const estilosDaHomePage = {/* backgroundColor: 'red'*/ };

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Banner banner={config.banner} />
        <Header />
        <Timeline playlists={config.playlists} />
        <p style={ {marginLeft: '30px', fontWeight:'bold'} }>AluraTube Favoritos</p>
        <Favorites favorites={config.favorites} />
      </div>

    </>

  )
}

export default HomePage





function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <ProfileImg />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function ProfileImg() {
  const profile = `https://github.com/${config.github}.png`

  return (
    <img src={profile}></img>
  )
}
function Banner(props) {
  const bannerImg = props.banner;

  return (
    <StyledBanner>
      <img src={bannerImg}></img>
    </StyledBanner>
  )
}


function Timeline(props) {
  const playlistNames = Object.keys(props.playlists)

  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames, index) => {
        const videos = props.playlists[playlistNames];

        return (
          <section key={index}>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((video, index) => {
                return (
                  <a href={video.url} key={index}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )

      })}
    </StyledTimeline>
  )
}

function Favorites(props) {

  const usersInfo = props.favorites

  return (

  <StyledFavorites>
    
    {

      usersInfo.map((usersInfo, index) => {
        const usersPictures = usersInfo.img
        const userName = usersInfo.user
        
        return (
              <div key={index}>
                <Image src={usersPictures} width={100} height={100} alt={`ablubl[e]`} />
                <div>
                  <p> {userName} </p>
                </div>
              </div>
        )
      })
    }
    
    </StyledFavorites>

  )

}