import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialMultilevelMenuModule } from './../../../../../projects/ng-material-multilevel-menu/src/public_api';
import { MaterialsModule } from './../../../modules/materials.module';

import { DemoFourRoutingModule } from './demo-four-routing.module';
import { DemoFourComponent } from './demo-four.component';
import { LayoutVariationsModule } from '../layout-variations.module';

@NgModule({
    imports: [CommonModule, DemoFourRoutingModule, NgMaterialMultilevelMenuModule, MaterialsModule, LayoutVariationsModule],
    declarations: [DemoFourComponent],
})
export class DemoFourModule {}
