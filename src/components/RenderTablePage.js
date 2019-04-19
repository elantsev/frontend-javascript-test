import React from "react";
export function RenderTablePage(props) {
  const { pageData } = props;
  return (
    <>
      {pageData.map(person => (
        <tr id={person.phone} key={person.phone}>
          <td>{person.id}</td>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
        </tr>
      ))}
    </>
  );
}
