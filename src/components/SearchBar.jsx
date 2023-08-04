import { useEffect, useState } from "react";
import search from "../assets/icons/search.svg";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }; 

  useEffect(() => {
    // Creamos un temporizador para ejecutar la búsqueda después de 300 ms de inactividad del usuario
    const timer = setTimeout(() => {
      handleSearch(query); // Ejecutamos la búsqueda después del retraso
    }, 300);

    // Limpiamos el temporizador cada vez que el valor de 'query' cambia
    return () => {
      clearTimeout(timer)
    };
  }, [query,handleSearch]);
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full relative mb-[2rem]"
    >
      <div className="w-[25rem] relative">
      <input
        type="text"
        placeholder="search song..."
        className="text-[#828282] text-lg font-normal w-full outline pl-4 outline-[1px] rounded-[1rem] h-[2rem]"
        value={query}
        onChange={handleChange}
      />

      <img
        src={search}
        alt="search-icon"
        className="absolute w-[1rem] right-[1rem] top-[0] translate-y-1/2"
      />

      </div>
    </form>
  );
};

export default SearchBar;
