import Header from "../../Components/Header/header";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { Link, useNavigate } from "react-router-dom";

const Trending = () => {
  const page = "Feed";
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
      <div className="flex flex-col items-center z-20 relative">
        <div className="mt-[80px] text-stone-700  flex justify-center items-center hover:text-black">
          <p className="font-bold underline">Trending</p>
          <p className="mx-2">/</p>
          <Link
            className=" hover:text-black  text-stone-700"
            to="/feed/following"
          >
            Following
          </Link>
        </div>
        <div className="mt-16 w-[60%]">
          <Masonry columns={3} spacing={5}>
            {testValues.map((value) => (
              <img
                className="shadow"
                src={value.image}
                onClick={() => {
                  navigate(`/item/${value.id}`);
                }}
              ></img>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Trending;
