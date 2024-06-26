export var ORDER_STATE = {
    WAITING_FOR_ACCEPT_STORE: 1,
    CANCELED_BY_USER: 101,
    STORE_ACCEPTED: 3,
    STORE_REJECTED: 103,
    STORE_CANCELLED: 104,
    STORE_CANCELLED_REQUEST: 105,
    STORE_PREPARING_ORDER: 5,
    OREDER_READY: 7,
    WAITING_FOR_DELIVERY_MAN: 9,
    NO_DELIVERY_MAN_FOUND: 109,
    DELIVERY_MAN_ACCEPTED: 11,
    DELIVERY_MAN_REJECTED: 111,
    DELIVERY_MAN_CANCELLED: 112,
    DELIVERY_MAN_COMING: 13,
    DELIVERY_MAN_ARRIVED: 15,
    DELIVERY_MAN_PICKED_ORDER: 17,
    DELIVERY_MAN_STARTED_DELIVERY: 19,
    DELIVERY_MAN_ARRIVED_AT_DESTINATION: 21,
    DELIVERY_MAN_COMPLETE_DELIVERY: 23,
    ORDER_COMPLETED: 25,
};

export var ITEM_TYPES = [
    { name: 'AS_A_UNIT', value: 1 },
    { name: 'ON_WEIGHT', value: 2 },
]

export var DELIVERY_TYPE = [    
    { value: 1, title: 'Store'},
    // { value: 2, title: 'Courier'}
]

export var IMPORT_STORE_DATA = {

    PRODUCT: 21,
    ITEM: 22,
    SPECIFICATION_GROUP: 23,
    SPECIFICATION: 24,
    ITEM_SPECIFICATION: 25,
    UPDATE_ITEM_SPECIFICATION: 26

}

export var CONSTANT = {
    IMAGE_BASE_URL: ''
}

export var DATE_FORMAT = {
    DD_MMM_YYYY: "dd MMM yyyy",
    DD_MMM_YYYY_HH_MM_A: "dd MMM yyyy HH:mm",
    DD_MMM_YYYY_HH_MM_SS: "dd MMM yyyy hh:mm:ss"
};

export var ORDER_CANCELLATION_CHARGE_TYPE = {
    PERCENTAGE: 1,
    ABSOLUTE: 2
};

export var IMAGE_RATIO = {
    ITEM_IMAGE: 1.25,
    PRODUCT_IMAGE: 1.25
};

export var ADMIN_IMAGE_RATIO = {
    DELIVERY_IMAGE: 1.25,
    DELIVER_MAP_PIN: 0.45,
    DELIVERY_ICON: 1,
    VEHICLE_IMAGE: 1.25,
    VEHICLE_MAP_PIN: 0.45,
    ADS_BANNER_IMAGE: 1.25,
    ADS_FULL_IMAGE: 0.8
};

export var WEEK_DAY = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

export var ERROR_CODE_CONSTANT = {
    TOKEN_EXPIRED: 999,
    STORE_DATA_NOT_FOUND: 634,
    DATA_NOT_FOUND: 1000,
    TOKEN_INVALID: 2000
};


export var ORDER_STATUS_ID = {
    IDEAL: 0,
    RUNNING: 1,
    CANCELLED: 2,
    REJECTED: 3,
    NO_ANSWER: 4,
    COMPLETED: 10
};

export var WALLET_REQUEST_STATUS = {
    CREATED: 1,
    ACCEPTED: 2,
    TRANSFERED: 3,
    COMPLETED: 4,
    CANCELLED: 5
};

export var PAYMENT_GATEWAY = {
    CASH: 'cash',
    STRIPE: '586f7db95847c8704f537bd5',
    PAYPAL: '586f7db95847c8704f537bd6'
}




export var PROVIDER_TYPE = {
    NORMAL: 1,
    OTHER: 2
};

export var PROVIDER_TYPE_STRING = {
    NORMAL_STRING: 'Normal',
    OTHER_STRING: 'Other'
};

export var price_validation = {
    MAX_PRICE: 999,
    MAX_PRICE_AFTER_POINT: 9
}

export var TIMEOUT = {
    TOASTER_NOTIFICATION: 5000,
    PUSH_NOTIFICATION: 20000,
    NEW_PUSH_NOTIFICATION_REQUEST: 5000,
    NEW_ORDER_REQUEST: 5000
}

export var ADMIN_DATA_ID = {
    ADMIN: 1,
    SUB_ADMIN: 3,
    STORE: 2,
    USER: 7,
    PROVIDER: 8,
    PROVIDER_VEHICLE: 9
};


