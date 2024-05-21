import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'online_menu_blank',
    templateUrl: 'online_menu_blank.template.html'
})
export class online_menu_blankComponent {

    ngAfterViewInit() {
        jQuery('body').addClass('gray-bg');
    }

    ngOnDestroy() {
        jQuery('body').removeClass('gray-bg');
    }
}
