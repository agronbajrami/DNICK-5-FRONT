import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import {
  BoldText,
  GermanBanner,
  LightText,
  SingleVideoWrapper,
  VideoWrapper,
  Wrapper,
} from "../styles/styles";

const German = () => {
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
      <GermanBanner>
        <BoldText style={{ marginLeft: "22rem" }}>GERMAN FOOD RECIPES</BoldText>
        <LightText style={{ width: "800px", marginLeft: "22rem" }}>
          In this page we are showing some of the best of GERMAN cuisine, ENJOY.
        </LightText>
      </GermanBanner>
      <SingleVideoWrapper>
        <YouTube
          videoId="VYnbQIKaRWs"
          opts={singleVideoOpts}
          onReady={_onReady}
        />
      </SingleVideoWrapper>
      <VideoWrapper>
        <YouTube videoId="TznZX7Bu9gQ" opts={opts} onReady={_onReady} />
        <YouTube videoId="4Uujm7FmY8A" opts={opts} onReady={_onReady} />
        <YouTube videoId="YXX_OG3F2gA" opts={opts} onReady={_onReady} />
        <YouTube videoId="fcaIMIjiwrA" opts={opts} onReady={_onReady} />
      </VideoWrapper>
    </Wrapper>
  );
};

export default German;
