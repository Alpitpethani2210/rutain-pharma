import React, { useState } from 'react';
import { productData } from '../jsondata';
import { Button } from './Button';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all products into a single array for easier search and display
  const allProducts = productData.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.category,
    }))
  );

  // Filter products based on the search term
  const filteredProducts = searchTerm
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allProducts; // Show all products if no search term

  // Group products by category for display
  const groupedProducts = productData.map((category) => ({
    categoryName: category.category,
    products: filteredProducts.filter((product) => product.category === category.category).slice(0, 4),
  }));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {groupedProducts.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          <p className="text-center text-[36px] my-5 font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#175856] to-[#32BEBA]">
            {group.categoryName}
          </p>
          <div className="grid grid-cols-2 ">
            {group.products.length > 0 ? (
              group.products.map((product, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border-b border-r border-gray-200"
                >
                  <h3 className="mb-2 text-[22px] border-b-2 font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#175856] to-[#32BEBA]">
                    {product.name}
                  </h3>
                  <div className="flex gap-5">
                    <div className="my-auto">
                      <img src="images/product.png" alt="Product" />
                    </div>
                    <div className="w-[50%]">
                      {product.casNo && <p className="text-gray-600 border-b py-2">CAS No: {product.casNo}</p>}
                      {product.storage && <p className="text-gray-600 border-b py-2">Storage: {product.storage}</p>}
                      {product.color && <p className="text-gray-600 border-b py-2">Color: {product.color}</p>}
                      {product.smell && <p className="text-gray-600 border-b py-2">Smell: {product.smell}</p>}
                      {product.placeOfOrigin && <p className="text-gray-600 border-b py-2">Place of Origin: {product.placeOfOrigin}</p>}
                      {product.grade && <p className="text-gray-600 border-b py-2">Grade: {product.grade}</p>}
                      {product.purity && <p className="text-gray-600 border-b py-2">Purity: {product.purity}</p>}
                      {product.supplyAbility && <p className="text-gray-600 border-b py-2">Supply Ability: {product.supplyAbility}</p>}
                      {product.application && <p className="text-gray-600 border-b py-2">Application: {product.application}</p>}
                      {product.otherNames && <p className="text-gray-600 border-b py-2">Other Names: {product.otherNames}</p>}
                      {product.molecularFormula && <p className="text-gray-600 border-b py-2">Molecular Formula: {product.molecularFormula}</p>}
                    </div>
                  </div>
                  {product.price && (
                    <p className="mb-2 text-[22px] text-center mt-5 font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#175856] to-[#32BEBA]">
                      Price: {product.price} INR/Kilograms
                    </p>
                  )}
                  <Button
                    shape="round"
                    className={`min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-black ${
                      index % 2 === 0 ? 'bg-[#A1EEE1]' : 'bg-[#FECCE3]'
                    } shadow-[0_6px_30px_rgba(105,223,208,0.6)]`}
                    style={{
                      boxShadow:
                        index % 2 === 0
                          ? '0 6px 30px rgba(105, 223, 208, 0.6)'
                          : '0 6px 30px rgba(233, 31, 100, 0.5)',
                    }}
                  >
                    Send Inquiry
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        <Button
                      shape="round"
                      className={`min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-black ${
                        'bg-[#A1EEE1]' 
                        } shadow-[0_6px_30px_rgba(105,223,208,0.6)]`}
                        style={{
                          boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)'
                          
                        }}
                        >
                      Read More
                    </Button>
                      </div>
                  ))}
    </div>
  );
};

export default ProductList;
