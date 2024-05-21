import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {Helper} from "../../../views/helper";
declare var jQuery: any;


@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    providers: [Helper]
})

export class NavigationComponent implements OnInit {

    // title: any;
    // button: any;
    // heading_title: any;
    // admin_id: String;
    // admin_token: String;
    // app_name:String;
    // menu_title: any;
    // sub_menu_title: any;
    // showMenu: boolean = false;
    //
    // showSubMenu:boolean = false;
    //
    // admin_type : number = null;
    // urls_array: any[] = [];
    // containsAll: any;

    //edit_button: Boolean;

    constructor(private router: Router, private helper: Helper) {}


    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }
    ngOnInit() {

    }

    toggle() {

        // if (jQuery(window).width() <= 768) {
        //     jQuery("body").toggleClass("mini-navbar");
        //     jQuery(".full_menu").toggleClass("full_menu1");
        // }

    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
