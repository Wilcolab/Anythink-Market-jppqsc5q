import { SortDirection, SortField } from "../../../types/routers";

export interface HeadCell {
  label: string;
  sortKey?: SortField;
}

export interface RoutersTableHeadProps {
  sortField: SortField;
  handleSort: (field: SortField) => void;
  sortDirection: SortDirection;
}
