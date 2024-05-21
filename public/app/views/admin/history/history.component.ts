import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Response} from '@angular/http';
import {Helper} from "../../helper";
import * as moment from 'moment-timezone';
declare var jQuery: any;
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    providers: [Helper]
})
export class HistoryComponent implements OnInit {

    @ViewChild('modal')
    modal: ModalComponent;
    @ViewChild('order_detail_modal')
    order_detail_modal: ModalComponent;
    @ViewChild('review_detail_modal')
    review_detail_modal: ModalComponent;

    title:any;
    button:any;
    ORDER_STATE:any;
    heading_title:any;
    status:any;
    order_list:any[];
    pickup_type: any = 'both'
    order_type: any = 'both';
    payment_status: any = 'all';
    created_by: any = 'both';
    order_status_id:string;
    search_field:string;
    search_value:string;
    start_date:string;
    end_date:string;
    page:number;
    total_page:number;
    total_pages:number[];
    moment: any;
    timezone: string = '';
    order_id:Object = '';
    rating:number = 1;
    review:string = '';
    type:number;
    selected_order_index:number = 0;
    order_detail: any = {};

    total_item:number = 0;
    order_total:number = 0;
    product_item_total:number = 0;
    product_item_total_array:number[] = [];
    product_item_specification_total:number = 0;
    product_item_specification_total_array:number[] = [];
    product_specification_total_array:any[] = [];
    hide_specification_group: any[] = [];
    specifications: any[] = [];
    item_note: string = '';
    is_show_specification: boolean = false;
    currency_sign: any = '';
    myLoading:boolean = true;
    review_detail: any = {};

    constructor(private helper: Helper, public vcr: ViewContainerRef) {
        helper.toastr.setRootViewContainerRef(vcr);
    }
    ngAfterViewInit() {
        jQuery(".chosen-select").chosen({disable_search: true});
        setTimeout(function () {
            jQuery(".chosen-select").trigger("chosen:updated");
        }, 1000);
    }
    ngOnInit() {
        this.order_status_id="";
        this.search_field="user_detail.first_name";
        this.search_value="";
        this.start_date='';
        this.end_date='';
        this.page=1;
        this.moment = moment;

        this.helper.message()

        this.title=this.helper.title
        this.button=this.helper.button
        this.heading_title=this.helper.heading_title
        this.ORDER_STATE=this.helper.ORDER_STATE
        this.status=this.helper.status
        this.order_list=[];

        this.store_history(1)

        jQuery(this.helper.elementRef.nativeElement).find('#order_status_id').on('change', (evnt,res_data) => {
            this.order_status_id=res_data.selected;
        });
        jQuery(this.helper.elementRef.nativeElement).find('#search_field').on('change', (evnt,res_data) => {
            this.search_field=res_data.selected;
        });
        jQuery(this.helper.elementRef.nativeElement).find('#pickup_type').on('change', (evnt, res_data) => {

            this.pickup_type = res_data.selected;

        });
        jQuery(this.helper.elementRef.nativeElement).find('#created_by').on('change', (evnt, res_data) => {

            this.created_by = res_data.selected;

        });

        jQuery(this.helper.elementRef.nativeElement).find('#order_type').on('change', (evnt, res_data) => {

            this.order_type = res_data.selected;

        });

        jQuery(this.helper.elementRef.nativeElement).find('#payment_status').on('change', (evnt, res_data) => {

            this.payment_status = res_data.selected;

        });
    }
    activeRoute(routename: string): boolean {
        return this.helper.router.url.indexOf(routename) > -1;
    }
    open_detail_modal(index){
        this.order_detail = this.order_list[index];
        this.is_show_specification = false;
        this.order_total = 0;
        this.product_item_total = 0;
        this.total_item = 0;
        this.product_item_specification_total = 0;
        this.product_item_specification_total_array = [];
        this.product_item_total_array = [];
        this.product_specification_total_array = [];
        this.order_detail.cart_detail.order_details.forEach((product, product_index)=>{
            this.hide_specification_group[product_index]="false"
            product.items.forEach((item) =>{
                this.order_total=this.order_total + (item.item_price + item.total_specification_price)*item.quantity
                this.product_item_total=this.product_item_total + (item.item_price + item.total_specification_price)*item.quantity
                this.total_item++;
                item.specifications.forEach((specification)=>{
                    this.product_item_specification_total= this.product_item_specification_total + specification.specification_price;
                })
                this.product_item_specification_total_array.push(this.product_item_specification_total)
                this.product_item_specification_total=0;
            })
            this.product_specification_total_array.push(this.product_item_specification_total_array)
            this.product_item_specification_total_array=[];
            this.product_item_total_array.push(this.product_item_total)
            this.product_item_total=0;
        })
        this.order_detail_modal.open();
    }
    hide_specifications_group(specification_group_index)
    {
        this.hide_specification_group[specification_group_index]='true';
        jQuery('#spec_list'+specification_group_index).hide();
    }

