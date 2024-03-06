import {
  category,
  users,
  user,
  bag,
  box,
  grid,
  note,
  gift,
  vector,
  coupons,
  settings,
  NGR,
  USD,
  EUR,
  GBP,
  active_menu,
  active_box,
  active_coupon,
  active_user,
  active_order,
  active_cms,
  active_grid,
  active_vector,
  active_users,
  active_gift,
} from "../assets/icons";
import { blog } from "@/assets/images";

export const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icons: category,
    activeIcons: active_menu,
    submenu: [
      { label: "Statistics", path: "/dashboard" },
      { label: "Analytics", path: "/dashboard/analytics" },
    ],
  },
  { 
    label: "Users", 
    path: "/users", 
    icons: user,  
    activeIcons: active_user,
    submenu: [
      { label: "Users", path: "/users" },
      { label: "Admin Management", path: "/users/admin-management" },
    ],
  },
  {
    label: "Customers",
    path: "/customers",
    icons: users,
    activeIcons: active_users,
    submenu: [
      {
        label: "Account Limit",
        path: "/customers/account_limit",
      },
      { label: "Deletion Request", path: "/customers/account_deletion" },
    ],
  },
  {
    label: "Notification",
    path: "/notifications",
    icons: box,
    activeIcons: active_box,
    submenu: [
      {
        label: "Push Notification",
        path: "/notifications/push-notifications",
      },
      {
        label: "In-app Messages",
        path: "/notifications/in-app-messages",
      },
    ]
  },

  { label: "Orders", path: "/orders", icons: bag, activeIcons: active_order },
  {
    label: "Products",
    path: "/products",
    icons: box,
    activeIcons: active_box,
    submenu: [
      { label: "Stores", path: "/products" },
      { label: "Website", path: "/products/website" },
    ],
  },
  { label: "Blog", path: "/blog", icons: grid, activeIcons: active_grid},
  {
    label: "CMS",
    path: "/cms",
    icons: note,
    activeIcons: active_cms,
    submenu: [
      { label: "Website Contents", path: "/cms" },
      { label: "Product Reviews", path: "/cms/product-reviews" },
      { label: "Blockchain Icons", path: "/cms/blockchain-icons" },
    ],
  },
  { label: "Gift Card", path: "/gift-cards", icons: gift, activeIcons: active_gift },
  { label: "Payment Methods", path: "/payment-methods", icons: vector, activeIcons: active_vector },
  { label: "Reward System", path: "/reward-system", icons: vector, activeIcons: active_vector },
  { label: "Promotions", path: "/promotions", icons: vector, activeIcons: active_vector },
  { label: "Coupons", path: "/coupons", icons: coupons, activeIcons: active_coupon },,
  { label: "FX Rates", path: "/fx-rates", icons: coupons, activeIcons: active_coupon },,
  { label: "Settings", path: "/settings", icons: settings },
];

export const permissionTableHeaders = [
  "Login",
  "User Name",
  "Permission",
  "Action",
];

export const adminProfileTableHeaders = [
  "Login",
  "User Name",
  "Action",
];

export const AdminProfileArray = [
  {
    email: 'mark.example@gmail.com',
    name: 'Mr. Mark Jahnson'
  },
  {
    email: 'john.doe@example.com',
    name: 'Mr. John Doe'
  },
  {
    email: 'jane.smith@example.com',
    name: 'Ms. Jane Smith'
  }
];

export const AccountDeletionArray = [
  {
    request: "Account Deletion Request",
    email: "IOE@gmai.com",
    UserId: "12345",
    actionbtn1: "Approve",
    actionbtn2: "Decline",
  },
  {
    request: "Account Deletion Request",
    email: "IOE@gmai.com",
    UserId: "12345",
    actionbtn1: "Approve",
    actionbtn2: "Decline",
   
  },
  {
    request: "Account Deletion Request",
    email: "IOE@gmai.com",
    UserId: "12345",
    actionbtn1: "Approve",
    actionbtn2: "Remove",
 
  },
];

export const usersTableHeaders = [
  "Action",
  "Order ID",
  "Date",
  "User Name",
  "Email Address",
  "Country",
  "User Type",
];

export const usersNotificationTableHeaders = [
  "Action",
  "User ID",
  "Date",
  "User Name",
  "Email Address",
  "User Type",
];

export const blogTableHeader = ["Author", "Date", "Title", "Actions"];
export const cmsTableHeader = ["Author", "Date Created", "Slug", "Actions"];
export const reviewsTableHeader = ["Author", "Date", "Details", "Actions"];

