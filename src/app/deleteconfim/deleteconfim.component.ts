import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfim',
  templateUrl: './deleteconfim.component.html',
  styleUrls: ['./deleteconfim.component.css']
})
export class DeleteconfimComponent {
  @Input() item:String|undefined

  //eventcreation

  @Output() onCancel=new EventEmitter()
  @Output() onDelete=new EventEmitter()
  cancel()
  {
    this.onCancel.emit()
  }
  delete(){
    this.onDelete.emit(this.item)
  }
}
