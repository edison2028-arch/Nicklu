export enum Category {
  MAIN = 'Main Table',
  GROOM_FAMILY = '男方家人',
  BRIDE_FAMILY = '女方家人', // Inferred generic
  BRIDE_RELATIVES = '女方親戚',
  GROOM_FRIENDS = '男方朋友',
  BRIDE_FRIENDS = '女方朋友', // Inferred
  GROOM_COLLEAGUES = '男方同事', // Inferred
  MIXED = '綜合/其他',
  VEGETARIAN = '素食桌',
  RESERVED = '預備桌',
  CHILD = '兒童坐椅'
}

export interface Guest {
  id: string;
  name: string;
  tableNumber: string | number;
  seatNumber: number;
  note?: string; // e.g., "Child Chair", "Vegetarian"
  category: string; // The specific label from the PDF (e.g., "男方家人")
}

export interface TableData {
  tableNumber: string | number;
  category: string;
  guests: Guest[];
  notes?: string;
}
