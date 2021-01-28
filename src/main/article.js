import React, { useState } from "react";
import Header from "./header";
import Content from "./content";
import data from "../data.json";

function Article() {
  const [state, setState] = useState({
    list: [],
  });
  function sortForVotes() {
    let list = [];
    list = data.sort(function (a, b) {
      return b.upVotes - a.upVotes;
    });
    setState({ list: list });
    return list;
  }

  function sortForDate() {
    let list = [];
    list = data.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    setState({ list: list });
    return list;
  }
  if (!state.list.length) {
    sortForVotes();
  }
  return (
    <div
      style={{
        height: "620px",
        overflow: "hidden",
      }}
    >
      <Header sortForDate={sortForDate} sortForVotes={sortForVotes} />
      <Content list={state.list} />
    </div>
  );
}

export default Article;
