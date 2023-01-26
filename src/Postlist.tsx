import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { toggleFetchData, toggleSpecificData } from "./selector";
import { PostStateProps } from "./type";

export default function Postlist() {
  //make sure you set a suspense fallback in the parent component if using async selector
  //   const repos: PostStateProps[] = useRecoilValue(toggleFetchData);

  // if you dont want to use suspense, you can use the useRecoilValueLoadable hook
  // useRecoilValueLoadable is similar to useRecoilValue but it returns a promise
  const { state, contents } = useRecoilValueLoadable(toggleFetchData);

  // this how to pass an argument to the selectorFamily
  const { contents: specificDataResponse } = useRecoilValueLoadable(
    toggleSpecificData("albums")
  );

  console.log("specifc data", specificDataResponse);

  const renderData = () => {
    switch (state) {
      case "hasError":
        return null;
      case "loading":
        return <div>Loading...</div>;
      case "hasValue":
        return contents.map((repo, key) => (
          <div key={key}>
            <p>{repo.id}</p>
            <p>{repo.body}</p>
            <p>{repo.title}</p>
          </div>
        ));
    }
  };

  return (
    <div>
      {/* code below if you not use useRecoilValueLoadable hook */}
      {/* {repos.map((repo, key) => (
        <div key={key}>
          <p>{repo.id}</p>
          <p>{repo.body}</p>
          <p>{repo.title}</p>
        </div>
      ))} */}

      {/* code below if you use useRecoilValueLoadable hook */}
      {renderData()}
    </div>
  );
}
