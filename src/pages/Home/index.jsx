import React, { useState } from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from 'react-redux';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';


import { Container, Carousel, Logo, Search, Wrapper, CarouselTitle } from './styles';

const Home = () => { 
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  // Carousel
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  function handleKeyPress(e){
    if(e.key === 'Enter'){
      setQuery(inputValue);
    }
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
          <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarouselTitle>Na sua área</CarouselTitle>
        <Carousel {...settings}>
          {restaurants.map((restaurant) => (
            <Card key={restaurant.places_id} photo={restaurant.photo ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
          ))}
        </Carousel>
      </Search>
      {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)}
    </Container>
    <Map query={query} />
    {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/> */}
  </Wrapper>  
  );

};



export default Home