import React from 'react';
import Card from './Card';


const CardContainer = ({data}) => {
    const getItems = (data) => data.map((item) => <Card item={item} key={item.name} />);
    
    const items = getItems(data);
    
    return (
        <div className="o-grid">
            {items}
        </div>
    );
} 

export default CardContainer;
