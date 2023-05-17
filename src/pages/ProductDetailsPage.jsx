import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import ProductDetails from "../Components/Products/ProductDetails";
import { productData } from "../static/data";
import SuggestedProduct from "../Components/Products/SuggestedProduct";
 
const ProductDetailsPage = () => {

    const {name} = useParams();
    const [data,setData] = useState(null)
    const productName = name.replace(/_/g," ");
    
useEffect(() => {
    const data = productData.find((i  ) => i.name === productName);
    setData(data);
},[])

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
        {
          // !eventData && (
            <>
            {data && <SuggestedProduct data={data} />}
            </>
          // )
        }
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetailsPage;