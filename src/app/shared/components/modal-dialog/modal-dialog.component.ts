import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
    
    @Input() title: string = 'Confirm';
    @Input() closeBtnTitle: string = 'Cancel';
    @Input() submitBtnTitle: string = 'Submit';
    @Input() modalBodyContent: string = '';
  
    @Output() submitBtnAction: EventEmitter<void> = new EventEmitter();
    @Output() cancelBtnAction: EventEmitter<void> = new EventEmitter();
  
    constructor(
      public dialogRef: MatDialogRef<ModalDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      if (data) {
        this.title = data.title || this.title;
        this.closeBtnTitle = data.closeBtnTitle || this.closeBtnTitle;
        this.submitBtnTitle = data.submitBtnTitle || this.submitBtnTitle;
        this.modalBodyContent = data.modalBodyContent || this.modalBodyContent;
      }
    }
  
    onSubmitClick(): void {
      this.submitBtnAction.emit();
      this.dialogRef.close();
    }
  
    onCancelClick(): void {
      this.cancelBtnAction.emit();
      this.dialogRef.close();
    }
}