export var ADMIN_PROFIT_ON_ORDER = [
    {ID: 1, NAME: "PERCENTAGE"},
    {ID: 2, NAME: "PER ORDER"},
    {ID: 3, NAME: "PER ITEMS"}
];
// CONSTANTS
export var ADMIN_PROFIT_ON_ORDER_ID = {
    PERCENTAGE: 1,
    PER_ORDER: 2,
    PER_ITEMS: 3
};
export var ADMIN_PROFIT_ON_ORDER_STRING = {
    PERCENTAGE: "Percentage",
    PER_ORDER: "Absolute price per order",
    PER_ITEMS: "Absolute price per item"
};
export var ADMIN_PROFIT_ON_DELIVERY_ID = {
    PERCENTAGE: 1,
    PER_DELVIERY: 2
};

export var ADMIN_PROFIT_ON_DELIVERY_STRING = {
    PERCENTAGE: "Percentage",
    PER_DELVIERY: "Absolute price per delivery"
};
// CONSTANT ARRAY 
export var ADMIN_PROFIT_ON_ORDERS = [
    {ID: ADMIN_PROFIT_ON_ORDER_ID.PERCENTAGE, NAME: ADMIN_PROFIT_ON_ORDER_STRING.PERCENTAGE},
    {ID: ADMIN_PROFIT_ON_ORDER_ID.PER_ORDER, NAME: ADMIN_PROFIT_ON_ORDER_STRING.PER_ORDER},
    {ID: ADMIN_PROFIT_ON_ORDER_ID.PER_ITEMS, NAME: ADMIN_PROFIT_ON_ORDER_STRING.PER_ITEMS}
];
export var ADMIN_PROFIT_ON_DELIVERYS = [
    {ID: ADMIN_PROFIT_ON_DELIVERY_ID.PERCENTAGE, NAME: ADMIN_PROFIT_ON_DELIVERY_STRING.PERCENTAGE},
    {ID: ADMIN_PROFIT_ON_DELIVERY_ID.PER_DELVIERY, NAME: ADMIN_PROFIT_ON_DELIVERY_STRING.PER_DELVIERY}

];


export var ADMIN_IMAGE_TYPE_ID = {
    JPG: "image/jpg",
    PNG: "image/png",
    JPEG: "image/jpeg"
};

export var ADMIN_IMAGE_TYPE_STRING = {
    JPG: "jpg",
    PNG: "png",
    JPEG: "jpeg"
};

export var ADMIN_IMAGE_TYPES = [
    {ID: ADMIN_IMAGE_TYPE_ID.JPG, NAME: ADMIN_IMAGE_TYPE_STRING.JPG},
    {ID: ADMIN_IMAGE_TYPE_ID.PNG, NAME: ADMIN_IMAGE_TYPE_STRING.PNG},
    {ID: ADMIN_IMAGE_TYPE_ID.JPEG, NAME: ADMIN_IMAGE_TYPE_STRING.JPEG}

];

export var PROMO_FOR_ID = {
    SERVICE: 20,
    DELIVERIES: 0,
    STORE: 2,
    PRODUCT: 21,
    ITEM: 22
};

// export var PROMO_FOR_ID = {
//     DELIVERIES: 0,
//     STORE: 2,
//     PRODUCT: 11,
//     ITEM: 12
// };

export var PROMO_FOR_STRING = {
    DELIVERIES: "Deliveries",
    STORE: "Store",
    PRODUCT: "Product",
    ITEM: "Item",
    SERVICE: 'Service'
};
// CONSTANT ARRAY 
export var PROMO_FOR = [
    {ID: PROMO_FOR_ID.STORE, NAME: PROMO_FOR_STRING.STORE},
    {ID: PROMO_FOR_ID.PRODUCT, NAME: PROMO_FOR_STRING.PRODUCT},
    {ID: PROMO_FOR_ID.ITEM, NAME: PROMO_FOR_STRING.ITEM}
];

export var MONTH = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export var WEEK = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
]

export var DAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

export var PROMO_RECURSION_ID = {
    NO_RECURSION: 0,
    DAILY_RECURSION: 1,
    WEEKLY_RECURSION: 2,
    MONTHLY_RECURSION: 3,
    ANNUALLY_RECURSION: 4
};
export var PROMO_RECURSION_STRING = {
    NO_RECURSION: "No Recursion",
    DAILY_RECURSION: "Daily Recursion",
    WEEKLY_RECURSION: "Weekly Recursion",
    MONTHLY_RECURSION: "Monthly Recursion",
    ANNUALLY_RECURSION: "Annually Recursion"
};

