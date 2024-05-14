import { useState } from 'react';

const itemsData = [
  {
    id: 1,
    name: 'Fast Food',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
  },
  {
    id: 2,
    name: 'Pizza',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
  },
  {
    id: 3,
    name: 'Wings',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
  },
  {
    id: 4,
    name: 'Indian',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
  },
  {
    id: 5,
    name: 'Latest Deals',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
  },
  {
    id: 6,
    name: 'Restaurant Rewards',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
  },
  {
    id: 7,
    name: 'Best Overall',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
  },
  {
    id: 8,
    name: 'Shipped Free',
    imgSrc: 'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
  },
];

function Items() {
  const [category, setCategory] = useState('All');

  const handleFilter = (filterCategory) => {
    setCategory(filterCategory);
  };

  const filteredItems = category === 'All' ? itemsData : itemsData.filter(item => item.name === category);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      <div className="flex justify-center gap-4 pt-10">
        {/* <button onClick={() => handleFilter('All')} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">All</button>
        {itemsData.map(item => (
          <button key={item.id} onClick={() => handleFilter(item.name)} className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">{item.name}</button>
        ))} */}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200 hover:scale-105 duration-300"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-16" src={item.imgSrc} alt={item.name} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Items;
