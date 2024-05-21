import { Component, NgZone,  OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import {Helper} from "../online_menu_helper";
declare var jQuery:any;
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Location} from '@angular/common';
import {UUID} from 'angular2-uuid';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [Helper],
    styleUrls: ['../online_menu.css']
})
export class MenuComponent implements OnInit {
    id: string;
    product_item_list: any;
    filtered_product_item_list: any;
    current_store: any;
    current_item: any = {image_url:[]};

    constructor(private route: ActivatedRoute, public helper: Helper) {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });

        this.get_products();
    }

    ngOnInit() {}

    get_products() {
        this.helper.http.post(this.helper.POST_METHOD.GET_STORE_MENU, { store_id: this.id })
            .map((res: Response) => res.json())
            .subscribe(res => {
                let specification_price;
                this.product_item_list = res.products;
                this.current_store = res.store;

                let product_array = res.products.filter((product_data) => {
                    let item_array = product_data.items.filter((item_data) => {
                        specification_price = 0;
                        item_data.specifications.filter((specification_group) => {
                            specification_group.list.filter((specification) => {
                                if (specification.is_default_selected) {
                                    specification_price = specification_price + specification.price;
                                }
                            });
                        });

                        let total_item_price = item_data.price + specification_price;
                        item_data.total_item_price = total_item_price;
                        return item_data;
                    });
                    product_data.items = item_array;
                    return product_data;
                });

                this.filtered_product_item_list = product_array;
            });
    }

    redirect(id) {
        document.querySelector('#tab' + id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
    }

    open_item_modal(item, item_index , product_index, event, content) {
        // this.note_for_item = '';
        if (event.target.attributes.class != undefined) {
            if (event.target.attributes.class.value !== "carousel-indicators_li" && event.target.attributes.class.value !== "carousel-indicators_li active") {
                // this.qty = 1;
                // this.required_count = 0;
                this.current_item = JSON.parse(JSON.stringify(item));
                // this.current_main_item = item;
                // this.product_unique_id = this.filtered_product_item_list[product_index]._id.unique_id;
                // this.product_name = this.filtered_product_item_list[product_index]._id.name;
                // this.calculate_is_required();
                // this.calculateTotalAmount();
                this.open(content);
            }
        } else {
            // this.qty = 1;
            // this.required_count = 0;
            this.current_item = JSON.parse(JSON.stringify(item));
            // this.current_main_item = item;
            // this.product_unique_id = this.filtered_product_item_list[product_index]._id.unique_id;
            // this.product_name = this.filtered_product_item_list[product_index]._id.name;
            // this.calculate_is_required();
            // this.calculateTotalAmount();
            this.open(content);

        }
    }

    close_item_modal() {
        this.current_item = {image_url: []};
        // this.item_modal.close();
    }

    open(content) {
    //     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass:'product_pop with_img'}).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    }
}
