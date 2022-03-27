import React, { useReducer } from "react";
import axios from "axios";
import lodash from "lodash";
// http://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("");
  //   const [loading, setLoading] = useState(false);

  const init = {
    hits: [],
    query: "",
    loading: false,
  };

  const handleReducer = (state, { type, payload }) => {
    switch (type) {
      case "SEARCH":
        return { ...state, hits: payload };
      case "LOADING":
        return { ...state, loading: payload };
      case "SET_QUERY":
        return { ...state, query: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleReducer, init);

  const { hits, query, loading } = state;

  const getApi = async (query) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    try {
      const res = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );

      dispatch({
        type: "SEARCH",
        payload: res.data?.hits || [],
      });

      dispatch({
        type: "LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "LOADING",
        payload: false,
      });
      console.log("error: ", error);
    }
  };

  const handleSearch = () => {
    getApi(query);
  };

  return (
    <div className="mt-3 border rounded-sm mx-auto w-2/4 shadow-md pb-3">
      <div className="flex my-3 justify-around p-5">
        <input
          className="border-2 border-slate-600 rounded-md p-3 flex-1"
          defaultValue={query}
          placeholder="Typing your keyword..."
          onChange={lodash.debounce(
            (e) =>
              dispatch({
                payload: e.target.value,
                type: "SET_QUERY",
              }),
            500
          )}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="ml-4 bg-emerald-500 text-white rounded p-2"
        >
          Search
        </button>
      </div>
      {loading && (
        <div className="my-3 m-auto w-8 h-8 border-4 rounded-full border-blue-400 border-r-transparent animate-spin"></div>
      )}
      <div className="flex flex-wrap gap-3 px-5">
        {!loading &&
          hits &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="bg-slate-400 p-1 rounded-sm" key={index}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
