import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private el: ElementRef) {}

  scrollTo(destination: string): void {
    const element = document.getElementById(destination);
    if(element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  pdfUrl: string = '../../assets/CV - Heloisa.pdf';

  downloadPDF() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'CV_Heloisa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
