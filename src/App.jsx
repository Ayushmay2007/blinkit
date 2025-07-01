import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from './commanComponent/Header'
import bannerImage from "./assets/image/Group-33704.webp"
import { Link } from 'react-router-dom'

function App() {

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]


  };

  return (
    <>
      <Header />

      {/* seaction 1 start */}

      <section className='max-w-[1200px] mx-auto'>
        <img src={bannerImage} />
      </section>

      {/* seaction 1 end */}



      {/* seaction 2 start */}

      <section className=' max-w-[1200px]  pl-[20px]  mx-auto  '>
        <div className="grid lg:grid-cols-[27%_27%_27%_auto] gap-[20px]">
          <img src="../public/Newimages/pharmacy-WEB.avif" />
          <img src="../public/Newimages/Pet-Care_WEB.avif" />
          <img src="../public/Newimages/babycare-WEB.avif" />
        </div>
      </section>

      {/* seaction 2 end */}



      {/* seaction 3 start */}

      <section className='max-w-[1200px] mx-auto '>
        <div className="grid lg:grid-cols-10">
          <img src={imgi_5_paan-corner_web.png} />
          <Link to={"/dairy"}><img src="../public/Newimages/imgi_6_Slice-2_10.png" /></Link>
          <img src="../public/Newimages/imgi_7_Slice-3_9.png" />
          <img src="../public/Newimages/imgi_8_Slice-4_9.png" />
          <img src="../public/Newimages/imgi_9_Slice-5_4.png" />
          <img src="../public/Newimages/imgi_10_Slice-6_5.png" />
          <img src="../public/Newimages/imgi_11_Slice-7_3.png" />
          <img src="../public/Newimages/imgi_12_Slice-8_4.png" />
          <img src="../public/Newimages/imgi_13_Slice-9_3.png" />
          <img src="../public/Newimages/imgi_14_Slice-10.png" />
        </div>
      </section>

      {/* seaction 3 end */}



      {/* seaction 4 start */}

      <section className='max-w-[1200px] mx-auto'>
        <div className=" grid lg:grid-cols-10">
          <img src="../public/Newimages/imgi_15_Slice-11.png" />
          <img src="../public/Newimages/imgi_16_Slice-12.png" />
          <img src="../public/Newimages/imgi_17_Slice-13.png" />
          <img src="../public/Newimages/imgi_18_Slice-14.png" />
          <img src="../public/Newimages/imgi_19_Slice-15.png" />
          <img src="../public/Newimages/imgi_20_Slice-16.png" />
          <img src="../public/Newimages/imgi_21_Slice-17.png" />
          <img src="../public/Newimages/imgi_22_Slice-18.png" />
          <img src="../public/Newimages/imgi_23_Slice-19.png" />
          <img src="../public/Newimages/imgi_24_Slice-20.png" />
        </div>
      </section>

      {/* seaction 4 end */}



      {/* seaction 5 start */}

      <section className='max-w-[1200px] mx-auto pl-[20px]'>
        <h1 className='text-[35px] font-bold'>Dairy, Bread & Eggs</h1>
      </section>

      {/* seaction 5 end */}



      {/* seaction 6 start */}

      <section className='max-w-[1200px] mx-auto pl-[35px] pr-[35px] '>
        <Slider {...settings}>

          <div className=" px-2">
            <div className="  card border-gray-200 rounded-lg shadow-xl ">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_25_5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned <br />   Milk</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹35</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_27_6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Masti Pouch <br /> Curd</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹35</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_28_1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Gold Full Cream <br /> Milk</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹35</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_29_73bcc2db-0799-4014-ab75-029bfcdb8375.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Masti Cup <br /> Curd</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹24</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_30_de613aee-7992-4848-8644-52792012ab56.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Stone Brown <br /> Bread </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹48</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_31_df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Premium White Bread  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹55</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/imgi_32_0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black"> Amul Salted <br /> Butter </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹62</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Soft White Bread</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹40</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Egg First Protein White Eggs</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹62</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Sliced Wheat Bread  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹22</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/64f6a43c-423e-406a-be77-459c0dea9665.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Jumbo White Bread</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹48</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taaza Toned Milk</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹17</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Pure Milk Cheese Slices</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹145</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/76575a61-7b42-49bc-95a0-675c17578346.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Vijay Pav <br /> Bread</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹38</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className=" card border-gray-200  rounded-lg shadow-xl">
              <a href="#">
                <img className="p-8 rounded-t-lg" src="../public/Newimages/170a.jpg" alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <p className='w-[70px] text-center font-bold flex bg-[#f0f0f0] text-[10px]'>
                  <img src="../public/Newimages/imgi_26_15-mins.png" className='timer' />13 MINS</p>
                <a href="#">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Cheese <br /> Cubes</h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-black">₹135</span>
                  <button type="button" className=" Addbutton  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ps-4">ADD</button>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </section>

      {/* seaction 6 end */}


    </>
  )
}

export default App
