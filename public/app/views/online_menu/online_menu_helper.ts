import { Component, NgZone ,ElementRef} from '@angular/core';
import { Http } from '@angular/http';
import { Data } from '../data';
import { Router, ActivatedRoute} from '@angular/router';
import { TokenService } from 'angular2-auth';
import {Response } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {
    ERROR_CODE_CONSTANT , IMPORT_STORE_DATA, MONTH, WEEK, DAY, PROMO_FOR_ID, PROMO_FOR_STRING, PROMO_FOR,
    PROMO_RECURSION_ID, PROMO_RECURSION_STRING, PROMO_RECURSION, ORDER_STATE , TIMEOUT , ORDER_STATUS_ID,
    ORDER_CANCELLATION_CHARGE_TYPE, ADMIN_DATA_ID, IMAGE_RATIO
} from '../../constant';
import { CONSTANT, price_validation } from "../../constant";
import {TranslateService} from 'ng2-translate';

import {Router_id} from '../routing_hidden_id';
import {title, button, heading_title , status , lable_title, message , menu_title} from '../store/store_panel_string';
import {ERROR_CODE} from '../store/store_panel_error_message ';
import {MESSAGE_CODE} from '../store/store_panel_success_message';
import {validation_message} from '../store/store_panel_validation_message';
import {GET_METHOD , POST_METHOD} from './online_menu_http_methods';
import {StoreCart} from "../store/cart";



@Component({
    selector: 'helper'
})

export class Helper {

    ///// for constant ////////////
    public ADMIN_DATA_ID:any = ADMIN_DATA_ID;
    public error_code : any = ERROR_CODE_CONSTANT;
    public ORDER_STATE : any = ORDER_STATE;
    public TIMEOUT : any = TIMEOUT;
    public ORDER_STATUS_ID:any = ORDER_STATUS_ID;
    public CONSTANT: any = CONSTANT;
    public title: any = title;
    public button: any = button;
    public heading_title: any = heading_title;
    public ERROR_CODE: any = ERROR_CODE;
    public MESSAGE_CODE: any = MESSAGE_CODE;
    public status: any = status;
    public messages:any = message;
    public menu_title:any = menu_title;
    public image_ratio:any = IMAGE_RATIO;
    public validation_message:any = validation_message;
    public ORDER_CANCELLATION_CHARGE_TYPE:any = ORDER_CANCELLATION_CHARGE_TYPE;

    public GET_METHOD: any = GET_METHOD;
    public POST_METHOD: any = POST_METHOD;
    public lable_title: any = lable_title;

    public PROMO_FOR_ID: any = PROMO_FOR_ID;
    public PROMO_FOR_STRING: any = PROMO_FOR_STRING;
    public PROMO_FOR: any = PROMO_FOR;

    public PROMO_RECURSION_ID: any = PROMO_RECURSION_ID;
    public PROMO_RECURSION_STRING: any = PROMO_RECURSION_STRING;
    public PROMO_RECURSION: any = PROMO_RECURSION;

    private log_boolean: Boolean = true;

    public WEEK: any = WEEK;
    public MONTH: any = MONTH;
    public DAY: any = DAY;

    public IMPORT_STORE_DATA: any = IMPORT_STORE_DATA;

    constructor(public trans: TranslateService, public http: Http,public ngZone:NgZone , public user_cart: StoreCart, public route: ActivatedRoute , public router_id: Router_id, public toastr: ToastsManager, public router: Router, public elementRef: ElementRef, public data: Data, public tokenService: TokenService) {};

}
