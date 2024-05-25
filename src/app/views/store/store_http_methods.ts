let http_url = 'http://localhost:8000'

export var GET_METHOD = {

    GET_COUNTRY_LIST : 'api/admin/get_country_list'
}

export var POST_METHOD = {

    GET_SETTING_DETAIL : '/api/admin/get_setting_detail',
    ADMIN_OTP_VERIFICATION : '/api/admin/otp_verification',
    FORGOT_PASSWORD : '/api/admin/forgot_password',
    CHECK_DETAIL : '/api/admin/check_detail',
    NEW_PASSWORD : '/api/admin/new_password',
    CHECK_REFERRAL: '/api/admin/check_referral',
    GET_CITY_LIST: '/api/admin/get_city_list',
    GET_DELIVERY_LIST_FOR_CITY: '/api/admin/get_delivery_list_for_city',
    GET_DOCUMENT_LIST : '/api/admin/get_document_list',
    UPLOAD_DOCUMENT : '/api/admin/upload_document',
    ADD_ITEM_IN_CART: "api/user/add_item_in_cart",
    GET_ORDER_CART_INVOICE: "api/user/get_order_cart_invoice",
    GET_STORE_ORDER_INVOICE: "api/store/get_order_invoice",
    GET_USER :"/api/store/get_user",
    PAY_ORDER_PAYMENT: "api/user/pay_order_payment",
    STORE_PAY_ORDER_PAYMENT: "api/store/pay_order_payment",
    CREATE_ORDER: "api/user/create_order",
    STORE_CREATE_ORDER: "api/store/create_order",
    APPLY_PROMO_CODE: "api/user/apply_promo_code",
    GET_COUNTRY_PHONE_NUMBER_LENGTH: 'api/store/get_country_phone_number_length',

    GET_PRODUCT_LIST : '/api/store/get_product_list',
    GET_SOECIFICATION_LIST : '/api/store/get_specification_lists',
    ADD_ITEM : '/api/store/add_item',
    UPLOAD_ITEM_IMAGE : '/api/store/upload_item_image',
    DAILY_EARNING : '/api/store/daily_earning',
    DELIVERY_LIST_SEARCH_SORT : '/api/store/delivery_list_search_sort',
    STORE_CANCEL_OR_REJECT_ORDER : '/api/store/store_cancel_or_reject_order',
    CANCEL_REQUEST : '/api/store/cancel_request',
    CREATE_REQUEST : '/api/store/create_request',
    GET_VEHICLE_LIST : '/api/store/get_vehicle_list',
    STORE_COMPLETE_ORDER :"api/store/complete_order",
    ORDER_PAYMENT_STATUS_SET_ON_CASH_ON_DELIVERY : '/api/store/order_payment_status_set_on_cash_on_delivery',
    GET_STORE_EARNING : '/api/store/get_store_earning',
    GET_ITEM_DATA : '/api/store/get_item_data',
    GET_SPECIFICATION_LISTS : '/api/store/get_specification_lists',
    UPDATE_ITEM : '/api/store/update_item',
    CHANGE_DELIVERY_ADDRESS: 'api/user/change_delivery_address',
    STORE_CHANGE_DELIVERY_ADDRESS: 'api/store/store_change_delivery_address',
    UPDATE_ITEM_IMAGE : '/api/store/update_item_image',
    DELETE_ITEM_IMAGE : '/api/store/delete_item_image',
    GET_PRODUCT_DATA : '/api/store/get_product_data',
    UPDATE_PRODUCT : '/api/store/update_product',
    HISTORY : '/api/store/history',
    GET_STORE_PRODUCT_ITEM_LIST : '/api/store/get_store_product_item_list',
    IS_ITEM_IN_STOCK: '/api/store/is_item_in_stock',
    ORDER_LIST_SEARCH_SORT : '/api/store/order_list_search_sort',
    SET_ORDER_STATUS : '/api/store/set_order_status',
    GET_ORDER_DATA : '/api/store/get_order_data',
    ADD_PRODUCT : '/api/store/add_product',
    GET_STORE_DATA : '/api/store/get_store_data',
    UPDATE : '/api/store/update',
    OTP_VERIFICATION : '/api/store/otp_verification',
    UPDATE_STORE_TIME : '/api/store/update_store_time',
    GET_SPECIFICATION_GROUP: '/api/store/get_specification_group',
    ADD_SPECIFICATION_GROUP : '/api/store/add_specification_group',
    DELETE_ITEM : '/api/store/delete_item',
    DELETE_SPECIFICATION_GROUP : '/api/store/delete_specification_group',
    ADD_SPECIFICATION : '/api/store/add_specification',
    DELETE_SPECIFICATION : '/api/store/delete_specification',
    LOGIN : '/api/store/login',
    LOGOUT: '/api/store/logout',
    REGISTER : '/api/store/register',
    PROVIDER_LOCATION_TRACK : '/api/store/provider_location_track',
    GET_ORDER_DETAIL : '/api/store/get_order_detail',
    STORE_UPDATE_ORDER : '/api/store/update_order',
    WEEKLY_EARNING : '/api/store/weekly_earning',
    STORE_RATING_TO_USER:"/api/store/rating_to_user",
    STORE_RATING_TO_PROVIDER:"/api/store/rating_to_provider",

    GET_IMAGE_SETTING : '/api/admin/get_image_setting',
    UPDATE_SEQUENCE_NMBER: 'api/store/update_sequence_number',
    COMPLETE_REQUEST: 'api/provider/complete_request'


}