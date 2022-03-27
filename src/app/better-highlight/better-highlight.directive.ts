import { Directive, OnInit, Renderer2,ElementRef,HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent' 
  @Input('appBetterHighlight') highlightColor: string = 'blue' 
  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(
      //   this.elRef.nativeElement,'background-color','blue',false,false)
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,'background-color','blue')
    // comment because we are using HostBinding
    this.backgroundColor = this.highlightColor
  } // mouse over 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,'background-color','transparent')
     // comment because we are using HostBinding
     this.backgroundColor = this.defaultColor
  }


}
