import Header from "../../Components/Header/header";
import StickerPack, {
  IPackProps,
} from "../../Components/StickerPack/stickerPack";
import "./edit.scss";
import Icon from "../../Images/iconEMark.png";
import React from "react";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
// import { Field, Form, Formik } from "formik";

const Edit = () => {
  const page = "Editor";
  const [image, setImage] = React.useState("");
  const onDrop = React.useCallback((acceptedFiles: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      setImage(reader.result as any);
    };
  }, []);
  //const [picture, setPicture] = React.useState([]);
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    multiple: false,
    onDragEnter: () => null,
    onDragOver: () => null,
    onDragLeave: () => null,
  });

  const packValues: IPackProps = {
    title: "Unknown sticker pack",
    author: "User",
    tags: ["unknown", "notMadeYet", "blank", "europskaUnija"],
  };
  return (
    <div className=" bg-cover bg-fixed bg-background font-kameron pb-10">
      <div className="h-[40vh] w-full  absolute bg-gradient-to-b from-myYellow"></div>
      <Header page={page}></Header>
      <div className="edit">
        <div className="edit__sticker">
          {/* <button className="px-2 my-3 py-0.5 rounded-lg text-sm bg-myYellow">
            Choose another pack
          </button> */}
          <StickerPack
            title={packValues.title}
            author={packValues.author}
            tags={packValues.tags}
          ></StickerPack>
        </div>
        {image ? (
          <img className="edit__uploaded-picture" src={image} />
        ) : (
          <div className="edit__picture">
            <div className="edit__picture--border">
              <div
                className="flex flex-col align-center items-center"
                {...getRootProps()}
              >
                <input ref={inputRef} {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <>
                    <img
                      src={Icon}
                      className="w-[50px] h-[130px] self-center"
                      alt="exclamation mark icon"
                    ></img>
                    <p className="my-4">Drop your pictures here or</p>
                    <button className="bg-myYellow rounded-md text-sm py-0.5 w-[65%]">
                      Browse folders
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
