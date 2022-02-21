import React from 'react';
import './Product.css'
import Productitem from './Productitem';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../Redux/fetchingdata';






export default function Product() {
    const {data,error,isloading}=useGetAllProductsQuery()
   
  return (
      <>
      <div className="product-title">
          <h1>BEST SELLING</h1>
          <Link className='product-title-link' to='/product/women'> view all</Link>
      </div>
      <div className="products">
          {data && data.map(product=>(
              <Productitem product={product}/>
              

          ))}

      </div>
      </>
  );
}

