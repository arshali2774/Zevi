import './Card.scss';

const Card = ({ imgName, image }) => {
  console.log(imgName);
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
