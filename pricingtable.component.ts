import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pricingtable',
  templateUrl: './pricingtable.component.html',
  styleUrls: ['./pricingtable.component.css']
})
export class PricingtableComponent {
  @Input() price:string = "";
  @Input() plan:string = "";
  @Input() users:string = "";
  @Input() storage:string = "";
  @Input() support:string = "";
  @Input() button:string = "";
  @Input() customClass: string="";
}
