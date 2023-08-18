import { Component } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent {
  data = cardsData;
}

const cardsData = [{
  header: "Header",
  alt: "Shiba Inu",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan
  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  bred for hunting.`,
},{
  header: "Header",
  alt: "Shiba Inu",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan
  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  bred for hunting.`,
},{
  header: "Header",
  alt: "Shiba Inu",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan
  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  bred for hunting.`,
},
];
