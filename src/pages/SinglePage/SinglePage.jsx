import { useParams } from 'react-router-dom';
import './SinglePage.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchStore = async () => {
  try {
    const res = axios.get('https://fakestoreapi.com/products?limit=50');
    return res;
  } catch (error) {
    console.log(error, 'this is error');
  }
};

const SinglePage = () => {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchStore,
  });
  let singleProduct = [];
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    singleProduct = data.data.filter((i) => i.id === Number(productId));
  }
  console.log(singleProduct);
  return (
    <div className='single_product'>
      {!isLoading &&
        singleProduct.map((i) => (
          <div key={i.id}>
            <h1>{i.title}</h1>
            <img
              src={i.image}
              alt={i.id}
            />
            <p>{i.description}</p>
          </div>
        ))}
    </div>
  );
};
export default SinglePage;
