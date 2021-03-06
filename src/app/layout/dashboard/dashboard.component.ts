import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DbService} from '../../db.service';
import { DataService} from '../../data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    total_file : any;
    agrupations:any;
    permissions ={
        SCE:false,
        PEAJ:false,
        NOTO:false,
        CON: false,
    };

    constructor( private DB : DbService, private DATA : DataService) {


        this.sliders.push(
            {
                imagePath: 'assets/images/logo ministerio-new.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                 imagePath: 'assets/images/logo SCE.jpg',
                 label: 'Second slide label',
                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
                 {
                         imagePath: 'assets/images/foto-ministerio.png',
                         label: 'Third slide label',
                         text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                     }
                    );

                    this.alerts.push(
                        {
                            id: 1,
                            type: 'success',
                            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                            consectetur velit culpa molestias dignissimos
                            voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
                        },
                        {
                            id: 2,
                            type: 'warning',
                            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                            consectetur velit culpa molestias dignissimos
                            voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
                        }
                        );
                    }

                    ngOnInit() {

                        if (localStorage.getItem('PEAJ') === "1") {this.permissions.PEAJ = true;}else{this.permissions.PEAJ = false;}
                        if (localStorage.getItem('SCE') === "1") {this.permissions.SCE = true;}else{this.permissions.SCE = false;}
                        if (localStorage.getItem('NOTO') === "1") {this.permissions.NOTO = true;}else{this.permissions.NOTO = false;}
                        if (localStorage.getItem('CON') === "1") {this.permissions.CON = true;}else{this.permissions.CON = false;}
                        console.log(this.permissions);


                    this.DB.Agrupations_list().subscribe({
                            next: data =>{
                                this.DATA.Agrupations = data;
                                this.agrupations = this.DATA.Agrupations;
                            },

                            error: err =>{
                                console.log(err);

                            }
                        });


                        this.DB.file_total().subscribe({
                            next: data =>{
                                this.total_file = data;
                                console.log(data);

                            },
                            error: err =>{
                                console.log(err);

                            }
                        })
                    }

                    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
