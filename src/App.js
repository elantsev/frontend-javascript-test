import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getData, SET_DATA, setWorkData } from "./actions/fetchDataActions";

import RenderTable from "./components/RenderTable";
import RenderAddPerson  from "./components/RenderAddPerson";

function App(props) {
  function handleSmallData() {
    if (!props.fetchedData.smallData) {
      props.getData(
        " http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
        "smallData"
      );
    }
    props.setWorkData(SET_DATA, props.fetchedData.smallData);
  }
  function handleBigData() {
    if (!props.fetchedData.bigData) {
      props.getData(
        "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
        "bigData"
      );
    }
    props.setWorkData(SET_DATA, props.fetchedData.bigData);
  }

  const { isFetching, workData } = props.fetchedData;
  let data = workData;

  return (
    <div>
      <button onClick={handleSmallData}>Маленькие данные</button>
      <button onClick={handleBigData}>Большие данные</button>
      {data &&<RenderAddPerson />}
      {isFetching && <p>Loading...</p>}
      {data && <RenderTable data={data} />}
    </div>
  );
}
const mapStateToProps = state => ({
  fetchedData: state.fetchedData
});

const mapDispatchToProps = dispatch => ({
  getData: (source, name) => dispatch(getData(source, name)),
  setWorkData: (type, payload) => dispatch(setWorkData(type, payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
