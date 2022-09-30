import type { NextPage } from "next";
import cookingMan from "../assets/images/rfd-min.jpg";
import greekSalad1 from "../assets/images/greek-salad1.jpg";
import greekSalad2 from "../assets/images/greek-salad2.jpg";
import greekSalad3 from "../assets/images/greek-salad3.jpg";
import greekSalad4 from "../assets/images/greek-salad4.jpg";
import greekSalad5 from "../assets/images/Greek-Salad-Up-Close-scaled.jpg";
import vegetarianLasagna from "../assets/images/vegetarian-lasagna.jpg";
import pizza from "../assets/images/pizza.jpg";
import rice from "../assets/images/Mushroom-Risotto-3.jpg";
import YouTube, { YouTubeEvent } from "react-youtube";

import {
  Banner,
  Wrapper,
  BoldText,
  LightText,
  Content,
  CookingDetails,
  Divider,
  CookingBoldText,
  CookingLightText,
  CookingDetailsText,
  CookingDetailsTextBold,
  StyledImage,
  RowDiv,
  Title,
  NormalText,
  VideoWrapper,
} from "../styles/styles";
import Image from "next/image";
const Home: NextPage = () => {
  const opts = {
    height: "390",
    width: "550",
  };
  const _onReady = (event: YouTubeEvent<any>) => {
    event.target.pauseVideo();
  };
  return (
    <Wrapper>
      <Banner>
        <BoldText>LEARNING HOW TO COOK</BoldText>
        <LightText>
          Are you tired of making the same recipes everyday? Well LEARNING HOW
          TO COOK is just the website for you, where you can see all kinds of
          recipes, some of them with videos some just with the text.
        </LightText>
      </Banner>
      <Content>
        <CookingDetails>
          <Divider>
            <CookingBoldText>Cooking</CookingBoldText>
            <CookingLightText>Courses</CookingLightText>
            <br />
            <br />
            <CookingDetailsText>
              Welcome to{" "}
              <CookingDetailsTextBold>
                LEARNING HOW TO COOK
              </CookingDetailsTextBold>
              , Where your family will love your cooking and where you will be
              more and more passionate about cooking.
              <br /> If you love food and want to experiment, this is the
              website for you, and below are some of the best dishes known. Lets
              make this a fun and tasty journey to remember.
            </CookingDetailsText>
          </Divider>
          <Divider>
            <StyledImage src={cookingMan} alt={"Cooking man"} />
          </Divider>
        </CookingDetails>
        <RowDiv>
          <Image
            height={227.5}
            width={280}
            alt={"Food img0"}
            src={greekSalad1.src}
          />
          <Image
            height={227.5}
            width={280}
            alt={"Food img1"}
            src={greekSalad2.src}
          />
          <Image
            height={227.5}
            width={280}
            alt={"Food img2"}
            src={greekSalad3.src}
          />
          <Image
            height={227.5}
            width={280}
            alt={"Food img3"}
            src={greekSalad4.src}
          />
        </RowDiv>
        <RowDiv>
          <Divider>
            <Image
              height={400}
              width={452}
              src={vegetarianLasagna.src}
              alt={"Lasagna"}
            />
          </Divider>
          <Divider>
            <Title>Vegetarian Lasagna</Title>
            <NormalText>
              Just like when making classic lasagna, the method for our recipe
              is pretty simple. Here’s an overview of how to make our vegetable
              lasagna (the full recipe is below):Cook your lasagna noodles OR
              skip this step and use no-boil noodles. Even though we use regular
              lasagna noodles in our video, I actually prefer the texture of
              no-boil noodles and bonus, it’s easier!Make the simple tomato
              sauce, which takes about 20 minutes. If you’re going to be short
              on time, the sauce can be made up to three days in advance.
              Assemble the lasagna by layering the vegetable sauce, noodles, the
              ricotta mixture, and shredded cheese.The lasagna bakes in the oven
              for about 35 minutes. I like to bake it covered for 20 minutes,
              and then uncover it so the top and cheese get some color.
            </NormalText>
          </Divider>
        </RowDiv>
        <RowDiv>
          <Divider>
            <Image
              height={480}
              width={452}
              src={greekSalad5.src}
              alt={"Greek salad"}
            />
          </Divider>
          <Divider>
            <Title>Greek Salad</Title>
            <NormalText>
              6 tablespoons extra virgin olive oil
              <br /> 2 tablespoons fresh lemon juice <br />
              1/2 teaspoon chopped garlic <br />1 teaspoon red wine vinegar{" "}
              <br />
              1/2 teaspoon dried oregano or 1 teaspoon chopped fresh oregano{" "}
              <br />
              1/2 teaspoon dried dill or 1 teaspoon chopped fresh dill <br />
              Salt and freshly ground black pepper <br />3 large plum tomatoes,
              seeded and coarsely chopped <br />
              3/4 cucumber, peeled, seeded, and coarsely chopped <br />
              1/2 red onion, chopped <br />1 bell pepper, seeded and coarsely
              chopped <br />
              1/2 cup pitted black olives (preferably brine-cured), coarsely
              chopped <br />
              Heaping 1/2 cup crumbled feta cheese
            </NormalText>
          </Divider>
        </RowDiv>
        <RowDiv>
          <Divider>
            <Image height={400} width={452} src={pizza.src} alt={"Pizza"} />
          </Divider>
          <Divider>
            <Title>Capricciosa Pizza</Title>
            <NormalText>
              the traditional ingredientsAs a matter of fact, during the years,
              <br />
              the Capricciosa pizza has become standardized using the same
              <br />
              staple ingredients, such as: <br />
              crushed canned plum tomatoes (usually San Marzano) <br />
              mozzarella <br />
              prosciutto cotto (Italian cooked ham)
              <br />
              artichoke heart wedges in olive oil <br />
              fresh cremini mushrooms (in Italian, funghi champignons) <br />
              pitted black olives, like Gaeta, Taggiasche, or Kalamata
            </NormalText>
          </Divider>
        </RowDiv>
        <RowDiv>
          <Divider>
            <Image height={400} width={452} src={rice.src} alt={"Rice"} />
          </Divider>
          <Divider>
            <Title>Mushroom Risotto</Title>
            <NormalText>
              50g dried porcini mushrooms
              <br />
              1 vegetable stock cube
              <br />
              2 tbsp olive oil
              <br />
              1 onion, finely chopped
              <br />
              2 garlic cloves, finely chopped
              <br />
              250g pack chestnut mushrooms, chopped
              <br />
              300g risotto rice, such as arborio
              <br />
              1 x 175ml glass white wine
              <br />
              25g butter
              <br />
              handful parsley leaves, chopped
              <br />
              50g parmesan or Grana Padano, freshly grated
              <br />
            </NormalText>
          </Divider>
        </RowDiv>
      </Content>
      <VideoWrapper>
        <YouTube videoId="mhDJNfV7hjk" opts={opts} onReady={_onReady} />
        <YouTube videoId="Es3B8Swni14" opts={opts} onReady={_onReady} />
        <YouTube videoId="u54aQPzwbWc" opts={opts} onReady={_onReady} />
        <YouTube videoId="TUV9h2eFU_8" opts={opts} onReady={_onReady} />
      </VideoWrapper>
    </Wrapper>
  );
};

export default Home;
