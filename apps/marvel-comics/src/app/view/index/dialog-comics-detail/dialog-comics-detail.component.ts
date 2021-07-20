import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DomSanitizer} from "@angular/platform-browser";

interface DialogData {
  item: any
}

@Component({
  selector: 'crmall-test-dialog-comics-detail',
  templateUrl: './dialog-comics-detail.component.html',
  styleUrls: ['./dialog-comics-detail.component.scss']
})
export class DialogComicsDetailComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComicsDetailComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  public getImage(){
    for(const img of this.data.item['images']){
      return img.path + '/portrait_incredible.'+img.extension;
    }

    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg';
  }

}