export var PROMO_RECURSION = [
    {ID: PROMO_RECURSION_ID.NO_RECURSION, NAME: PROMO_RECURSION_STRING.NO_RECURSION},
    {ID: PROMO_RECURSION_ID.DAILY_RECURSION, NAME: PROMO_RECURSION_STRING.DAILY_RECURSION},
    {ID: PROMO_RECURSION_ID.WEEKLY_RECURSION, NAME: PROMO_RECURSION_STRING.WEEKLY_RECURSION},
    {ID: PROMO_RECURSION_ID.MONTHLY_RECURSION, NAME: PROMO_RECURSION_STRING.MONTHLY_RECURSION},
    {ID: PROMO_RECURSION_ID.ANNUALLY_RECURSION, NAME: PROMO_RECURSION_STRING.ANNUALLY_RECURSION}
];


export var ADMIN_PROMO_FOR_ID = {
    DELIVERIES: 0,
    STORE: 2,
    SERVICE: 20,
    PRODUCT: 21,
    ITEM: 22
};

export var ADMIN_PROMO_FOR_STRING = {
    DELIVERIES: "Deliveries",
    STORE: "Store",
    SERVICE: "Service",
    PRODUCT: "Product",
    ITEM: "Item",

};
// CONSTANT ARRAY 
export var ADMIN_PROMO_FOR = [
    {ID: ADMIN_PROMO_FOR_ID.DELIVERIES, NAME: ADMIN_PROMO_FOR_STRING.DELIVERIES},
    {ID: ADMIN_PROMO_FOR_ID.STORE, NAME: ADMIN_PROMO_FOR_STRING.STORE},
    {ID: ADMIN_PROMO_FOR_ID.PRODUCT, NAME: ADMIN_PROMO_FOR_STRING.PRODUCT},
    {ID: ADMIN_PROMO_FOR_ID.ITEM, NAME: ADMIN_PROMO_FOR_STRING.ITEM},
    {ID: ADMIN_PROMO_FOR_ID.SERVICE, NAME: ADMIN_PROMO_FOR_STRING.SERVICE}
];


export var ADMIN_PROMO_FOR_DELIVERY_SERVICE_ID = {
    DELIVERY_SERVICE: 13,

};

export var ADMIN_PROMO_FOR_DELIVERY_SERVICE_STRING = {
    DELIVERY_SERVICE: "Delivery Service",

};
// CONSTANT ARRAY 
export var ADMIN_PROMO_FOR_DELIVERY_SERVICE = [
    {ID: ADMIN_PROMO_FOR_DELIVERY_SERVICE_ID.DELIVERY_SERVICE, NAME: ADMIN_PROMO_FOR_DELIVERY_SERVICE_STRING.DELIVERY_SERVICE}

];



export var ADMIN_URL_ID = {
    DASHBOARD: "/admin/dashboard",
    USER: "/admin/users",
    PROVIDER: "/admin/providers",
    STORES: "/admin/stores",
    STORE_LOCATION: "/admin/store_location",
    PROVIDER_LOCATION: "/admin/provider_location",
    PROVIDER_TRACK: "/admin/location_track",
    DELIVERY: "/admin/delivery",
    VEHICLE: "/admin/vehicle",
    COUNTRY: "/admin/country",
    CITY: "/admin/city",
    DELIVERIES_PRICES: "/admin/service",
    ORDERS: "/admin/orders",
    DELIVERIES: "/admin/deliveries",
    HISTORY: "/admin/history",
    ORDER_EARNING: "/admin/order_earning",
    PROVIDER_WEEKLY_EARNING: "/admin/provider_weekly_earning",
    STORE_WEEKLY_EARNING: "/admin/store_weekly_earning",
    ADMIN_SETTINGS: "/setting/basic_setting",
    PROMO_CODE: "/admin/promotions",
    REFERRAL_DETAIL: "/admin/referral_detail",
    WALLET_HISTORY: "/admin/wallet_detail",
    WALLET_REQUEST: "/admin/wallet_request",
    TRANSACTION_HISTORY: "/admin/transaction_history",
    ADS: "/admin/advertise",
    DOCUMENTS: "/admin/document",
    MAIL: "/admin/email",
    SMS: "/admin/sms"
};

export var WALLET_COMMENT_ID = {
    SET_BY_ADMIN: 1,
    ADDED_BY_CARD: 2,
    ADDED_BY_REFERRAL: 3,
    ORDER_CHARGED: 4,
    ORDER_REFUND: 5,
    SET_ORDER_PROFIT: 6,
    ORDER_CANCELLATION_CHARGE: 7,
    SET_BY_WALLET_REQUEST: 8,

    SET_WEEKLY_PAYMENT_BY_ADMIN: 9,
};

