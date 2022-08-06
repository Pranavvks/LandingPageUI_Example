import React from "react";
import ReactDOM from "react-dom";

import styled, { ThemeProvider } from "styled-components";

import {
  Annotation,
  Box,
  Container,
  FadeInUpBox,
  Flex,
  GridTemplate,
  Header,
  Heading,
  Img,
  Link,
  Paragraph,
  ScaleBox,
  StaggerWrap,
  theme,
  Typography
} from "../../ui";

import "../../ui/molecules/global-styles/global.css";

import { picsList } from "../pics-list.js";

const MainHeading = styled(Typography)``;
MainHeading.defaultProps = {
  as: "h1",
  fontWeight: 2,
  color: "textTitle",
  fontSize: [6, null, 10, 11],
  lineHeight: [3, null, 6, 8]
};

const ProfilePic = styled(Img)`
  /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
  box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.2);
`;
ProfilePic.defaultProps = {
  borderRadius: 4,
  height: [40, null, 60, 80],
  width: [40, null, 60, 80]
};

function rand(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box>
        <Container>
          <Flex
            flexDirection="column"
            minHeight={[580, 580, 750, 800]}
            height={"calc(100vh - 64px)"}
            justifyContent="center"
            alignItems="center"
          >
            <Box maxWidth={["auto", 400, 500, 800]} style={{ zIndex: 1 }}>
              <StaggerWrap childrenDelay={0.2} ease="backInOut">
                {/* <FadeInUpBox yOffset={64} duration={1}>
                  <Typography color="brand" fontWeight={2} fontSize={[3, null, null, 6]}>
                    LOGO
                  </Typography>
                </FadeInUpBox> */}
                <MainHeading mt={1} mb={["20px", null, "30px", "40px"]}>
                  <FadeInUpBox yOffset={64} duration={1}>
                    Lorem ipsum
                  </FadeInUpBox>
                  <FadeInUpBox yOffset={64} duration={1}>
                    dolor
                  </FadeInUpBox>
                </MainHeading>
                <FadeInUpBox yOffset={48} duration={1}>
                  <Typography fontSize={[4, null, 5]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    natus, nesciunt quasi minima
                  </Typography>
                </FadeInUpBox>
              </StaggerWrap>
            </Box>
          </Flex>
          <Flex justifyContent="center" style={{ overflowX: "hidden" }}>
            <GridTemplate>
              {picsList.map((item, key) =>
                item !== null ? (
                  <Box key={key} pt={key % 2 === 0 ? 4 : 0} textAlign="center">
                    <ScaleBox duration={1} delayOrder={rand(1, 12)}>
                      <ProfilePic src={item.src} alt="" />
                    </ScaleBox>
                  </Box>
                ) : (
                  <Box />
                )
              )}
            </GridTemplate>
          </Flex>
        </Container>
      </Box>
      <Box mt={15}>
        <Container>
          <Box textAlign="center">
            <Heading as="h1">
              Framer Motion Example - Fade In Up Box | Scale Box
            </Heading>
            <Paragraph>
              Original animation by{" "}
              <Link
                target="_blank"
                href="https://dribbble.com/global-design-survey-2019"
              >
                Dribble
              </Link>
            </Paragraph>
          </Box>
          <Heading as="h3">ScaleBox props:</Heading>
          <Box>
            <Paragraph>
              delayOrder?
              <Annotation>order of appearance</Annotation>
            </Paragraph>
            <Paragraph>duration? = 0.4,</Paragraph>
            <Paragraph>
              easing? = [0.42, 0, 0.58, 1],
              <Annotation>
                [number, number, number, number] | "linear" | "easeIn" |
                "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" |
                "backIn" | "backOut" | "backInOut" | "anticipate" |
                EasingFunction
              </Annotation>
            </Paragraph>
          </Box>
          <Heading as="h3">FadeInUpBox props:</Heading>
          <Box>
            <Paragraph>
              yOffset? = 24,
              <Annotation>y initial possition</Annotation>
            </Paragraph>
            <Paragraph>
              easing? = [0.42, 0, 0.58, 1],
              <Annotation>
                [number, number, number, number] | "linear" | "easeIn" |
                "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" |
                "backIn" | "backOut" | "backInOut" | "anticipate" |
                EasingFunction
              </Annotation>
            </Paragraph>
            <Paragraph>duration? = 0.4,</Paragraph>
            <Paragraph>
              delayOrder?
              <Annotation>order of appearance</Annotation>
            </Paragraph>
          </Box>
          <Heading as="h3">IntersectionObserver props:</Heading>
          <Box>
            <Paragraph>
              reset? = false
              <Annotation>
                if value set to true - observed element will reappear every time
                it shows up on the screen
              </Annotation>
            </Paragraph>
          </Box>
          <Heading as="h3">FadeInUpBox props:</Heading>
          <Box>
            <Paragraph>
              yOffset? = 24,
              <Annotation>y initial possition</Annotation>
            </Paragraph>
            <Paragraph>
              easing? = [0.42, 0, 0.58, 1],
              <Annotation>
                [number, number, number, number] | "linear" | "easeIn" |
                "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" |
                "backIn" | "backOut" | "backInOut" | "anticipate" |
                EasingFunction
              </Annotation>
            </Paragraph>
            <Paragraph>duration? = 0.4,</Paragraph>
            <Paragraph>
              delayOrder?
              <Annotation>order of appearance</Annotation>
            </Paragraph>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