export const ordersTableHeaders = [
  "Account ID",
  "Product",
  "Value of Product",
  "Date",
  "Amount",
  "Address",
  "Payment Status",
  "User Type",
  "SWT ID",
  "Number",
  "Transaction ID",
  "Payment Mode",
  "API Provider",
];

// New insertion
export const accountDeleteTableHeaders = [
  "Select",
  "Requests",
  "Email",
  "User ID",
  "Actions",
];

export const accountUserArray = [
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
  {
    UserID: "890221",
    EmailAddress: "kristinwatson@gmail.com",
  },
]

export const customerArray = [
  {
    userType: "Guest",
    limitPerDay: 1000,
    limitPerMonth: 2000,
  },
  {
    userType: "Registered",
    limitPerDay: 5000,
    limitPerMonth: 10000,
    maxSingleOrder: 2000,
    maxBalance: 5000
  },
  {
    userType: "Verified",
    limitPerDay: 10000,
    limitPerMonth: 100000,
    maxSingleOrder: 3000,
    maxBalance: 50000
  },

]
// End of insertion

export const usersArray = [
  {
    OrderID: "890221",
    Date: "Oct 17, 2023",
    UserName: "Kristin Watson",
    EmailAddress: "kristinwatson@gmail.com",
    Country: "Nigeria",
    UserType: "Verified",
    AccountType: "NGR",
  },
  {
    OrderID: "890222",
    Date: "Oct 17, 2023",
    UserName: "Kristin Watson",
    EmailAddress: "kristinwatson@gmail.com",
    Country: "Nigeria",
    UserType: "Guest",
    AccountType: "EUR",
  },
  {
    OrderID: "890223",
    Date: "Oct 17, 2023",
    UserName: "Kristin Watson",
    EmailAddress: "kristinwatson@gmail.com",
    Country: "Nigeria",
    UserType: "Registered",
    AccountType: "GBP",
  },
];

export const ordersArray = [
  {
    accountID: "#890221",
    product: "MTN Top-Up",
    valueOfProduct: "$5,000",
    date: "Oct 17, 2023",
    amount: "0.005 ETH",
    address: "kristinwatson@gmail.com",
    paymentStatus: "Successful",
    userType: "Registered",
    number: "09034433333",
    swtID: "#89022123",
    apiProvider: "Sochitel",
    transactionID: "#8902213456",
    paymentMode: "Mixpay",
  },
  {
    accountID: "#890222",
    product: "Some Product",
    valueOfProduct: "$2,000",
    date: "Oct 18, 2023",
    amount: "0.002 ETH",
    address: "anotheruser@gmail.com",
    paymentStatus: "Pending",
    userType: "Guest",
    number: "09034433333",
    swtID: "#89022223",
    apiProvider: "Xoxoday",
    transactionID: "#8902223456",
    paymentMode: "Depay",
  },
  {
    accountID: "#890221",
    product: "MTN Top-Up",
    valueOfProduct: "$5,000",
    date: "Oct 17, 2023",
    amount: "0.005 ETH",
    address: "kristinwatson@gmail.com",
    paymentStatus: "Successful",
    userType: "Registered",
    number: "09034433333",
    swtID: "#89022123",
    apiProvider: "Sochitel",
    transactionID: "#8902213456",
    paymentMode: "Mixpay",
  },
  {
    accountID: "#890223",
    product: "Another Product",
    valueOfProduct: "$3,500",
    date: "Oct 19, 2023",
    amount: "0.0035 ETH",
    address: "thirduser@gmail.com",
    paymentStatus: "Failed",
    userType: "Verified",
    number: "09034433333",
    swtID: "#89022323",
    apiProvider: "Ding connect",
    transactionID: "#8902233456",
    paymentMode: "Depay",
  },
  {
    accountID: "#890223",
    product: "Another Product",
    valueOfProduct: "$3,500",
    date: "Oct 19, 2023",
    amount: "0.0035 ETH",
    address: "thirduser@gmail.com",
    paymentStatus: "Failed",
    userType: "Verified",
    number: "09034433333",
    swtID: "#89022323",
    apiProvider: "Reloadly",
    transactionID: "#8902233456",
    paymentMode: "Balance",
  },
];

export const accountsData = [
  {
    currency: "NGR",
    accountBalance: "N 1,300,000",
    updateDate: "October 20, 2023",
    icons: NGR,
  },
  {
    currency: "EUR",
    accountBalance: "E 1,30,000",
    updateDate: "October 20, 2023",
    icons: EUR,
  },
  {
    currency: "GBP",
    accountBalance: "N 1,300,000",
    updateDate: "October 20, 2023",
    icons: GBP,
  },
  {
    currency: "USD",
    accountBalance: "$ 1,30,000",
    updateDate: "October 20, 2023",
    icons: USD,
  },
];


