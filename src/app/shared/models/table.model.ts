export interface TableRow {
  header: string;
  field: string;
  type: 'text' | 'number' | 'date';
  style?: any;
}
