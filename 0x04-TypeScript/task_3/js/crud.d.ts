import { RowID, RowElement } from "./interface";
declare function insertRow(row: RowElement);
declare function deleteRow(rowID: RowID);
declare function updateRow(rowID: RowID, rowElement: RowElement);