
import {map} from 'rxjs/operators';
import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Helper} from "../../helper";
import {Http, Response} from '@angular/http';
declare var jQuery: any;

@Component({
    selector: 'app-user-online-menu',
    templateUrl: './user_online_menu.component.html',
    providers: [Helper]
})

export class UserOnlineMenuComponent implements OnInit {

    button: any;
    title: any;
    myLoading: boolean = true;
    phone_reader_data: any = [];

    //pagination
    count_item_for_page: number = 15;
    total_page: number = 0;
    pages_index_arr: any = [];
    page: number = 0;
    phone_reader_data_for_page: any = [];

    constructor(public helper: Helper, public vcr: ViewContainerRef) {
        helper.toastr.setRootViewContainerRef(vcr);
        this.title = this.helper.title;
        this.button = this.helper.button;
    }

    ngOnInit() {
        this.helper.http.post('/api/online_menu/admin/get_phone_reader_data', {}).pipe(
            map((res_data: Response) => res_data.json()))
            .subscribe(res_data => {

                if (!res_data.success) {
                    this.phone_reader_data = [];
                }

                this.phone_reader_data = res_data.phones;
                this.myLoading = false;

                this.total_page = Math.ceil(this.phone_reader_data.length / this.count_item_for_page);

                let i = 1;
                while (i <= this.total_page) {
                    this.pages_index_arr.push(i);
                    i++;
                }

                this.filter();
        });
    }

    filter(pageIndex = 1) {
        this.page = pageIndex;

        const itemIndexMin = this.page !== 1
            ? (this.page - 1) * this.count_item_for_page
            : 0;
        const itemIndexMax = this.page * this.count_item_for_page;

        this.phone_reader_data_for_page = this.phone_reader_data.slice(itemIndexMin, itemIndexMax);
    }
}