const AdvertiseHeader = () => {
  return (
    <div
      className="w-full p-[20px] md:px-[200px] md:py-[10px] flex items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
        opacity: 1,
      }}
    >
      <p className="text-[16px] md:text-[22px] leading-[100%] text-[#10CBE0] font-extrabold font-[Figtree] text-center">
        🚀 FRESH BEGINNINGS SALE:{" "}
        <span className="font-semibold text-white">
          Extra 25% OFF, Limited Spots – start your journey today!
        </span>
      </p>
    </div>
  );
};

export default AdvertiseHeader;
