import { RowID, RowElement } from "./interface";
export function insertRow(row: RowElement);
export function deleteRow(rowID: RowID);
export function updateRow(rowID: RowID, rowElement: RowElement);