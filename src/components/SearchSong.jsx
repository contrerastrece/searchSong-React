import { useEffect, useState } from "react";
import dataTracks from "../assets/json/dataTracks.json";
import Result from "./Result";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import DetailArtist from "./DetailArtist";

const initialData = dataTracks.tracks.data;
const SearchSong = () => {

  const [search, setSearch] = useState("");
  const [dataSong, setDataSong] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let urlSearch = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(
        search
      )}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ee70458364mshd0186ce8e1256d0p15041ajsn2678ff925da5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };
      const response = await fetch(urlSearch, options);
      const data = await response.json();
      setDataSong(data.data);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <main className="p-[2rem] flex flex-col w-full">
      <SearchBar handleSearch={handleSearch} />
      <DetailArtist dataSong={dataSong || initialData} />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : (
        <Result dataSong={dataSong || initialData} />
      )}
    </main>
  );
};

export default SearchSong;
