import SearchBar from "./Components/SearchBar";
import ItemsTable from "./Components/ItemsTable";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const val = await response.json();
        setData(val);
        setFilterData(val);
      } catch (err) {
        console.log(err);
      }
    };

    getListings();
  }, []);
  return (
    <div>
      <div className="text-center text-5xl font-serif">Admin Dashboard</div>
      <SearchBar setSearchInput={setSearchInput} />
      <ItemsTable
        filterData={filterData}
        searchInput={searchInput}
        setFilterData={setFilterData}
        details={data}
      />
    </div>
  );
}

export default App;
