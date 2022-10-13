import Header from "../../Components/Header/header";
import StickerPack, {
  IPackProps,
} from "../../Components/StickerPack/stickerPack";
import React from "react";
import ProfilePic from "../../Images/kermit.png";
import { Link, useNavigate } from "react-router-dom";
import { Masonry } from "@mui/lab";
const Profile = () => {
  const page = "Profile";

  const packValues: IPackProps[] = [
    {
      title: "Unknown sticker pack",
      author: "User",
      tags: ["gdfg"],
    },
    {
      title: "Cute Smiley Pack",
      author: "User",
      tags: ["smiley", "rainbow", "clouds", "sun", "rain"],
    },
    {
      title: "Fantasy Pack",
      author: "User",
      tags: ["fantasy", "unicorn", "castle", "rainbow"],
    },
  ];

  const testValues = [
    {
      image: "//picsum.photos/200/200",
      id: "1",
    },
    {
      image: "//picsum.photos/160/450",
      id: "2",
    },
    {
      image: "//picsum.photos/450/450",
      link: "3",
    },
    {
      image: "//picsum.photos/300/700",
      link: "4",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className=" bg-cover bg-fixed bg-background font-kameron pb-10">
      <div className="h-[40vh] w-full  absolute bg-gradient-to-b from-myYellow"></div>
      <Header page={page}></Header>
      <div className="flex flex-col mx-20 relative z-30">
        <div className="mt-[80px] mb-10 text-stone-700  flex justify-center items-center hover:text-black">
          <p className="font-bold underline">My Collection</p>
          <p className="mx-2">/</p>
          <Link
            className=" hover:text-black  text-stone-700"
            to="/profile/gallery"
          >
            Gallery
          </Link>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-[27%]">
            <div className="bg-yellow-100  min-h-[190px] mb-5">
              <div className="bg-yellow-200 h-[20px]"></div>
              <div className="flex p-3">
                <img
                  className="rounded-full w-[40px] h-[40px] mr-4"
                  src={ProfilePic}
                ></img>
                <div>
                  <p className="font-bold text-md">Username</p>
                  <p>128 characters description</p>
                </div>
              </div>
            </div>
            <div className="text-red-800 text-sm">
              <p className="mb-2">Edit profile</p>
              <p>Settings</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-2/3">
            <div>
              <input
                type="text"
                placeholder="Sort by"
                className="border-myYellow"
              ></input>
              <input
                type="text"
                placeholder="Pack name, tag..."
                className="border-myYellow"
              ></input>
            </div>

            <div className="mt-16 w-full">
              <Masonry columns={3} spacing={6}>
                {packValues.map((value) => (
                  <StickerPack
                    title={value.title}
                    author={value.author}
                    tags={value.tags}
                  />
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
