import { Suspense, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { postState, resourcesState, darkModeState } from "./atom";
import { toggleDarkModeState, toggleFetchData } from "./selector";
import { DUMMY_URL } from "./const";
import Postlist from "./Postlist";

function App() {
  // This is the hook that will be used to get and set the data
  // the use of the hooks is similar to useState in react
  // const [repos, setRepos] = useRecoilState(postState);

  //this hooks is used to get the value of the atom
  // note that this is only for getting the value
  // const resources = useRecoilValue(resourcesState);

  const setResource = useSetRecoilState(resourcesState);

  // this hooks is only for getting the value of the selector
  const darkMode = useRecoilValue(darkModeState);

  // this hooks only for setting the value of the selector
  const toggleDarkMode = useSetRecoilState(toggleDarkModeState);

  /*
    IMPORTANT
    useRecoilState is the same as subscribing to the state in react making the component re-render when the state changes even if the state is not used in the component
  to resolve this issue we can use the useRecoilValue hook which is only for getting the value of the state
  and useSetRecoilState which is only for setting the value of the state
  */

  // const fetchingData = useCallback(async () => {
  //   const resp = await fetch(DUMMY_URL + resource).then((res) => res.json());
  //   setRepos(resp);
  // }, [setRepos, resource]);

  // console.log(darkMode);

  // useEffect(() => {
  //   fetchingData();
  // }, [fetchingData]);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <button
        className="bg-blue-500 p-4 rounded-md"
        onClick={() => toggleDarkMode(!darkMode)}
      >
        toggle dark mode
      </button>
      <div>
        <button onClick={() => setResource("posts")}>change to posts</button>
        <button onClick={() => setResource("comments")}>
          change to comments
        </button>
        <button onClick={() => setResource("albums")}>change to albums</button>
      </div>

      {/* the use of react suspense here because the data is being fetched asynchronously by the selector */}
      <Suspense fallback={<div className="bg-red-500">Loading...</div>}>
        <Postlist />
      </Suspense>
    </div>
  );
}

export default App;
