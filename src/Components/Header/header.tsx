import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import title from "../../Images/StickerTitle.png";
import HelpIcon from "../../Images/Icon.png";
interface IHeaderProps {
  page: string;
}

const Header = ({ page }: IHeaderProps) => {
  const navigate = useNavigate();

  const links = [
    {
      label: "Editor",
      link: `/`,
    },
    {
      label: "Feed",
      link: `/feed/`,
    },
    {
      label: "My profile",
      link: `/profile/1`,
    },
  ];
  return (
    <div className="flex bg-gradient-to-b relative z-1 from-myYellow px-10 pt-5 font-kameron justify-between">
      <div className="flex justify-center align-center">
        <img className="w-[270px] h-[61px]" src={title} alt="title"></img>
        <h1 className="text-stone-700 text-2xl leading-[60px] ml-7">DOCK</h1>
      </div>
      <div className="flex w-1/3 justify-between items-center">
        {links.map((link, i) =>
          link.label === page ? (
            <div key={link.label}>
              <p
                key={link.label}
                className=" text-stone-700 font-bold underline "
              >
                {link.label}
              </p>
            </div>
          ) : (
            <Link
              key={link.label}
              className=" hover:text-black  text-stone-700 "
              to={link.link}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
      <img
        className="w-[27px] h-[27px] self-center"
        src={HelpIcon}
        alt="Help Icon"
      ></img>
    </div>
  );
};

export default Header;
