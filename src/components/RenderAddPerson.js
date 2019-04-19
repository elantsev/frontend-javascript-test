import React, { useState } from "react";
import { connect } from "react-redux";
import style from './RenderAddPerson.module.css';
// import { setWorkData } from "../actions/fetchDataActions";
import { ADD_PERSON } from '../actions/fetchDataActions';

 function RenderAddPerson(props) {
  const [addPerson, setAddPerson] = useState(false);
  const [person, setPerson] = useState({
    id: '',
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      streetAddress: "",
      city: "",
      state: "",
      zip: ""
    },
    description: ""
  });
  let { id, firstName, lastName, email, phone}=person
  const handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    person[name] = event.target.value;
    setPerson(Object.assign({}, person));
  };

  let isValid = id.trim() && firstName.trim() && lastName.trim() && email.trim() && phone.trim()

  const handleAddPerson = () => {
    setAddPerson(!addPerson)
  }
  let inputValue = !addPerson ? 'Добавить персону' : 'Отменить добавление'
  
  const handleSave = ()=>{
    props.dispatch({ type: ADD_PERSON, payload: person });
    setPerson({
      id: '',
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: {
        streetAddress: "",
        city: "",
        state: "",
        zip: ""
      },
      description: ""
    })
  }
    
  return (
    <>
      <input value={inputValue} onClick={handleAddPerson} type='button' />
      {addPerson && <>
        <table className={style.table}>
      <tbody>
        <tr>
          <td>id:<input value={person.id} name={"id"} onChange={handleInputChange}/></td>
          <td>firstName:<input value={person.firstName} name={"firstName"} onChange={handleInputChange}/></td>
          <td>lastName:<input value={person.lastName} name={"lastName"} onChange={handleInputChange}/></td>
          <td>email:<input value={person.email} name={"email"} onChange={handleInputChange}/></td>
          <td>phone:<input value={person.phone} name={"phone"} onChange={handleInputChange}/></td>
       </tr>
      </tbody>
      </table>
        <input type='button' value='Сохранить' disabled={!isValid} onClick={handleSave}/><br /></>}
      </>
  );
}




export default connect()(RenderAddPerson);