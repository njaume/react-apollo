import styled from 'styled-components';

export const ProductCardGrid = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`;

export const ProductPrice = styled.h3`
    font-weight: bold;
    font-size: 1rem;
    margin: 0 1rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;

export const HeaderStyled = styled.header`
  background-color: #007bff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const OrderTotal = styled.h2`
  font-size: 1.5rem;
  color: white;
`;