import ControlBar from "./components/ControlBar";
import NavBar from "./components/Navbar";
import SearchSong from "./components/SearchSong";
// import './App.css'

import { SongProvider } from "./context/SongContext";

function App() {
  return (
    <SongProvider>
      <div className="w-full md:max-w-[1440px] flex min-w-[320px]">
        <NavBar />
        <SearchSong/>
      </div>
      <ControlBar/>
    </SongProvider>
  );
}

export default App;
