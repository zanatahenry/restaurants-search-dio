import React from 'react';

import { Restaurant, RestaurantInfo, Title, Address } from './styles'

const RestaurantCard = () => (
<Restaurant>
  <RestaurantInfo>
    <Title>Nome </Title>
    <p>Avaliacao</p>
    <Address>endereco</Address>
  </RestaurantInfo>
</Restaurant>
)

export default RestaurantCard