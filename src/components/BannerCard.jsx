import React from 'react';

function BannerCard() {
  const banners = [
    {
      id: 1,
      title: "Sun's Out, BOGO's Out",
      subtitle: "Through 8/26",
      imgSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
      alt: 'Food Offer 1',
    },
    {
      id: 2,
      title: "Sun's Out, BOGO's Out",
      subtitle: "Through 8/26",
      imgSrc: 'https://images.unsplash.com/photo-1634818462211-aa45f43dafdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      alt: 'Food Offer 2',
    },
    {
      id: 3,
      title: "Sun's Out, BOGO's Out",
      subtitle: "Through 8/26",
      imgSrc: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      alt: 'Food Offer 3',
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {banners.map((banner) => (
        <div key={banner.id} className="rounded-xl relative hover:scale-105 duration-500 cursor-pointer">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-4">
            <div>
              <p className="font-bold text-2xl">{banner.title}</p>
              <p>{banner.subtitle}</p>
            </div>
            <button className="border border-white bg-white text-black rounded-xl px-5 py-1 shadow-md">
              Order Now
            </button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={banner.imgSrc} alt={banner.alt} />
        </div>
      ))}
    </div>
  );
}

export default BannerCard;
