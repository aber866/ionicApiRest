import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

	users : any[];

  	constructor(public navCtrl: NavController, public http: HttpProvider) {

  	}

  	loadUsers(){
    	this.http.loadUsers().subscribe((res) => {
          	this.users = res.results;
          	console.log(this.users)
        }, (err) =>{
          	console.log(err);
        });
  	}

}
