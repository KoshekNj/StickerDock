const StickerPack = () => {
  return (
    <div className="relative w-[60%]">
      <div className=" h-[450px] min-w-[165px] flex flex-col relative z-30 bg-orange-100 drop-shadow ">
        <div className="h-[18%] drop-shadow bg-slate-300 flex flex-col justify-between items-center py-4">
          <p className="w-fit text-sm bold">Unknown sticker pack</p>
          <p className="w-fit text-sm">created by: User</p>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full h-[450px] min-w-[165px] bg-orange-100 drop-shadow z-20 m-1 absolute left-0 top-0"></div>
      <div className="w-full h-[450px] min-w-[165px] bg-orange-100 drop-shadow z-10 m-1 absolute left-1 top-1"></div>
    </div>
  );
};

export default StickerPack;
