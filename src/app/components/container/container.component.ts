import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  links = [
    {
      name: 'Adobe Colors',
      description: 'Color wheel and library.',
      url: 'https://color.adobe.com/pl/create/color-wheel',
      logo: 'assets/logos/adobecolors.png'
    },
    {
      name: 'UI Gradients',
      description: 'Gradient library.',
      url: 'https://uigradients.com',
      logo: 'assets/logos/uigradients.png'
    },
    {
      name: 'Flexbox cheatsheet',
      description: 'Flexbox functionality in an approachable way',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      logo: 'assets/logos/flexbox.png'
    },
    {
      name: 'Mozzilla Dev Network',
      description: 'Mozzilla documentation',
      url: 'https://developer.mozilla.org/pl/',
      logo: 'assets/logos/mdn.png'
    },
    {
      name: 'Google Fonts',
      description: 'Free fonts from Google',
      url: 'https://fonts.google.com/',
      logo: 'assets/logos/googlefonts.png'
    },
    {
      name: 'Gridlover',
      description: 'Useful tool for typography',
      url: 'https://www.gridlover.net/try',
      logo: 'assets/logos/gridlover.png'
    },
    {
      name: 'Can I Use?',
      description: 'Browser support tables for web technologies',
      url: 'https://caniuse.com/',
      logo: 'assets/logos/caniuse.png'
    },
    {
      name: 'Meyer Reset',
      description: '.css file to reset all styles',
      url: 'https://css-tricks.com/snippets/css/meyer-reset/',
      logo: 'assets/logos/resetcss.png'
    },
    {
      name: 'HTML5 reference',
      description: 'MDN HTML5 documentation',
      url: 'https://developer.mozilla.org/pl/docs/Web/Guide/HTML/HTML5',
      logo: 'assets/logos/html5.png'
    },
    {
      name: 'CSS3 reference',
      description: 'MDN CSS3 documentation',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
      logo: 'assets/logos/css3.png'
    },
    {
      name: 'EduWeb Angular',
      description: 'Angular course',
      url: 'https://eduweb.pl/programowanie-i-www/angular/angular-podstawy',
      logo: 'assets/logos/angular.png'
    },
    {
      name: 'W3 Schools tutorial',
      description: 'Web technologies tutorial',
      url: 'https://www.w3schools.com/css/default.asp',
      logo: 'assets/logos/w3schools.png'
    }
  ]

  ngOnInit(): void {
  }

}
