import Music from "./Music";

const Result = ({ dataSong}) => {
// console.log(dataSong);

  return (

    <div className="min-w-[320px]">
      <h2 className="text-[#E86060] my-[1rem] text-[22px] font-bold ">Resultado</h2>
      <div className="flex flex-wrap gap-[1rem] pb-[4rem]">
        {dataSong.map((data) => (
          <Music
            key={data.id}
            data={data}            
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
