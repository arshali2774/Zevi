import axios from 'axios';
import Accordion from '../../components/Accordian/Accordian';
import Card from '../../components/Card/Card';
import Logo from '../../components/Logo/Logo';
import Search_bar from '../../components/Search_Bar/Search_bar';
import './SearchResult.scss';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  storeAllProducts,
  searchProduct,
  storeAllCategories,
} from '../../slice/SearchResult/SearchResult';
//fetching the data
const fetchStore = async () => {
  try {
    const res = axios.get('https://fakestoreapi.com/products?limit=50');
    return res;
  } catch (error) {
    console.log(error, 'this is error');
  }
};
const searchStore = () => {
  return {
    queryKey: ['gallery'],
    queryFn: fetchStore,
  };
};
const fetchCategories = async () => {
  try {
    const res = axios.get('https://fakestoreapi.com/products/categories');
    return res;
  } catch (error) {
    console.log(error, 'categories');
  }
};
const searchCategories = () => {
  return {
    queryKey: ['categories'],
    queryFn: fetchCategories,
  };
};
export const searchLoader =
  (queryClient, dispatch) =>
  async ({ request }) => {
    try {
      let url = new URL(request.url);
      let searchTerm = url.searchParams.get('search');
      const { data: allProducts } = await queryClient.fetchQuery(searchStore());
      const { data: categories } = await queryClient.fetchQuery(
        searchCategories()
      );
      dispatch(storeAllProducts(allProducts));
      dispatch(searchProduct(searchTerm));
      dispatch(storeAllCategories(categories));
      return searchTerm;
    } catch (error) {
      console.log(error, 'search error');
      return error;
    }
  };
const SearchResult = () => {
  const loaderData = useLoaderData();
  const { filteredProducts, allCategories } = useSelector(
    (store) => store.searchResult
  );
  return (
    <div className='search_result'>
      <nav>
        <Search_bar />
        <Logo />
      </nav>
      <main>
        <h1>Search Results</h1>
        <div className='search_main'>
          <aside className='search_filters'>
            <Accordion
              question='CATEGORIES'
              answer={allCategories}
            />
            <hr />
            <Accordion
              question='PRICE RANGE'
              answer={['Under 500', '1000 to 3000']}
            />
            <hr />
            <Accordion
              question='Ratings'
              answer={[
                [
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                ],
                [
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStarOutline />,
                ],
                [
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                ],
                [
                  <IoIosStar color='gold' />,
                  <IoIosStar color='gold' />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                ],
                [
                  <IoIosStar color='gold' />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                  <IoIosStarOutline />,
                ],
              ]}
            />
          </aside>
          <div className='search_gallery'>
            {filteredProducts.map((item) => {
              return (
                <Card
                  image={item.image}
                  imgName={item.title}
                  key={item.id}
                  isResultPage={true}
                  price={item.price}
                  rate={item.rating.rate}
                  count={item.rating.count}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SearchResult;
