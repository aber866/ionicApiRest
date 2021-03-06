import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

	data : any;
  	path : string = 'https://randomuser.me/api/?results=25';

  	constructor(public http: Http) {
    	console.log('Hello HttpProvider Provider');
  	}

  	loadUsers(){
    	return this.http
    	.get(this.path)
    	.map((res) => res.json(),
        	(err) => {
          		console.log(err);
        	}
      	)
      	//.toPromise();
    }
}
