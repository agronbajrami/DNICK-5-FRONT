import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import {
  BoldText,
  LightText,
  VideoWrapper,
  Wrapper,
  FrenchBanner,
  SingleVideoWrapper,
} from "../styles/styles";

const French = () => {
  const singleVideoOpts = {
    height: "600",
    width: "1100",
  };
  const opts = {
    height: "390",
    width: "550",
  };
  const _onReady = (event: YouTubeEvent<any>) => {
    event.target.pauseVideo();
  };
  return (
    <Wrapper>
      <FrenchBanner>
        <BoldText style={{ marginLeft: "22rem" }}>FRENCH KITCHEN</BoldText>
        <LightText style={{ width: "800px", marginLeft: "22rem" }}>
          On this page we are showing the best recipes of the FRENCH, ENJOY.
        </LightText>
      </FrenchBanner>
      <SingleVideoWrapper>
        <YouTube
          videoId="ZS9n3ehTD1c"
          opts={singleVideoOpts}
          onReady={_onReady}
        />
      </SingleVideoWrapper>
      <VideoWrapper>
        <YouTube videoId="lYB6o27ljmw" opts={opts} onReady={_onReady} />
        <YouTube videoId="O9aFDEhIs4E" opts={opts} onReady={_onReady} />
        <YouTube videoId="sqelF9LaAlQ" opts={opts} onReady={_onReady} />
        <YouTube videoId="pOELg04Upso" opts={opts} onReady={_onReady} />
      </VideoWrapper>
    </Wrapper>
  );
};

export default French;
