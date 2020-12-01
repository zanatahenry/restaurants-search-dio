import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
`;

export const Logo = styled.img `
  margin-bottom: 15px;
`;

export const Map = styled.div `
  background-color: #a1a1f1;
  width: 500px;
`;

export const Carousel = styled(Slider) `
  .slick-slide{
    marign-right: 30px;
  }

`;

export const CarouselTitle = styled.h1 `
  font-family: 'Roboto';
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;