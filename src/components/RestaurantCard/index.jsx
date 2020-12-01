import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles'

const RestaurantCard = ({ restaurant }) => (
<Restaurant>
  <RestaurantInfo>
    <Title>{restaurant.name}</Title>
    <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" size={18} />
    <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
  </RestaurantInfo>
  <RestaurantPhoto src={restaurant.photo ? restaurant.photos[0].getUrl() : restaurante} alt="Foto do restaurante"/>
</Restaurant>
)

export default RestaurantCard