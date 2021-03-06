import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {FormsModule} from '@angular/forms';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [CommonModule, TranslateModule, LoginRoutingModule, FormsModule, NgbAlertModule, NgbCarouselModule ],
    declarations: [LoginComponent]
})
export class LoginModule {}
