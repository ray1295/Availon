import { Component, OnInit } from '@angular/core';
// import { listener } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-slidertext',
  templateUrl: './slidertext.component.html',
  // styleUrls: ['./slidertext.component.scss'],
})
export class SlidertextComponent implements OnInit {
  
  // Date Binding: {{ sliderAd }} in HTML file 
  // Dynamic content
  sliderAd: string = "free standard shipping!";

  constructor() {}

  ngOnInit() {
    let slides = document.querySelectorAll('#slideshow .slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide,4000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide show';
    }
  }
}
