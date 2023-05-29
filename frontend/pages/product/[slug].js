import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
// import { fetchDataFromApi } from "@/utils/api";
// import { getDiscountedPricePercentage } from "@/utils/helper";
// import ReactMarkdown from "react-markdown";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "@/store/cartSlice";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails() {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
        <div  className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        {/* Left Column Start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
               <ProductDetailsCarousel/>
        </div>
        {/* Left Column End */}
        {/* Right Column Start */}
        <div className="flex-[1] py-3">

            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
                Jordan Retro 6 G
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
                Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                    MRP : $3456.00
                </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
                {/* HEADING START */}
                <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">
                        Select Size
                    </div>
                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                        Select Guide
                    </div>
                </div>
                {/* HEADING END */}

                {/* SIZE START */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK 6 
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK 7
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK 8
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK 9
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                        UK 10
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                        UK 6 
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                        UK 6 
                    </div>
                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                        UK 6 
                    </div>
                </div>
                {/* SIZE END */}

                {/* SHOW ERROR START */}
                <div className="text-red-600 mt-1">
                    Size Selection is Required
                </div>
                {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
           <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
            Add to Cart
           </button> 
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                    <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
                <div className="text-lg font-bold mb-5">
                    Product Details
                </div>
                <div className="text-md mb-5">
                    Hello ekfnokwnv fnsrkjg rwm,gjkw gkerbkje vkevkjberkgem eknvfkj vvebve, bkd er ve vjke ble bj ebej rbkreblm erbkelkb el bkje bleb el bkej ble be bke bl;e bjk erblk evelkv le vkje le vbkje vk efkv efi  eiv erkl vje vk eijv j  ejvn ejk voke vlke   ero vneok vlke vke rvkev ek vkjer vkjer vje v;lae lkwr vke lv enkv er v ekvj eklv elkv erjk vlef v ev rej vlke vje vlke v  ekjv ekv elk vek vejk verkj vlek 
                </div>
                <div className="text-md mb-5">
                    Hello ekfnokwnv fnsrkjg rwm,gjkw gkerbkje vkevkjberkgem eknvfkj vvebve, bkd er ve vjke ble bj ebej rbkreblm erbkelkb el bkje bleb el bkej ble be bke bl;e bjk erblk evelkv le vkje le vbkje vk efkv efi  eiv erkl vje vk eijv j  ejvn ejk voke vlke   ero vneok vlke vke rvkev ek vkjer vkjer vje v;lae lkwr vke lv enkv er v ekvj eklv elkv erjk vlef v ev rej vlke vje vlke v  ekjv ekv elk vek vejk verkj vlek 
                </div>
            </div>
        </div>
        {/* Right Column End */}   
        </div>

         <RelatedProducts/>
         
        </Wrapper>
    </div>
  )
}
