import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'This is a test product',
    assets: [{ source: 'test-source' }],
    variants: [{ id: '1', price: 10 }],
  };

  const mockHandleAddItem = jest.fn();

  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(
      <ProductCard product={mockProduct} handleAddItem={mockHandleAddItem} />
    );

    expect(getByText(mockProduct.name)).toBeInTheDocument()
    expect(getByAltText(mockProduct.name)).toBeInTheDocument()
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(`$${mockProduct.variants[0].price}`)).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('calls handleAddItem when "Add" button is clicked', () => {
    const { getByText } = render(
      <ProductCard product={mockProduct} handleAddItem={mockHandleAddItem} />
    );

    const addButton = getByText('Add');
    fireEvent.click(addButton);

    expect(mockHandleAddItem).toHaveBeenCalledWith(mockProduct.variants[0].id);
  });
});