    show_specifications_group(specification_group_index)
    {
        this.hide_specification_group[specification_group_index]='false';
        jQuery('#spec_list'+specification_group_index).show();
    }

    get_specification(product_index, item_index){
        this.is_show_specification= true;
        this.specifications = this.order_detail.cart_detail.order_details[product_index].items[item_index].specifications;
        this.item_note = this.order_detail.cart_detail.order_details[product_index].items[item_index].note_for_item;
    }

    history_export_csv() {
        this.helper.http.post('/api/admin/history', {
            start_date:this.start_date,end_date:this.end_date,payment_status: this.payment_status, created_by: this.created_by, pickup_type: this.pickup_type,
            order_status_id:this.order_status_id, search_field:this.search_field,search_value:this.search_value, order_type: this.order_type
        }).map((res: Response) => res.json()).subscribe(res_data => {


            var json2csv = require('json2csv');
            res_data.orders.forEach((order, index) => {
                if (order.order_payment_detail.is_paid_from_wallet) {
                    order.payment_status = this.title.wallet;
                } else {
                    if (order.order_payment_detail.is_payment_mode_cash) {
                        order.payment_status = this.helper.title.cash;
                    } else {
                        if (order.payment_gateway_detail.length > 0) {

                            order.payment_status = order.payment_gateway_detail[0].name;
                        }
                    }
                }

                order.user_name = order.user_detail.first_name + ' ' + order.user_detail.last_name;
                order.store_name = order.store_detail.name;
                order.city_name = order.city_detail.city_name;
                if (order.request_detail !== undefined) {
                    if (order.provider_detail) {
                        order.provider_name = order.provider_detail.first_name + ' ' + order.provider_detail.last_name;
                    }
                }

                switch (order.order_status) {
                    case this.ORDER_STATE.STORE_REJECTED:
                        order.status = this.status.rejected;
                        break;
                    case this.ORDER_STATE.STORE_CANCELLED:
                        order.status = this.status.cancelled;
                        break;

                    case this.ORDER_STATE.CANCELED_BY_USER:
                        order.status = this.status.user_cancelled;
                        break;
                    case this.ORDER_STATE.DELIVERY_MAN_COMPLETE_DELIVERY:
                        order.status = this.status.order_delivered;
                        break;
                    case this.ORDER_STATE.ORDER_COMPLETED:
                        order.status = this.status.completed;
                        break;
                    default:
                        order.satus = '';
                }

               order.amount = ((+order.order_payment_detail.total_delivery_price + +order.order_payment_detail.total_order_price).toFixed(2));
            });

            var fieldNames = [this.title.id,
            this.title.user,
            this.title.store,
            this.title.city,
            this.title.provider,
            this.title.status,
            this.title.amount,
            this.title.payment_by,
            this.title.date,
            this.title.delivery_at
            ];
            var fields = ['unique_id',
                'user_name',
                'store_name',
                'city_name',
                'provider_name',
                'status',
                'amount',
                'payment_status',
                'updated_at',
                'completed_at'
            ];


            var csv = json2csv({data: res_data.orders, fields: fields, fieldNames: fieldNames});

            var final_csv: any = csv;
            this.helper.downloadFile(final_csv);
        });
    }


