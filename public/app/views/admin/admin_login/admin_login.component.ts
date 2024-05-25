
import {map} from 'rxjs/operators';
import {OnInit, Component, ViewContainerRef, ViewChild} from '@angular/core';
import {Helper} from "../../helper";
import {Http, Response} from '@angular/http';
declare var jQuery: any;
import {Observable} from 'rxjs';


import {Router} from '@angular/router';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'admin_login',
    templateUrl: 'admin_login.template.html',
    providers: [Helper]
})
export class admin_loginComponent implements OnInit {
    title: any;
    button: any;

    myLoading: boolean = true;
    constructor(public helper: Helper, public vcr: ViewContainerRef) {
        helper.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.helper.message();
        this.title = this.helper.title;
        this.button = this.helper.button;
    }

    check_verify(logindata) {
        this.helper.http.post('/login', logindata).pipe(map((res: Response) => res.json())).subscribe(res_data => {
            this.myLoading = false;
            if (res_data.success == true) {
                localStorage.setItem('admin_id', res_data.admin_data._id);
                localStorage.setItem('admin_token', res_data.admin_data.server_token);
                this.helper.data.storage = {
                    "message": this.helper.MESSAGE_CODE[res_data.message],
                    "class": "alert-info"
                }

                if (res_data.admin_data.admin_type === 3) {
                    this.helper.router.navigate(['admin/orders']);
                } else {
                    this.helper.router.navigate(['admin/dashboard']);
                }
            } else {
                this.helper.data.storage = {
                    "code": res_data.error_code,
                    "message": this.helper.ERROR_CODE[res_data.error_code],
                    "class": "alert-danger"
                }
                this.helper.message();
                this.helper.router.navigate(['admin/login']);

            }

        },
            (error: any) => {
                this.myLoading = false;
                this.helper.http_status(error)
            });
    }


}
