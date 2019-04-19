import React from "react";
import style from './RenderTablePerson.module.css'
export function RenderTablePerson(props) {
  const { firstName, lastName, description } = props.person;
  const { streetAddress, city, state, zip } = props.person.address;

  return (
    <div className={style.div}>
      <p>Выбран пользователь <b> {firstName + " " + lastName}</b></p>
      <p>Описание:</p>
      <textarea className={style.textarea} defaultValue={description}/>
      <p>Адрес проживания: <b>{streetAddress}</b></p>
      <p>Город: <b>{city}</b></p>
      <p>Провинция/штат: <b>{state}</b></p>
      <p>Индекс: <b>{zip}</b></p>
    </div>
  );
}
