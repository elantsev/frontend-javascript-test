import React from "react";
import { connect } from "react-redux";
import {
  SORT_DATA_ABC,
  SORT_DATA_NUM,
} from "../actions/fetchDataActions";

function RenderTableHeader(props) {
  return (
    <tr>
      <th onClick={() => props.dispatch({ type: SORT_DATA_NUM, sortBy: "id" })}>
        id
      </th>
      <th
        onClick={() =>
          props.dispatch({ type: SORT_DATA_ABC, sortBy: "firstName" })
        }
      >
        firstName{" "}
      </th>
      <th
        onClick={() =>
          props.dispatch({ type: SORT_DATA_ABC, sortBy: "lastName" })
        }
      >
        lastName
      </th>
      <th
        onClick={() => props.dispatch({ type: SORT_DATA_ABC, sortBy: "email" })}
      >
        email{" "}
      </th>
      <th
        onClick={() => props.dispatch({ type: SORT_DATA_ABC, sortBy: "phone" })}
      >
        phone{" "}
      </th>
    </tr>
  );
}

export default connect()(RenderTableHeader);
