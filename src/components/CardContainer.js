import React from 'react';
import Card from './Card';


const CardContainer = ({data}) => data.map((item) => <Card item={item} key={item.name} />);

export default CardContainer;
