import { Component } from '@angular/core';

@Component({
  selector: 'app-projact',
  imports: [],
  templateUrl: './projact.component.html',
  styleUrl: './projact.component.css'
})
export class ProjactComponent {
  projects = [
    { name: 'Capture', image: 'Capture.JPG', link: 'https://code-dazzle.vercel.app/' },
    { name: 'Code Dazel', image: 'code dazel.JPG', link: 'https://level5-rho.vercel.app/' },
    { name: 'Mafic', image: 'mafic.JPG', link: 'https://mefic-tau.vercel.app/' },
    { name: 'Travel CMS', image: 'travel.JPG', link: 'https://travel-cms-blue.vercel.app/' }
  ];
}
