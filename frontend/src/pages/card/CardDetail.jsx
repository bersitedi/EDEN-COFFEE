import React from "react";
import { useParams } from "react-router-dom";
import categories from "../../data/categories";
import SimilarCards from "./SimilarCards";
import MainLayout from "../../components/MainLayout";

const CardDetail = () => {
  const { id } = useParams();

  const card = categories
    .flatMap((category) => category.cards)
    .find((card) => card.id === parseInt(id));

  if (!card) {
    return <div className="text-center mt-8 text-red-500">Card not found</div>;
  }

  const similarCards = categories
    .flatMap((category) => category.cards)
    .filter((c) => c.id !== card.id)
    .slice(0, 8);

  return (
    <MainLayout>
      <div className="mb-3 ml-10 mt-5 shadow-md w-full">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-600">
          Lorem ipsum dolor sit amet,{" "}
          <span className="text-cta text-xl lg:text-2xl">{card.title}</span>
        </h1>
      </div>
      <section className="container mx-auto max-w-5xl flex flex-col lg:flex-row px-5 py-5 gap-5 lg:items-start">
        <div className="flex-1">
          <div className="bg-white max-w-lg mx-auto shadow-md rounded-lg p-4">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="rounded-lg w-full mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {similarCards && <SimilarCards originalSimilarCards={similarCards} />}
        </div>
      </section>
      <div className="mt-10 p-8">
        <h1 className="text-2xl text-blue-500 font-bold mb-2">Our Products</h1>
        <p className="text-gray-600 font-semibold">
          Lorem ipsum dolor sit amet,{" "}
          <span className="font-bold text-gray-800 text-lg">
            consectetur adipiscing
          </span>{" "}
          elit. Sed hendrerit diam in bibendum consequat. Fusce consequat
          pharetra mauris, eget rhoncus libero feugiat ut. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Phasellus euismod, magna sed laoreet mollis, ex purus faucibus nulla,
          ac fermentum nunc justo vel odio. Cras sagittis vehicula arcu nec
          varius. Aliquam eu quam vel nisi tempus ultrices vel vitae nunc. Donec
          varius sollicitudin purus ut fermentum. Vivamus bibendum velit vel
          lacus scelerisque,
        </p>
      </div>
    </MainLayout>
  );
};

export default CardDetail;
