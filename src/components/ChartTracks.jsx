import Music from './Music'
const ChartTracks = ({dataTracks}) => {
  return ( 
    <div className="w-full">
      <div className="flex flex-wrap gap-[1rem]">
      {dataTracks && dataTracks.map((data) => <Music key={data.id} data={data} />)}
      </div>
    </div>
   );
}
 
export default ChartTracks;