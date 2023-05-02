import React, { useRef } from 'react';
import starIcon from '../../assets/star.svg';
import pinIcon from '../../assets/pin.png';
import vertEllipsisIcon from '../../assets/vertical-ellipsis.png';
import {
  AiFillLock,
  AiFillStar,
  BsFillPinFill,
  FaEllipsisV,
  BsFillTrashFill,
  FaFolder,
  IoIosShareAlt,
} from 'react-icons/all';
import useRipple from '../Ripple/useRipple';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

interface FolderCardProps {
  name: string;
  createDate: string;
}
const FolderCard = (props: FolderCardProps) => {
  const { name, createDate } = props;

  const ref = useRef<HTMLAnchorElement>(null);
  const ripples = useRipple(ref);

  return (
    <Link
      to=""
      ref={ref}
      className="group shadow relative flex md:flex-col items-center md:items-start md:justify-normal gap-4 px-5 py-3 bg-secondary rounded-lg border border-gray-200 overflow-hidden cursor-pointer focus:outline outline-2 outline-primary"
    >
      {ripples}
      <FaFolder className="text-primary_light text-3xl" />
      <div className="flex flex-col items-start">
        <div className="text-lg font-bold tracking-tight text-gray-900">{name}</div>
        <div className="text-gray-500 xs:text-sm text-xs">{createDate}</div>
      </div>
      <div className="absolute right-0 md:top-0">
        <div className="flex gap-2 px-1 py-2 ease-in duration-100 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100">
          <Button variant="transparent" Icon={AiFillStar} className="p-1 rounded-full" />
          <Button variant="transparent" Icon={BsFillPinFill} className="p-1 rounded-full" />
          <Button variant="transparent" Icon={FaEllipsisV} className="p-1 rounded-full" />
        </div>
      </div>
    </Link>
  );
};

export default FolderCard;
