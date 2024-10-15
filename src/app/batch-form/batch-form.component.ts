import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import   
 { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-batch-form',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule], // Import modules here
  templateUrl: './batch-form.component.html',
  styleUrls: ['./batch-form.component.css']
})
export class BatchFormComponent {
  batch = {
    bagNo: '',
    item: '',
    netQty: '',
    grossQty: '',
    producedOn: '',
    sealNo: '',
    grade: '',
    lotNo: ''
  };

  qrData: string = '';

  generateQrCode() {
    // Create a JSON object from the batch data
    this.qrData = JSON.stringify({
        bagNo: this.batch.bagNo,
        item: this.batch.item,
        netQty: this.batch.netQty,
        grossQty: this.batch.grossQty,
        producedOn: this.batch.producedOn,
        sealNo: this.batch.sealNo,
        grade: this.batch.grade,
        lotNo: this.batch.lotNo
    });
}

}
