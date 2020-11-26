import React, { useState } from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard } from '../../components';


import { Container, Carousel, Logo, Search, Wrapper, Map, CarouselTitle } from './styles';

const Home = () => { 
  const [inputValue, setInputValue] = useState('');

  // Carousel
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
  <Wrapper>
    <Container>
      <Search>
        <Logo src={logo} alt="Logo"/>
        <TextField
            label='Pesquisar'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          > 
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </TextField>
        <CarouselTitle>Na sua área</CarouselTitle>
        <Carousel {...settings}>
          <Card photo={restaurante} title="Nome"/>
        </Carousel>
      </Search>
      <RestaurantCard/>
    </Container>
    <Map/>
  </Wrapper>  
  );

};



export default Home