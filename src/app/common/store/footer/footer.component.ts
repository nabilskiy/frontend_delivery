import { Component ,Input } from '@angular/core';

@Component({
    selector: 'my-footer',
    templateUrl: 'footer.template.html'
})
export class FooterComponent { 

	@Input('myLoading') myLoading: Boolean;

}