export var ADMIN_URL_STRING = {
    DASHBOARD: "Dashboard",
    USER: "User",
    PROVIDER: 'Deliveryman',
    STORES: "Store",
    STORE_LOCATION: "Store Location",
    PROVIDER_LOCATION: "Deliveryman Location",
    PROVIDER_TRACK: "Deliveryman Track",
    DELIVERY: "Delivery",
    VEHICLE: "Vehicle",
    COUNTRY: "Country",
    CITY: "City",
    DELIVERIES_PRICES: "Deliveries Prices",
    ORDERS: "Orders",
    DELIVERIES: "Deliveries",
    HISTORY: "History",
    ORDER_EARNING: "Order Earning",
    PROVIDER_WEEKLY_EARNING: "Deliveryman Weekly Earning",
    STORE_WEEKLY_EARNING: "Store Weekly Earning",
    ADMIN_SETTINGS: "Admin Settings",
    PROMO_CODE: "Promo Code",
    REFERRAL_DETAIL: "Referral Detail",
    WALLET_HISTORY: "Wallet History",
    WALLET_REQUEST: "Wallet Request",
    TRANSACTION_HISTORY: "Transaction History",
    ADS: "Ads",
    DOCUMENTS: "Documents",
    MAIL: "Mail",
    SMS: "SMS",
};





// CONSTANT ARRAY 
export var ADMIN_URL = [
    {ID: ADMIN_URL_ID.DASHBOARD, NAME: ADMIN_URL_STRING.DASHBOARD},
    {ID: ADMIN_URL_ID.USER, NAME: ADMIN_URL_STRING.USER},
    {ID: ADMIN_URL_ID.STORES, NAME: ADMIN_URL_STRING.STORES},
    {ID: ADMIN_URL_ID.PROVIDER, NAME: ADMIN_URL_STRING.PROVIDER},
    {ID: ADMIN_URL_ID.STORE_LOCATION, NAME: ADMIN_URL_STRING.STORE_LOCATION},
    {ID: ADMIN_URL_ID.PROVIDER_LOCATION, NAME: ADMIN_URL_STRING.PROVIDER_LOCATION},
    {ID: ADMIN_URL_ID.PROVIDER_TRACK, NAME: ADMIN_URL_STRING.PROVIDER_TRACK},
    {ID: ADMIN_URL_ID.DELIVERY, NAME: ADMIN_URL_STRING.DELIVERY},
    {ID: ADMIN_URL_ID.VEHICLE, NAME: ADMIN_URL_STRING.VEHICLE},
    {ID: ADMIN_URL_ID.COUNTRY, NAME: ADMIN_URL_STRING.COUNTRY},
    {ID: ADMIN_URL_ID.CITY, NAME: ADMIN_URL_STRING.CITY},
    {ID: ADMIN_URL_ID.DELIVERIES_PRICES, NAME: ADMIN_URL_STRING.DELIVERIES_PRICES},
    {ID: ADMIN_URL_ID.TRANSACTION_HISTORY, NAME: ADMIN_URL_STRING.TRANSACTION_HISTORY},
    {ID: ADMIN_URL_ID.ORDERS, NAME: ADMIN_URL_STRING.ORDERS},
    {ID: ADMIN_URL_ID.DELIVERIES, NAME: ADMIN_URL_STRING.DELIVERIES},
    {ID: ADMIN_URL_ID.HISTORY, NAME: ADMIN_URL_STRING.HISTORY},
    {ID: ADMIN_URL_ID.ORDER_EARNING, NAME: ADMIN_URL_STRING.ORDER_EARNING},
    {ID: ADMIN_URL_ID.PROVIDER_WEEKLY_EARNING, NAME: ADMIN_URL_STRING.PROVIDER_WEEKLY_EARNING},
    {ID: ADMIN_URL_ID.STORE_WEEKLY_EARNING, NAME: ADMIN_URL_STRING.STORE_WEEKLY_EARNING},
    {ID: ADMIN_URL_ID.ADMIN_SETTINGS, NAME: ADMIN_URL_STRING.ADMIN_SETTINGS},
    {ID: ADMIN_URL_ID.PROMO_CODE, NAME: ADMIN_URL_STRING.PROMO_CODE},
    {ID: ADMIN_URL_ID.REFERRAL_DETAIL, NAME: ADMIN_URL_STRING.REFERRAL_DETAIL},
    {ID: ADMIN_URL_ID.WALLET_HISTORY, NAME: ADMIN_URL_STRING.WALLET_HISTORY},
    {ID: ADMIN_URL_ID.WALLET_REQUEST, NAME: ADMIN_URL_STRING.WALLET_REQUEST},
    {ID: ADMIN_URL_ID.ADS, NAME: ADMIN_URL_STRING.ADS},
    {ID: ADMIN_URL_ID.DOCUMENTS, NAME: ADMIN_URL_STRING.DOCUMENTS},
    {ID: ADMIN_URL_ID.MAIL, NAME: ADMIN_URL_STRING.MAIL},
    {ID: ADMIN_URL_ID.SMS, NAME: ADMIN_URL_STRING.SMS}
];