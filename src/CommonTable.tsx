import React from 'react';
import Checkbox from './components/Checkbox/Checkbox';
import FileImage from './components/FileImage/FileImage';

const CommonTable = () => {
  const ext = 'docx';
  return (
    <div className="shadow-md sm:rounded-lg">
      <table className="overflow-x-auto overflow-y-hidden min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <td className="p-4">
              <Checkbox />
            </td>
            <td className="px-6 py-3">Type</td>
            <td className="px-6 py-3">File name</td>
            <td className="px-6 py-3">Size</td>
            <td className="px-6 py-3">Upload</td>
            <td className="px-6 py-3">Update</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <Checkbox />
            </td>
            <td className="w-4 p-4">
              <div className="max-h-7 flex w-full">
                <img
                  className="rounded-md object-cover object-center flex-grow-0"
                  alt="sa"
                  src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
                />
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">MyFile.png</td>
            <td className="px-6 py-4">2kb</td>
            <td className="px-6 py-4">12.07.2001</td>
            <td className="flex items-center px-6 py-4 space-x-3">13.07.2001</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <Checkbox />
            </td>
            <td className="w-4 p-4">
              <div className="max-h-7 flex w-full">
                <img
                  className="rounded-md object-cover object-center flex-grow-0"
                  alt="sa"
                  src="https://ic.pics.livejournal.com/shakko.ru/2710882/3965577/3965577_original.jpg"
                />
              </div>
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">MyFile.png</td>
            <td className="px-6 py-4">2kb</td>
            <td className="px-6 py-4">12.07.2001</td>
            <td className="flex items-center px-6 py-4 space-x-3">13.07.2001</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <Checkbox />
            </td>
            <td className="w-4 p-4">
              <FileImage ext={ext} size="small" />
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">MyFile.docx</td>
            <td className="px-6 py-4">2kb</td>
            <td className="px-6 py-4">12.07.2001</td>
            <td className="flex items-center px-6 py-4 space-x-3">13.07.2001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
