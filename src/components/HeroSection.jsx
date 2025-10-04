"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegHeart, FaSearchPlus, FaCog, FaShareAlt } from "react-icons/fa";

const materialOptions = ["Acrylic", "Mirror", "Metal", "Wood", "Metal Canvas"];
const sizeOptions = ["XS: 300 × 300mm", "S: 500 × 500mm", "M: 800 × 800mm", "L: 1200 × 1200mm"];
const frameBorders = [
  { id: "none", label: "None", color: "transparent" },
  { id: "white", label: "White", color: "white" },
  { id: "black", label: "Black", color: "black" },
  { id: "lightGray", label: "Light Gray", color: "#e5e7eb" },
  { id: "silver", label: "Silver", color: "#d1d5db" },
  { id: "gold", label: "Gold", color: "gold" },
  { id: "brown", label: "Brown", color: "#8b5e3c" },
  { id: "navy", label: "Navy", color: "#374151" },
  { id: "bronze", label: "Bronze", color: "#b87333" },
  { id: "carbon", label: "Carbon", color: "repeating-linear-gradient(45deg, #111 0, #111 10px, #222 10px, #222 20px)" },
];
const fittingOptions = ["Magnetic", "Split Batten", "Stand offs"];

const productImages = [
  { id: 1, src: "/img.png", bg: "/bgimg6.jpg" },
  { id: 2, src: "/img.png", bg: "/bgimag2.jpg" },
  { id: 3, src: "/img.png", bg: "/bgimag3.jpg" },
  { id: 4, src: "/img.png", bg: "/bgimg4.jpg" },
  { id: 5, src: "/img.png", bg: "/bgimg5.jpg" },
  { id: 6, src: "/img.png", bg: "/bgimg6.jpg" },
];

const HeroSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("Acrylic");
  const [selectedSize, setSelectedSize] = useState("M: 800 × 800mm");
  const [selectedFrameBorder, setSelectedFrameBorder] = useState("none");
  const [selectedFitting, setSelectedFitting] = useState("Magnetic");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleQuantityIncrease = () => setQuantity(quantity + 1);

  const handleAddToCart = () => {
    console.log({
      material: selectedMaterial,
      size: selectedSize,
      frameBorder: selectedFrameBorder,
      fitting: selectedFitting,
      quantity,
      image: selectedImage.src,
    });
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="flex justify-center mt-35">
      <div className="w-[95%] py-5">
        <p className="pb-5 text-[#6b7280] dark:text-white text-sm">Home / Categories / Abstract / <span className="text-[#111835] dark:text-white">Prismatic Burst</span></p>

        <div className="flex gap-6 justify-between">
          {/* LEFT SIDE - IMAGE GALLERY */}
          <div className="w-1/2 flex justify-center">
            <div
              className="relative flex justify-center items-start rounded-xl transition-all duration-500 bg-cover bg-center p-4"
              style={{
                backgroundImage: `url(${selectedImage.bg})`,
                width: "100%",
                height: "600px",
              }}
            >
              {/* LEFT COLUMN - Thumbnails */}
              <div className="absolute left-4 top-4 flex flex-col space-y-3 bg-transparent">
                {productImages.map((img) => (
                  <button
                    key={img.id}
                    className={`border-2 rounded-md overflow-hidden w-16 h-16`}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      borderColor: selectedImage.id === img.id ? "#2563eb" : "#d1d5db",
                      backgroundImage: `url(${img.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Image
                      src={img.src}
                      width={64}
                      height={64}
                      alt={`Thumbnail ${img.id}`}
                      className="relative z-10"
                    />
                  </button>
                ))}
              </div>

              {/* RIGHT COLUMN - Icons */}
              <div className="absolute right-4 top-4 flex flex-col space-y-3">
                <button className="p-2 bg-white dark:bg-[#1b1b1e] rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#232326]">
                  <FaRegHeart className="text-xl dark:text-white" />
                </button>
                <button className="p-2 bg-white dark:bg-[#1b1b1e] rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#232326]">
                  <FaSearchPlus className="text-xl dark:text-white" />
                </button>
                <button className="p-2 bg-white dark:bg-[#1b1b1e] rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#232326]">
                  <FaCog className="text-xl dark:text-white" />
                </button>
                <button className="p-2 bg-white dark:bg-[#1b1b1e] rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-[#232326]">
                  <FaShareAlt className="text-xl dark:text-white" />
                </button>
              </div>

              {/* MAIN PRODUCT IMAGE */}
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={selectedImage.src}
                  width={700}
                  height={700}
                  alt="Main Product"
                  className="rounded-lg transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="w-1/2">
            <div>
              <span className="bg-[#dc2626] text-white px-3 py-1.5 text-sm rounded-[5px] font-bold">MY STORE</span>
            </div>

            <div className="pt-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vibrant Abstract Rainy Cityscape Wall Art</h1>
            </div>

            {/* Offer Banner */}
            <div className="mt-4 bg-[#6C35FF] text-white px-4 rounded-[10px] py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-semibold">{"Free Priority Production".toUpperCase()}</p>
                  <p className="text-xs font-semibold text-[#c9b5ff] dark:text-white">Bw Smart • Skip the Wait</p>
                </div>
                <div className="flex justify-center items-center text-sm text-[#c9b5ff] dark:text-white">
                  <p>Ends in 03h 00m</p>
                </div>
              </div>

              <div className="pt-5 pb-2">
                <button className="border-2 border-[#c9b5ff] rounded-3xl text-xs font-semibold px-3 py-1.5 mr-2">
                  BUY NOW
                </button>
                | <span className="ml-2 font-bold text-lg">03H : 00M</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="py-5 border-b border-[#d9d9d9] dark:border-gray-700">
              <div className="flex space-x-3 items-center">
                <p className="text-[#666] dark:text-white font-bold line-through text-base">£159.00</p>
                <p className="font-bold text-lg text-gray-900 dark:text-white">£111.30 GBP</p>
                <p className="text-[#ff4444] text-xs font-semibold dark:text-white">30% OFF</p>
              </div>
              <div>
                <p className="text-[#666] dark:text-white text-sm">Tax included.</p>
              </div>
            </div>

            {/* Material Selector */}
            <div className="py-5 border-b-2 border-[#d9d9d9] dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Material : </p>
                  <p className="text-[#666] dark:text-white text-sm pl-2">{selectedMaterial}</p>
                </div>
                <IoMdInformationCircleOutline />
              </div>
              <div className="flex space-x-3 mt-2 flex-wrap">
                {materialOptions.map((material, index) => (
                  <button
                    key={index}
                    className={`text-sm font-bold rounded-[5px] px-3 py-2 cursor-pointer ${
                      selectedMaterial === material ? "bg-black text-white dark:bg-[#6C35FF] dark:text-white" : "bg-gray-200 text-gray-700 dark:bg-[#1b1b1e] dark:text-white"
                    }`}
                    onClick={() => setSelectedMaterial(material)}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="py-5 border-b border-[#d9d9d9] dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Size : </p>
                  <p className="text-[#666] dark:text-white text-sm pl-2">{selectedSize}</p>
                </div>
                <IoMdInformationCircleOutline />
              </div>
              <div className="flex space-x-3 mt-2 flex-wrap">
                {sizeOptions.map((size, index) => (
                  <button
                    key={index}
                    className={`text-sm font-bold rounded-[5px] px-3 py-2 cursor-pointer ${
                      selectedSize === size ? "bg-black text-white dark:bg-[#6C35FF] dark:text-white" : "bg-gray-200 text-gray-700 dark:bg-[#1b1b1e] dark:text-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Border Selector */}
            <div className="py-5 border-b border-[#d9d9d9] dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Frame Border : </p>
                  <p className="text-[#666] dark:text-white text-sm pl-2">
                    {frameBorders.find((b) => b.id === selectedFrameBorder)?.label}
                  </p>
                </div>
                <IoMdInformationCircleOutline />
              </div>
              <div className="flex space-x-3 mt-2 flex-wrap">
                {frameBorders.map((border) => (
                  <button
                    key={border.id}
                    className={`w-10 h-10 rounded-md border-2 cursor-pointer ${
                      selectedFrameBorder === border.id ? "border-blue-600" : "border-gray-300 dark:border-gray-700"
                    }`}
                    style={{ background: border.color }}
                    onClick={() => setSelectedFrameBorder(border.id)}
                  />
                ))}
              </div>
            </div>

            {/* Fittings */}
            <div className="py-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Fittings : </p>
                  <p className="text-[#666] dark:text-white text-sm pl-2">{selectedFitting}</p>
                  <p className="text-[#ff4444] text-xs pl-4 font-semibold dark:text-white">Tool free option</p>
                </div>
                <IoMdInformationCircleOutline />
              </div>
              <div className="flex space-x-3 mt-2 flex-wrap">
                {fittingOptions.map((fitting, index) => (
                  <button
                    key={index}
                    className={`text-sm font-bold rounded-[5px] px-3 py-2 cursor-pointer ${
                      selectedFitting === fitting ? "bg-black text-white dark:bg-[#6C35FF] dark:text-white" : "bg-gray-200 text-gray-700 dark:bg-[#1b1b1e] dark:text-white"
                    }`}
                    onClick={() => setSelectedFitting(fitting)}
                  >
                    {fitting}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center border rounded-lg overflow-hidden w-1/3 dark:border-gray-700">
                  <button className="px-4 py-2 text-lg font-bold hover:bg-gray-100 dark:hover:bg-[#1b1b1e]" onClick={handleQuantityDecrease}>
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button className="px-4 py-2 text-lg font-bold hover:bg-gray-100 dark:hover:bg-[#1b1b1e]" onClick={handleQuantityIncrease}>
                    +
                  </button>
                </div>

                <button
                  className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full cursor-pointer"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-white">More payment options available at checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
