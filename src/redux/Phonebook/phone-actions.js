import { createAction } from "@reduxjs/toolkit";

// Создание действий
export  const deleteContact = createAction("contacts/deleteContact");

export  const changeFilter = createAction("contacts/changeFilter");


