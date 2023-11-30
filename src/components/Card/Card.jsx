import './Card.scss';

const Card = ({ imgName, image }) => {
  return (
    <div className='product_card'>
      <img
        src={image}
        alt={imgName}
      />
      <p>{imgName}</p>
      <button className='product_btn'>View Product</button>
    </div>
  );
};
export default Card;
