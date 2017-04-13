import {AfterViewInit, Component, ViewChild} from "@angular/core";

@Component({
  selector: 'elastic-textarea',
  inputs: ['placeholder', 'lineHeight', 'maxExpand'],
  templateUrl: 'elasticTextarea.html'
})
export class ElasticTextarea implements AfterViewInit {
  @ViewChild('ionTxtArea') ionTxtArea: any;
  public txtArea: any;
  public content: string;
  public lineHeight: number;
  public placeholder: string;
  public maxHeight: number;
  public maxExpand: number;

  constructor() {
    this.content = "";
    this.lineHeight = 20;
    this.maxExpand = 5;
    this.maxHeight = this.lineHeight * this.maxExpand;
  }

  public ngAfterViewInit() {
    this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
    this.txtArea.style.height = this.lineHeight + "px";
    this.maxHeight = this.lineHeight * this.maxExpand;
    this.txtArea.style.resize = 'none';
  }

  public onChange() {
    this.txtArea.style.height = this.lineHeight + "px";
    if (this.txtArea.scrollHeight < this.maxHeight) {
      this.txtArea.style.height = this.txtArea.scrollHeight + "px";
    } else {
      this.txtArea.style.height = this.maxHeight + "px";
    }
  }

  public clearInput() {
    this.content = "";
    this.txtArea.style.height = this.lineHeight + "px";
  }

  public setFocus() {
    this.ionTxtArea.setFocus()
  }
}
