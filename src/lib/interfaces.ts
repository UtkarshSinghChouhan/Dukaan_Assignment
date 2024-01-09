// ======== SIDEBAR =========
export interface ISidebar {
  name: string;
  img_url: string;
}

// =========== WORKSPACE ==================
export interface ICardData {
  title: string;
  amnt: string;
  orders: number;
}

export interface ICard extends ICardData {
  id: number;
}

export interface IChip {
  text: string;
  amnt: number;
  isSelected: boolean;
  id: number;
}

export interface ITableData {
  orderId: string;
  status: string;
  transactionId: string;
  refundDate: string;
  orderAmnt: string;
}
