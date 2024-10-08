import React from "react";
import { useProps } from "../context/VizPropsProvider";
import { useNerdGraphQuery } from "../hooks/useNerdGraphQuery";

const ExampleComponent = () => {
  const vizProps = useProps();
  const { greeting, accountId, query } = vizProps;
  
  let data;
  if(query && query!="" && accountId && accountId!=""){ 
    ({ data } = useNerdGraphQuery(accountId, query));
  }
  return (
        <>
        <div>{greeting}</div>
        <div>AccountID: {accountId=="" ? "Not specified" : accountId} Results: {data ? data.length: "Loading..."}</div>
        </>
  );
};

export default ExampleComponent;