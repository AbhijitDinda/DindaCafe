import { useState } from 'react';

function MenuItem() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const menuItems = [
    {
      id: 1,
      name: 'Supreme Pizza',
      type: 'Pizza',
      imgSrc: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 2,
      name: 'Meat Lovers',
      type: 'Pizza',
      imgSrc: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 3,
      name: 'Feta & Spinach',
      type: 'Salads',
      imgSrc: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 4,
      name: 'Cheese Pizza',
      type: 'Pizza',
      imgSrc: 'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 5,
      name: 'Classic Burger',
      type: 'Burgers',
      imgSrc: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$$',
    },
    {
      id: 6,
      name: 'Chicken Wings',
      type: 'Chicken',
      imgSrc: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
  ];

  const filterMenuItems = () => {
    return menuItems.filter((item) => {
      return (
        (typeFilter === 'All' || item.type === typeFilter) &&
        (priceFilter === 'All' || item.price === priceFilter)
      );
    });
  };

  return (
    <div className="max-w-[1240px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      <div className="flex flex-col lg:flex-row justify-between my-4">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            {['All', 'Burgers', 'Pizza', 'Salads', 'Chicken'].map((type) => (
              <button
                key={type}
                className={`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 ${typeFilter === type ? 'bg-orange-600 text-white' : ''
                  }`}
                onClick={() => setTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            {['All', '$', '$$', '$$$', '$$$$'].map((price) => (
              <button
                key={price}
                className={`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 ${priceFilter === price ? 'bg-orange-600 text-white' : ''
                  }`}
                onClick={() => setPriceFilter(price)}
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {filterMenuItems().map((item) => (
          <div key={item.id} className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
            <img className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg" src={item.imgSrc} alt={item.name} />
            <div className="flex justify-between px-2 py-4">
              <p>{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-md">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItem;
