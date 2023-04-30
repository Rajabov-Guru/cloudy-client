import React from 'react';
import homeIcon from './assets/home.svg';
import myFilesIcon from './assets/myFiles.svg';
import starIcon from './assets/star.svg';
import trashIcon from './assets/trash.svg';
import menuIcon from './assets/menu.png';
import searchIcon from './assets/search.svg';
import ellipsisIcon from './assets/ellipsis.png';
import rightArrow from './assets/right-arrow.png';
import gridIcon from './assets/grid.png';
import uploadIcon from './assets/upload.png';
import folderIcon from './assets/folder.png';
import pinIcon from './assets/pin.png';
import vertEllipsisIcon from './assets/vertical-ellipsis.png';
import favoritesIcon from './assets/favorites.png';
import closedLockIcon from './assets/padlock-closed.png';
import shareIcon from './assets/share.png';
import trashCanIcon from './assets/trash-can.png';
import downloadIcon from './assets/download.png';

const CommonDashboard = () => {
  return (
    <div className="flex h-screen bg-tertiary w-full">
      {/*LEFT SIDEBAR*/}
      <section className="h-full bg-tertiary text-white py-5 md:w-2/6 lg:w-1/6 hidden lg:block">
        <div className="container mx-auto px-9">
          <a href="#g">
            <h1 className="mx-auto">CLOUDY</h1>
          </a>
        </div>
        <ul className="flex flex-col flex-grow justify-items-center items-center text-sm xl:text-xl gap-5">
          <a
            href="#g"
            className="w-full px-6 xl:px-9 py-3 cursor-pointer relative before:border-primary_light focus:before:border-y active:before:border-y-4 focus:before:border-r-8 before:rounded-r-[16px] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-0 before:transition-[width] before:ease-in before:duration-200 hover:before:w-[85%]"
          >
            <li className="flex gap-3 z-40">
              <img alt="hoho" src={homeIcon} className="z-40" />
              <p className="z-40">Dasboard</p>
            </li>
          </a>
          <a
            href="#g"
            className="w-full px-6 xl:px-9 py-3 cursor-pointer relative before:border-primary_light focus:before:border-y active:before:border-y-4 focus:before:border-r-8 before:rounded-r-[16px] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-0 before:transition-[width] before:ease-in before:duration-200 hover:before:w-[85%]"
          >
            <li className="flex gap-3 z-40">
              <img alt="hoho" src={myFilesIcon} className="z-40" />
              <p className="z-40">My Cloud</p>
            </li>
          </a>
          <a
            href="#g"
            className="w-full px-6 xl:px-9 py-3 cursor-pointer relative before:border-primary_light focus:before:border-y active:before:border-y-4 focus:before:border-r-8 before:rounded-r-[16px] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-0 before:transition-[width] before:ease-in before:duration-200 hover:before:w-[85%]"
          >
            <li className="flex gap-3 z-40">
              <img alt="hoho" src={starIcon} className="z-40" />
              <p className="z-40">Favorites</p>
            </li>
          </a>
          <a
            href="#g"
            className="w-full px-6 xl:px-9 py-3 cursor-pointer relative before:border-primary_light focus:before:border-y active:before:border-y-4 focus:before:border-r-8 before:rounded-r-[16px] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-0 before:transition-[width] before:ease-in before:duration-200 hover:before:w-[85%]"
          >
            <li className="flex gap-3 z-40">
              <img alt="hoho" src={myFilesIcon} className="z-40" />
              <p className="z-40">All Files</p>
            </li>
          </a>
          <a
            href="#g"
            className="w-full px-6 xl:px-9 py-3 cursor-pointer relative before:border-primary_light focus:before:border-y active:before:border-y-4 focus:before:border-r-8 before:rounded-r-[16px] before:z-0 before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:bg-primary before:w-0 before:transition-[width] before:ease-in before:duration-200 hover:before:w-[85%]"
          >
            <li className="flex gap-3 z-40">
              <img alt="hoho" src={trashIcon} className="z-40" />
              <p className="z-40">Trash</p>
            </li>
          </a>
        </ul>
        <div className="">footer</div>
      </section>

      {/*RIGHT SECTION*/}
      <section className="flex flex-col w-full lg:w-5/6">
        {/*HEADER*/}
        <div className="h-[8%] lg:rounded-tl-[30px] w-full bg-quinary flex items-center justify-between gap-3 px-2 sm:px-10 lg:px-20 drop-shadow-sm">
          <img
            alt="hoho"
            src={menuIcon}
            className="w-5 h-5 sm:w-7 sm:h-7 lg:hidden cursor-pointer active:scale-50 ease-out duration-150"
          />
          <div className="relative rounded-full overflow-hidden w-4/5 lg:w-3/5 drop-shadow-md">
            <input
              type="text"
              placeholder="Search"
              className="text-xl lg:text-2xl w-full h-full py-2 pr-4 pl-12 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:placeholder-gray-400"
            />
            <div className="absolute inset-y-0 left-0 flex items-center px-3 rounded-[50%] cursor-pointer active:scale-50 ease-out duration-150">
              <img alt="hoho" src={searchIcon} className="w-5 h-5" />
            </div>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer active:scale-75 ease-out duration-150">
            <img
              alt="hoho"
              src="https://avatars.dicebear.com/api/avataaars/svshbhjcdbh.svg"
              className="rounded-full border"
            />
          </div>
        </div>

        <section className="flex w-full h-[92%]">
          {/*MAIN SECTION*/}
          <section className="h-full bg-quarternary flex-grow flex-shrink-0 w-full md:w-1/2 lg:w-3/4 md:rounded-bl-[30px] overflow-auto pt-5">
            <div className="flex px-3 md:px-5 justify-between items-center">
              <div className="flex gap-1 md:gap-4 items-center md:text-xl">
                <div className="hover:bg-gray-300 px-2 py-1 rounded-full cursor-pointer">
                  <img alt="hoho" src={ellipsisIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                </div>
                <img alt="hoho" src={rightArrow} className="w-3 h-3 lg:w-4 lg:h-4" />
                <a href="#g" className="hover:bg-gray-300 px-2 py-1 rounded-full">
                  My Cloud
                </a>
                <img alt="hoho" src={rightArrow} className="w-3 h-3 lg:w-4 lg:h-4" />
                <a href="#g" className="hover:bg-gray-300 px-2 py-1 rounded-full">
                  NewFolder
                </a>
              </div>
              <div className="flex gap-2 md:gap-4">
                <div className="p-3 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                  <img alt="hoho" src={gridIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                </div>
                <button className="bg-primary_light text-white px-4 py-2 rounded-xl flex gap-2 items-center justify-center">
                  <p className="hidden sm:block">Upload</p>
                  <img alt="hoho" src={uploadIcon} className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="px-4 mt-5">
              <p className="text-gray-500 mb-4">Folders</p>
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 px-3 py-1 bg-quarternary_dark rounded-lg">
                  <img alt="hoho" src={folderIcon} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-sm lg:text-base">NewFolder</div>
                    <div className="text-gray-500 text-sm">12.07.2001</div>
                  </div>
                  <div className="absolute right-0 top-0">
                    <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:hover:opacity-100">
                      <img alt="hoho" src={starIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={pinIcon} className="w-4 h-4 cursor-pointer" />
                      <img alt="hoho" src={vertEllipsisIcon} className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mt-5">
              <p className="text-gray-500 mb-4">Files</p>
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">Files</div>
            </div>
          </section>

          {/*INFO BAR*/}
          <section className="h-full bg-white md:w-1/4 lg:w-1/4 hidden md:block">
            <div className="container h-full mx-auto px-4 py-8 flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <img
                  alt="hoho"
                  src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
                  className="rounded-2xl"
                />
                <div className="flex justify-between">
                  <div className="py-[0.65rem] w-1/6 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                    <img alt="hoho" src={favoritesIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <div className="py-[0.65rem] w-1/6 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                    <img alt="hoho" src={pinIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <div className="py-[0.65rem] w-1/6 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                    <img alt="hoho" src={closedLockIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <div className="py-[0.65rem] w-1/6 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                    <img alt="hoho" src={shareIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <div className="py-[0.65rem] w-1/6 h-auto bg-[#D6DEF7] rounded-xl cursor-pointer active:scale-75 ease-out duration-150 flex justify-center items-center">
                    <img alt="hoho" src={trashCanIcon} className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                </div>
                <p className="font-bold lg:text-xl">My NFT photo</p>
                <p className="mt-5 font-bold">info:</p>
                <div className="flex flex-col gap-1 justify-center">
                  <div className="flex items-center justify-between border-b">
                    <p className=" text-gray-500">type:</p>
                    <p className="text-sm lg:text-xl">png / Image</p>
                  </div>
                  <div className="flex items-center justify-between border-b">
                    <p className="text-gray-500">size:</p>
                    <p className="text-sm lg:text-xl ">25kb</p>
                  </div>
                  <div className="flex items-center justify-between border-b">
                    <p className="text-gray-500">upload date:</p>
                    <p className="text-sm lg:text-xl">12.07.2001</p>
                  </div>
                  <div className="flex items-center justify-between border-b">
                    <p className="text-gray-500">last update:</p>
                    <p className=" text-sm lg:text-xl ">12.07.2001</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-primary_light text-white w-full px-4 py-2 rounded-xl flex gap-2 items-center justify-center">
                  <p>Download</p>
                  <img alt="hoho" src={downloadIcon} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CommonDashboard;
