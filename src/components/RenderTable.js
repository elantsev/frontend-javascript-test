import React, { useState } from "react";
import Pagination from "react-js-pagination";
import RenderTableHeader from "./RenderTableHeader";
import { RenderTablePage } from "./RenderTablePage";
import { RenderTablePerson } from "./RenderTablePerson";

function RenderTable(props) {
  const [activePage, setActivePage] = useState(1);
  const [person, setPerson] = useState(null);
  const { data } = props;

  let personOnPage = 50;
  let from = personOnPage * (activePage - 1);
  let to = from + personOnPage;
  let pageData = data.slice(from, to);

  const showPersonHandler = e => {
    if (e.target.tagName === "TD") {
      let id = e.target.parentElement.id;
      let person = pageData.filter(element => element.phone === id)[0];
      setPerson(person);
    }
  };

  return (
    <>
      <table id="table">
        <tbody onClick={showPersonHandler}>
          <RenderTableHeader />
          <RenderTablePage pageData={pageData} />
        </tbody>
      </table>

      <Pagination
        activePage={activePage}
        itemsCountPerPage={50}
        totalItemsCount={data.length}
        pageRangeDisplayed={50}
        onChange={setActivePage}
      />

      {person && <RenderTablePerson person={person} />}
    </>
  );
}

export default RenderTable;
