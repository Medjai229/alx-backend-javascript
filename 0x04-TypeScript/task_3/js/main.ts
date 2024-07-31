import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(newRowID); // Output: 1
const updateRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);