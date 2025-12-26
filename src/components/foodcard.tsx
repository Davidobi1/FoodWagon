import React from 'react';
import './foodcard.css';

interface FoodCardProps {
  name: string;
  daysRemaining: number;
  image: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ name, daysRemaining, image }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <b>{daysRemaining} Days Remaining</b>
    </div>
  );
}

export default FoodCard;
