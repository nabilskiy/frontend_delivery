import { Injectable } from '@angular/core';
 
@Injectable()
export class Data {
 
    public storage: any;

    public constructor() { 
    	this.storage = {
    		"code": null,
            "message": ''  ,
            "class": ''
        }
    }
 
}