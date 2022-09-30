import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import {
  BoldText,
  ItalianBanner,
  LightText,
  SingleVideoWrapper,
  VideoWrapper,
  Wrapper,
} from "../styles/styles";

const Italian = () => {
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
      <ItalianBanner>
        <BoldText style={{ marginLeft: "22rem" }}>ITALIAN CUISINE</BoldText>
        <LightText style={{ width: "800px", marginLeft: "22rem" }}>
          Here are some of the best recipes from italy enjoy.
        </LightText>
      </ItalianBanner>
      <SingleVideoWrapper>
        <YouTube
          videoId="R8IaNhYXyBo"
          opts={singleVideoOpts}
          onReady={_onReady}
        />
      </SingleVideoWrapper>
      <VideoWrapper>
        <YouTube videoId="AvO8UPbIH30" opts={opts} onReady={_onReady} />
        <YouTube videoId="8Q_9h6VKm9c" opts={opts} onReady={_onReady} />
        <YouTube videoId="UQvFnNSZ9HM" opts={opts} onReady={_onReady} />
        <YouTube videoId="ctRo3pmFaKQ" opts={opts} onReady={_onReady} />
      </VideoWrapper>
    </Wrapper>
  );
};

export default Italian;
