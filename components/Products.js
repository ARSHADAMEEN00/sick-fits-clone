import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import ProductList from "./Product";
const ALL_PRODUCT_QUERY = gql`
  query ALL_PRODUCT_QUERY {
    allProducts {
      id
      name
      description
      photo {
        image {
          id
          publicUrlTransformed
        }
      }
      price
      status
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

function Product() {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);

  if (loading) return <p>Loading ....</p>;
  if (error) return <p>error:{error.message}</p>;

  return (
    <>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <ProductList product={product} key={product.id} />
        ))}
      </ProductsListStyles>
    </>
  );
}

export default Product;
