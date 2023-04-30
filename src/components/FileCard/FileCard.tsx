import React, { useRef } from 'react';
import { AiFillStar, BsFillPinFill, FaEllipsisV } from 'react-icons/all';
import Button from '../Button/Button';
import useRipple from '../Ripple/useRipple';
import FileImage from '../FileImage/FileImage';

interface FileCardProps {
  name: string;
  size: string;
  uploadDate: string;
  url?: string;
}

const FileCard = (props: FileCardProps) => {
  const { name, size, uploadDate, url } = props;

  const ref = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(ref);

  return (
    <button
      ref={ref}
      className="rounded-lg border border-gray-200 flex flex-col shadow group relative bg-secondary overflow-hidden cursor-pointer focus:outline outline-2 outline-primary"
    >
      {ripples}
      <div className="bg-dark_white flex h-full w-full justify-center">
        {url && (
          <div className="flex max-h-[135px] w-full">
            <img className="object-cover object-center w-full h-full flex-grow-0" src={url} alt="" />
          </div>
        )}
        {!url && <FileImage ext="docx" size="large" />}
      </div>
      <div className="p-4 flex flex-col items-start">
        <h5 className="text-lg font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="font-normal text-gray-500">
          {uploadDate} | {size}
        </p>
      </div>
      <div className="absolute right-0 md:top-0">
        <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
          <Button variant="transparent" Icon={AiFillStar} className="p-1 rounded-full" />
          <Button variant="transparent" Icon={BsFillPinFill} className="p-1 rounded-full" />
          <Button variant="transparent" Icon={FaEllipsisV} className="p-1 rounded-full" />
        </div>
      </div>
    </button>
  );
};

export default FileCard;
