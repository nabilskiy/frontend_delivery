import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Http, Response} from '@angular/http';
import { NgForm} from '@angular/forms';
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Helper} from "../../helper";
declare var jQuery: any;

export interface AppSwitchSetting {
    push_marketing_enable: Boolean,
    push_marketing_schedule_timeout: Number
}

@Component({
    selector: 'app-push_marketing',
    templateUrl: './push_marketing.component.html',
    providers: [Helper]
})

export class PushMarketingComponent implements OnInit {
    constructor(public helper: Helper, public vcr: ViewContainerRef) {
        helper.toastr.setRootViewContainerRef(vcr);
    }

    private app_switch_setting: AppSwitchSetting;

    title: any;
    button: any;
    heading_title: any;
    validation_message: any;
    DATE_FORMAT: any;
    myLoading: boolean = true;

    push_marketing_message_text: string;
    push_marketing_messages: any[] = [];

    @ViewChild('message_delete_modal')
    message_delete_modal: ModalComponent;
    message_should_delete:any = null;

    ngOnInit() {

        this.title = this.helper.title;
        this.button = this.helper.button;
        this.heading_title = this.helper.heading_title;
        this.validation_message = this.helper.validation_message;
        this.DATE_FORMAT = this.helper.DATE_FORMAT;

        this.app_switch_setting = {
            push_marketing_enable: false,
            push_marketing_schedule_timeout: 0
        }

        this.helper.http.post('/api/admin/get_setting_detail', {})
            .map((res: Response) => res.json())
            .subscribe(res_data => {
                this.app_switch_setting.push_marketing_enable = res_data.setting.push_marketing_enable;
                this.app_switch_setting.push_marketing_schedule_timeout = Number(res_data.setting.push_marketing_schedule_timeout);
            }, error => {});

        this.helper.http.get('/api/admin/push_marketing_get_messages')
            .map((res: Response) => res.json())
            .subscribe(res_data => {
                this.push_marketing_messages = res_data.messages;
            }, error => {});

        this.myLoading = false;
    }

    AppSwitchSetting(app_switch_setting_data) {
        console.log('send data => ', app_switch_setting_data)

        this.helper.http.post('/admin/update_switch_setting', {
            optional: true,
            optionalData: app_switch_setting_data
        }).map((res: Response) => res.json())
            .subscribe(res_data => {
                    console.log('update_switch_setting', res_data)
                this.myLoading = false;
                if (res_data.success == true) {
                    this.helper.data.storage = {
                        "message": this.helper.MESSAGE_CODE[res_data.message],
                        "class": "alert-info"
                    }
                }

                this.helper.message();
                this.helper.router.navigate(['admin/push_marketing']);

            },
            (error: any) => {
                this.myLoading = false;
                this.helper.http_status(error)
            });
    }

    createNewMessage(formData) {
        this.helper.http.post('/api/admin/push_marketing_create_message', {
            text: formData.push_marketing_message_text
        })
        .map((res: Response) => res.json())
        .subscribe(res_data => {
            if (res_data.success) {
                this.push_marketing_messages.push(res_data.message);
                this.push_marketing_message_text = '';
            }
        }, (error: any) => {
            this.helper.http_status(error)
        });
    }

    openDeleteMessageModal(message) {
        this.message_should_delete = message;
        this.message_delete_modal.open();
    }

    closeDeleteMessageModal() {
        this.message_should_delete = undefined;
        this.message_delete_modal.close();
    }

    delete_message() {
        let index = undefined;

        this.push_marketing_messages.forEach((push_message, item_index) => {
            if (push_message._id === this.message_should_delete._id) {
                index = item_index;
            }
        });

        this.push_marketing_messages.splice(index, 1);

        this.helper.http.post('/api/admin/push_marketing_delete_message', {
            message_id: this.message_should_delete._id
        })
            .map((res: Response) => res.json())
            .subscribe(res_data => {
                this.closeDeleteMessageModal();
            }, (error: any) => {
                this.helper.http_status(error)
            });
    }
}
