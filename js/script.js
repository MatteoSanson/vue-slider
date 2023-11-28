'use strict';

const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const { createApp } = Vue;

  createApp({
    data() {
      return {
        slides: slides,
        currentIndex: 0,
        intervalStatus: null,
      };
    },
    methods: {
        prev(){
            this.currentIndex--;
            if (this.currentIndex < 0){
                this.currentIndex = this.slides.length - 1;
            }
        },
        next(){
            this.currentIndex++;
            if (this.currentIndex > this.slides.length - 1){
                this.currentIndex = 0;
            }
        },
        changeImage(indice){
            this.currentIndex = indice;
        },
        startInterval() {
            this.intervalStatus = setInterval(() => {
              this.next();
              console.log('start', this.intervalStatus);
            }, 3_000);
            // console.log('start', this.intervalStatus);
        },
        stopInterval() {
            clearInterval(this.intervalStatus);
            console.log('stop', this.intervalStatus);
        },
    },
    mounted() {
        this.startInterval();
    }
  }).mount('#app');