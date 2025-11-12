import { RowID, RowElement } from "./interface";
export function insertRow(rowID: RowID, rowElement: RowElement);
export function deleteRow(rowID: RowID);
export function updateRow(rowID: RowID, rowElement: RowElement);