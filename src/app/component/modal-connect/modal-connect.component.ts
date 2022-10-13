import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-modal-connect',
  templateUrl: './modal-connect.component.html',
  styleUrls: ['./modal-connect.component.scss'],
})
export class ModalConnectComponent implements OnInit {
  closeResult = '';

  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.openModal();
  }
  ngAfterViewInit() {
    this.openModal();
  }
  openModal(){
    this.modalService.open(this.content, { centered: true,size: 'sm',backdropClass: 'blur-backdrop', windowClass: 'connection-modal' });
  }
  // openModal(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

}
