import './Card.scss';

const Card = ({ imgName, image }) => {
  return (
    <div className='product_card'>
      <img
        src={image}
        alt={imgName}
      />
      <p>{imgName}</p>
    </div>
  );
};
export default Card;
