import "./app.css";

import Filter from "../filter/filter";
import Info from "../info/info";
import Search from "../search/search";
import Films from "../films/films";
import Add from "../add/add";

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <Info />
        <div className="search">
          <Search />
          <Filter />
        </div>
        <Films />
        <Add />
      </div>
    </div>
  );
};

export default App;
