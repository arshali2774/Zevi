import { useState } from 'react';
import './Card.scss';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
const Card = ({
  imgName,
  image,
  isResultPage = false,
  price = 0,
  rate = 0,
  count = 0,
}) => {
  //heart state
  const [isHeart, setIsHeart] = useState(false);
  // handle change
  const handleHeartBtn = () => {
    setIsHeart(!isHeart);
  };
  // stars math
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <IoIosStar
        color='gold'
        key={i}
      />
    );
  }
  if (hasHalfStar) {
    stars.push(
      <IoIosStarHalf
        color='gold'
        key='half'
      />
    );
  }
  return (
    <div className='product_card'>
      <div className='product_img'>
        <img
          src={image}
          alt={imgName}
        />
      </div>
      <p className='product_img_name'>{imgName}</p>
      {isResultPage && (
        <div className='product_price'>
          <p className='price_old'>Rs. {price}</p>
          <p className='price_new'>
            Rs. {price > 50 ? (price - 50).toFixed(2) : (price - 5).toFixed(2)}
          </p>
        </div>
      )}
      {isResultPage && (
        <div className='product_rating'>
          <p className='rating_stars'>{stars.map((i) => i)}</p>
          <p className='rating_count'>({count})</p>
        </div>
      )}
      <button className='product_btn'>View Product</button>
      {isResultPage && (
        <button
          className='heart-btn'
          onClick={handleHeartBtn}
        >
          {isHeart ? <FaHeart color='red' /> : <FaRegHeart />}
        </button>
      )}
    </div>
  );
};
export default Card;
