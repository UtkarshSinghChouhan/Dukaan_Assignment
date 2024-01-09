import { ICardData, ISidebar, ITableData } from "./interfaces";

// ===================SideBar==========================
export const SIDEBAR_DATA: Array<ISidebar> = [
  {
    name: "Home",
    img_url: "/static_assests/icons/sidebar/home.svg",
  },
  {
    name: "Orders",
    img_url: "/static_assests/icons/sidebar/orders.png",
  },
  {
    name: "Products",
    img_url: "/static_assests/icons/sidebar/products.png",
  },
  {
    name: "Delivery",
    img_url: "/static_assests/icons/sidebar/delivery.svg",
  },
  {
    name: "Marketing",
    img_url: "/static_assests/icons/sidebar/marketing.svg",
  },
  {
    name: "Analytics",
    img_url: "/static_assests/icons/sidebar/analytics.svg",
  },
  {
    name: "Payouts",
    img_url: "/static_assests/icons/sidebar/payouts.svg",
  },
  {
    name: "Discounts",
    img_url: "/static_assests/icons/sidebar/discounts.svg",
  },
  {
    name: "Audience",
    img_url: "/static_assests/icons/sidebar/audience.svg",
  },
  {
    name: "Appearance",
    img_url: "/static_assests/icons/sidebar/appearence.png",
  },
  {
    name: "Plugins",
    img_url: "/static_assests/icons/sidebar/plugins.png",
  },
];

// =========================Cards Data =============================
export const CARD_DATA: Array<ICardData> = [
  {
    title: "Next Payout",
    amnt: "2,312.23",
    orders: 23,
  },
  {
    title: "Amount Pending",
    amnt: "92,312.20",
    orders: 13,
  },
  {
    title: "Amount Processed",
    amnt: "23,92,312.19",
    orders: 0,
  },
];

// ================Chips Data ===================
export const CHIP_DATA = [
  {
    text: "Payouts",
    amnt: 22,
  },
  {
    text: "Refunds",
    amnt: 6,
  },
] as const;

// =====================Table Data =========================
export const TABLE_HEADERS: Array<string> = [
  "Order ID",
  "Status",
  "Transaction ID",
  "Refund date",
  "Order amount",
];

export const TABLE_DATA: Array<ITableData> = [
  {
    orderId: "#281209",
    status: "🟢 Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmnt: "₹1,125.00",
  },
  {
    orderId: "#281208",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Yesterday, 3:00 PM",
    orderAmnt: "₹1,125.00",
  },
  {
    orderId: "#281207",
    status: "🟢 Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmnt: "₹1,125.00",
  },
  {
    orderId: "#281206",
    status: "🟢 Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmnt: "₹1,125.00",
  },
  {
    orderId: "#281205",
    status: "🟢 Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmnt: "₹1,125.00",
  },
  {
    orderId: "#281204",
    status: "🟢 Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmnt: "₹1,125.00",
  },
];
