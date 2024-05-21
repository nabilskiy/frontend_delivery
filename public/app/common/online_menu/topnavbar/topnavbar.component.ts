import {Component} from '@angular/core';
import {smoothlyMenu} from '../../../app.helpers';
declare var jQuery: any;
import {TranslateService} from 'ng2-translate';

import {Helper} from "../../../views/helper";
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html',
    providers: [Helper],
    styleUrls: ['../online_menu.css']
})
export class TopnavbarComponent {


    constructor(public helper: Helper) {};

    toggleNavigation(): void {

        // // if(jQuery(window).width()>768){
        //         jQuery("body").toggleClass("mini-navbar");
        //         jQuery(".full_menu").toggleClass("full_menu1");
        //         // jQuery("nav").toggleClass("navbar");
        //         // jQuery("nav").toggleClass("navbar1");
        //         // jQuery("nav span a").toggleClass("minimalize-styl-2");
        //         // jQuery("nav span a").toggleClass("minimalize-styl-3");
        //
        // // }
        // // else
        // // {
        // //     jQuery("body").toggleClass("body1");
        // //     jQuery("body1").toggleClass("body");
        // // }
        // smoothlyMenu();

    }
    ngOnInit() {}

    // back(){
    //     this.helper.router.navigate([this.helper.router_id.admin.back_url]);
    // }
    //

}