    history_export_excel() {
       this.helper.http.post('/api/admin/history', {
            start_date: this.start_date, end_date: this.end_date,
            search_field: this.search_field, search_value: this.search_value
        }).map((res: Response) => res.json()).subscribe(res_data => {

            var json_data = [];
            var json2excel = require('js2excel');
            res_data.orders.forEach((order, index) => {
                if (order.order_payment_detail.is_paid_from_wallet) {
                    order.payment_status = this.title.wallet;
                } else {
                    if (order.order_payment_detail.is_payment_mode_cash) {
                        order.payment_status = this.helper.title.cash;
                    } else {
                        if (order.payment_gateway_detail.length > 0) {

                            order.payment_status = order.payment_gateway_detail[0].name;
                        }
                    }
                }

                order.user_name = order.user_detail.first_name + ' ' + order.user_detail.last_name;
                order.store_name = order.store_detail.name;

                order.city_name = order.city_detail.city_name;
                if (order.request_detail != undefined) {


                if (order.provider_detail.length > 0) {
                    order.provider_name = order.provider_detail[0].first_name + ' ' + order.provider_detail[0].last_name;
                }
                }

                switch (order.order_status) {
                    case this.ORDER_STATE.STORE_REJECTED:
                        order.status = this.status.rejected;
                        break;
                    case this.ORDER_STATE.STORE_CANCELLED:
                        order.status = this.status.cancelled;
                        break;

                    case this.ORDER_STATE.CANCELED_BY_USER:
                        order.status = this.status.user_cancelled;
                        break;
                    case this.ORDER_STATE.DELIVERY_MAN_COMPLETE_DELIVERY:
                        order.status = this.status.order_delivered;
                        break;
                    case this.ORDER_STATE.ORDER_COMPLETED:
                        order.status = this.status.completed;
                        break;
                    default:
                        order.satus = '';
                }

               order.amount = ((+order.order_payment_detail.total_delivery_price + +order.order_payment_detail.total_order_price).toFixed(2));

               json_data.push({
                    "ID": order.unique_id,
                    "User":order.user_name,
                    "Store":order.store_name,
                    "Provider":order.provider_name,
                    "City":order.city_name,
                    "Status":order.status,
                    "Amount":order.amount,
                    "Payment By":order.payment_status,
                    "Date":order.created_at

                 });

              });

            json2excel.json2excel({
                data: json_data,
                name: 'history_excel',
                formateDate: 'yyyy/mm/dd'
            });

        });
    }

    store_history(page)
    {
        this.myLoading=true;
        this.selected_order_index = 0;
        this.page=page;
        this.helper.http.post('/api/admin/history',{start_date:this.start_date,end_date:this.end_date,created_by: this.created_by,payment_status: this.payment_status, pickup_type: this.pickup_type,
            order_status_id:this.order_status_id, search_field:this.search_field,search_value:this.search_value,page:this.page, order_type: this.order_type }).map((res:Response) => res.json()).subscribe(res_data=>{
                console.log(res_data)
                this.myLoading=false;
                if(res_data.success == false)
                {
                    this.order_list=[];
                    this.total_pages=[];
                }
                else
                {
                    this.currency_sign = res_data.currency_sign;
                    this.order_list=res_data.orders;
                    this.total_page=res_data.pages;
                    this.total_pages=Array(res_data.pages).fill((x,i)=>i).map((x,i)=>i+1)
                    if(this.order_list.length>0){
                        this.order_detail = this.order_list[0];
                    }
                }
            },
            (error: any) => {
                this.myLoading=false;
                this.helper.http_status(error)
            });
    }

    show_review(order_id){
        console.log(order_id)
        this.helper.http.post('/admin/get_review_detail', {order_id: order_id}).map((res:Response) => res.json()).subscribe(res_data=> {
            if(res_data.success){
                this.review_detail = res_data.review_detail;
                console.log(this.review_detail)
                this.review_detail_modal.open();
            } else {
                this.review_detail = {};
            }
        });
    }

    get_order_detail(index){
        this.order_detail = this.order_list[index];
    }

    give_rate_modal(orderid , index, type)
    {
        this.rating = 1;
        this.review = '';
        this.type = type;
        this.order_id = orderid;
        this.modal.open()
        this.selected_order_index = index;
    }

    get_delivery_time(order) {
        let orderReady = null; //status 7 / but if car_calling we get pickUp time 17
        let completedTime = null; //status 25

        if (!order.request_detail || (order.cancel_reason !== "") || (!order.date_time.length)) {
            return 0;
        }

        if (order.order_payment_detail.use_car_calling) {
            const data = order.request_detail.date_time.filter(date => date.status === 17);

            if (!data || !data.length) {
                return 0;
            }

            orderReady = new Date(data[0].date).getTime();
        } else {
            const data = order.date_time.filter(date => date.status === 7);

            if (!data || !data.length) {
                return 0;
            }

            orderReady = new Date(data[0].date).getTime();
        }

        // for complete order wit btn (statuses empty) we need to check status
        const completeOrderDateTime = order.request_detail.date_time.filter(date => date.status === 25);

        if (!completeOrderDateTime.length) {
            return 0;
        }

        const { date: completedTimeDate } = order.request_detail.date_time.filter(date => date.status === 25)[0];

        completedTime = new Date(completedTimeDate).getTime();

        const spendTime = (completedTime - orderReady) / 60000;

        return spendTime < 1 ? 0 :  Math.ceil(spendTime);
    }

    get_delivery_time_background(order) {
        if (!order.request_detail) {
            return null;
        }

        const time = this.get_delivery_time(order);

        const timeBg = {
            20: 'to_20',
            35: 'to_35',
            60: 'to_60'
        }

        for(let key in timeBg) {
            if (time <= Number(key)) {
                return timeBg[key];
            }
        }

        return 'to_much';
    }
}


