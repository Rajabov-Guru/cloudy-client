import React, { ComponentType, FC } from 'react';
import Layout from './components/Layout/Layout';
import SideBar from './components/SideBar/SideBar';
import Stack from './components/Stack/Stack';
import {
  AiFillCloud,
  AiFillFile,
  AiFillHome,
  AiFillLock,
  AiFillStar,
  AiOutlineMenu,
  AiOutlineSearch,
  BsFillGridFill,
  BsFillPinFill,
  BsFillTrashFill,
  FaCloudUploadAlt,
  FaEllipsisH,
  FaFolderPlus,
  ImDownload3,
  IoIosShareAlt,
  MdOutlineWbCloudy,
} from 'react-icons/all';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import Input from './components/Input/Input';
import { WithClasses } from './common/types';
import SideNavbar from './components/SideNavbar/SideNavbar';
import { Link } from 'react-router-dom';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import ButtonLink from './components/ButtonLink/ButtonLink';
import FolderCard from './components/FolderCard/FolderCard';
import FileCard from './components/FileCard/FileCard';
import Image from './components/Image/Image';
import Table from './components/Table/Table';
import Checkbox from './components/Checkbox/Checkbox';
import FileImage from './components/FileImage/FileImage';

interface NavbarItem {
  title: string;
  Icon: ComponentType<WithClasses>;
}

interface Folder {
  name: string;
  createDate: string;
}

interface File {
  name: string;
  size: string;
  uploadDate: string;
  url?: string;
}

const navbarItems: NavbarItem[] = [
  { title: 'Dashboard', Icon: AiFillHome },
  { title: 'My Cloud', Icon: AiFillCloud },
  { title: 'Favorites', Icon: AiFillStar },
  { title: 'All Files', Icon: AiFillFile },
  { title: 'Trash', Icon: BsFillTrashFill },
];

const infoPanel: NavbarItem[] = [
  { title: 'Favorites', Icon: AiFillStar },
  { title: 'Pin', Icon: BsFillPinFill },
  { title: 'Block', Icon: AiFillLock },
  { title: 'Share', Icon: IoIosShareAlt },
  { title: 'Delete', Icon: BsFillTrashFill },
];

const folders: Folder[] = [
  { name: 'NewFolder', createDate: '12.07.2001' },
  { name: 'NewFolder', createDate: '12.07.2001' },
  { name: 'NewFolder', createDate: '12.07.2001' },
  { name: 'NewFolder', createDate: '12.07.2001' },
  { name: 'NewFolder', createDate: '12.07.2001' },
  { name: 'NewFolder', createDate: '12.07.2001' },
];

const files: File[] = [
  { name: 'myFile.docx', size: '2kb', uploadDate: '12.07.2001' },
  {
    name: 'myFile.docx',
    size: '2kb',
    uploadDate: '12.07.2001',
    url: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png',
  },
  { name: 'myFile.docx', size: '2kb', uploadDate: '12.07.2001' },
  {
    name: 'myFilethis.docx',
    size: '2kb',
    uploadDate: '12.07.2001',
    url: 'https://ic.pics.livejournal.com/shakko.ru/2710882/3965577/3965577_original.jpg',
  },
  {
    name: 'myFile.docx',
    size: '2kb',
    uploadDate: '12.07.2001',
    url: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png',
  },
  { name: 'myFile.docx', size: '2kb', uploadDate: '12.07.2001' },
];
const App: FC = () => {
  return (
    <Layout>
      <Layout.SideBar>
        <SideBar>
          <SideBar.Header>
            <div className="ml-16 flex items-center gap-2">
              <MdOutlineWbCloudy />
              <Link to="/">
                <h1 className="mx-auto">CLOUDY</h1>
              </Link>
            </div>
          </SideBar.Header>
          <SideBar.Body>
            <SideNavbar>
              {navbarItems.map((item) => (
                <SideNavbar.Item active={false} key={item.title} Icon={item.Icon} title={item.title} />
              ))}
            </SideNavbar>
          </SideBar.Body>
          <SideBar.Footer>
            <div className="">footer</div>
          </SideBar.Footer>
        </SideBar>
      </Layout.SideBar>
      <Layout.Main>
        <Layout.Header>
          <Stack className="h-full items-center justify-between gap-3 px-3.5 lg:px-20">
            <Button variant="secondary" className="lg:hidden" Icon={AiOutlineMenu}></Button>
            <Input placeholder="Search" Icon={AiOutlineSearch} />
            <Avatar src="https://avatars.dicebear.com/api/avataaars/cloudy.svg" />
          </Stack>
        </Layout.Header>
        <Layout.Body>
          <Layout.Content>
            <div className="xs:flex-row flex py-3 px-3 md:px-5 justify-between xs:items-center flex-col gap-4">
              <BreadCrumbs separator=">">
                <ButtonLink to="#g" Icon={FaEllipsisH}></ButtonLink>
                <ButtonLink to="#g">My Cloud</ButtonLink>
                <ButtonLink to="#g">NewFolder</ButtonLink>
              </BreadCrumbs>
              <div className="flex gap-2 md:gap-3 justify-between xs:justify-normal">
                <div className="flex gap-2 md:gap-3">
                  <Button Icon={BsFillGridFill} variant="quarternary" />
                  <Button Icon={FaFolderPlus} variant="quarternary" />
                </div>
                <Button Icon={FaCloudUploadAlt}>Upload</Button>
              </div>
            </div>
            <div className="px-4 mt-5 my-6 overflow-x-auto">
              <p className="text-gray-500">Folders</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-4">
                {folders.map((fol, index) => (
                  <FolderCard key={index} name={fol.name} createDate={fol.createDate} />
                ))}
              </div>
              <p className="text-gray-500">Files</p>
              <Table>
                <Table.Head>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>Type</Table.Cell>
                  <Table.Cell>File Name</Table.Cell>
                  <Table.Cell>Size</Table.Cell>
                  <Table.Cell>Upload</Table.Cell>
                  <Table.Cell>Update</Table.Cell>
                </Table.Head>
                <Table.Body>
                  {files.map((f, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell>
                        {f.url ? <Image rounded src={f.url} size="small" /> : <FileImage ext="docx" size="small" />}
                      </Table.Cell>
                      <Table.Cell>{f.name}</Table.Cell>
                      <Table.Cell>{f.size}</Table.Cell>
                      <Table.Cell>{f.uploadDate}</Table.Cell>
                      <Table.Cell>{f.uploadDate}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              {/*<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-4">*/}
              {/*  {files.map((fol, index) => (*/}
              {/*    <FileCard key={index} name={fol.name} size={fol.size} url={fol.url} uploadDate={fol.uploadDate} />*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>
          </Layout.Content>
          <Layout.InfoBar>
            <div className="container h-full mx-auto px-4 py-8 flex flex-col gap-5 mb-20">
              <div className="flex flex-col gap-5 h-full">
                <Image
                  src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
                  size="large"
                  rounded
                />
                <div className="flex xl:gap-3 gap-1 justify-between">
                  {infoPanel.map((it) => (
                    <Button variant="quarternary" key={it.title} Icon={it.Icon} />
                  ))}
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
                <Button fullWidth Icon={ImDownload3}>
                  Download
                </Button>
              </div>
            </div>
          </Layout.InfoBar>
        </Layout.Body>
      </Layout.Main>
    </Layout>
  );
};

export default App;
