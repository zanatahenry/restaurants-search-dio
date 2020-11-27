import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles'

const RestaurantCard = () => (
<Restaurant>
  <RestaurantInfo>
    <Title>Nome </Title>
    <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" size={18} />
    <Address>endereco</Address>
  </RestaurantInfo>
  <RestaurantPhoto src={restaurante} alt="Foto do restaurante"/>
</Restaurant>
)

export default RestaurantCard