export const blogsArray = [
    {
        author: "Kristin Watson",
        date: "Oct 17, 2023",
        title: "New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange",
        image: blog,
    },
    {
        author: "John Doe",
        date: "Nov 5, 2023",
        title: "Blockchain Technology Seminar Announced",
        image: blog,
    },
    {
        author: "Alice Smith",
        date: "Dec 12, 2023",
        title: "Launch of New Cryptocurrency Wallet App",
        image: blog,
    }
];

export const reviewsArray = [
    {
        author: "Kristin Watson",
        date: "Oct 17, 2023",
        details: "New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange",
        status: 'New',
    },
    {
        author: "John Doe",
        date: "Nov 5, 2023",
        details: "Blockchain Technology Seminar Announced",
        status: 'Approved',
    },
    {
        author: "Alice Smith",
        date: "Dec 12, 2023",
        details: "Launch of New Cryptocurrency Wallet App",
        status: 'Declined',
    }
];



export const giftCards = [
  {
    name: "Gift Card A",
    currency: "USD",
    minPrice: 10,
    maxPrice: 100,
    fixedPrice: 100,
  },
  {
    name: "Gift Card B",
    currency: "EUR",
    minPrice: 20,
    maxPrice: 150,
    fixedPrice: 100,
  },
  {
    name: "Gift Card C",
    currency: "EUR",
    minPrice: 20,
    maxPrice: 150,
    fixedPrice: 100,
  },
  {
    name: "Gift Card D",
    currency: "GBP",
    minPrice: 15,
    maxPrice: 120,
    fixedPrice: 100,
  },
];
export const cmsCards = [
  {
    id: 1,
    name: "Gift Card A",
    currency: "Blockchain",
  },
  {
    id: 2,
    name: "Gift Card B",
    currency: "Blockchain",
  },
  {
    id: 3,
    name: "Gift Card C",
    currency: "Blockchain",
  },
  {
    id: 4,
    name: "Gift Card D",
    currency: "Blockchain",
  },
 
];

export const notificationArray = [
  {
    id: "#890221",
    status: "Active",
    delivery: "6",
    open: "0",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date",
    percentage: '0.7', 
    percentage2: '0.00', 
  },
  {
    id: "#890222",
    status: "In Active",
    delivery: "6",
    open: "6",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date",
    percentage: '0.7', 
    percentage2: '0.00', 


  },
  {
    id: "#890221",
    status: "Active",
    delivery: "6",
    open: "0",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date", 
    percentage: '0.7', 
    percentage2: '0.00', 


  },
  {
    id: "#890223",
    status: "Deleted",
    delivery: "6",
    open: "0",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date",
    percentage: '0.7', 
    percentage2: '0.00', 

  },
  {
    id: "#890223",
    status: "In Active",
    delivery: "6",
    open: "0",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date",
    percentage: '0.7', 
    percentage2: '0.00', 

  },
  {
    id: "#890224",
    status: "Archived",
    delivery: "6",
    open: "0",
    title: "Product one",
    msg: "Daily receiving at 9:00 from feb 8 with no ending date",
    percentage: '0.7', 
    percentage2: '0.00', 

  },
];

export const notificationTableHeaders = [
  "Status",
  "Title/Message",
  "Delivery",
  "Open",
  "",
];

export const analyticsTableHeaders = [
  'Product Name',
  'Category',
  'Country',
  'Number of Orders',
];

export const AnalyticsArray = [
  {
    productName: 'Sports',
    category: 'Gift Cart',
    country: 'Netherlands',
    numberOfOrders: 1000,
  },
  {
    productName: 'Product2',
    category: 'Category2',
    country: 'Nigeria',
    numberOfOrders: 2000,
  },
  {
    productName: 'Product3',
    category: 'Category3',
    country: 'Algeria',
    numberOfOrders: 3000,
  },
];

export const dashboardCardData = [
  {
    metric: 'Total Revenue',
    value: '$3,000',
    percentage: '37%',
    update: 'October 20, 2023',
    trend: 'rising',
    icons: active_vector
  },
  {
    metric: 'Total Users',
    value: '2,300',
    percentage: '37%',
    update: 'October 20, 2023',
    trend: 'falling',
    icons: active_users
  },
  {
    metric: 'Total Orders',
    value: '300,000',
    percentage: '37%',
    update: 'October 20, 2023',
    trend: 'rising',
    icons: active_order
  },
  {
    metric: 'Active Users',
    value: '1,200',
    percentage: '16%',
    update: 'October 20, 2023',
    trend: 'falling',
    icons: active_user,
  }
];

export const deleteRequestTableHeaders = [
  "Select",
  "Request",
  "Email",
  "User ID",
  "Action",
  "",
];