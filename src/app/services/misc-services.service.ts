import { Injectable } from '@angular/core';
import { Genre } from '../interfaces/genre.interface';
import { Rating } from '../interfaces/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class MiscServicesService {

  Ratings: Rating[] = [
    {
      id:1,
      name:'G',
      description:'All Ages'
    },
    {
      id:2,
      name:'PG',
      description:'Children'
    },
    {
      id:3,
      name:'PG-13',
      description:'Teens 13 or older'
    },
    {
      id:4,
      name:'R',
      description:'17+ (violence & profanity)'
    },
    {
      id:5,
      name:'R+',
      description:'Mild nudity'
    },
    {
      id:6,
      name:'Rx',
      description:'Explicit Content'
    }
  ];

  Genres: Genre[] = [
    {
      id: 1,
      name: 'Action'
    },
    {
      id: 2,
      name: 'Adventure'
    },
    {
      id: 3,
      name: 'Avant Garde'
    },
    {
      id: 4,
      name: 'Award Winning'
    },
    {
      id: 5,
      name: 'BL'
    },
    {
      id: 6,
      name: 'Comedy'
    },
    {
      id: 7,
      name: 'Drama'
    },
    {
      id: 8,
      name: 'Fantasy'
    },
    {
      id: 9,
      name: 'GL'
    },
    {
      id: 10,
      name: 'Gourmet'
    },
    {
      id: 11,
      name: 'Horror'
    },
    {
      id: 12,
      name: 'Mystery'
    },
    {
      id: 13,
      name: 'Romance'
    },
    {
      id: 14,
      name: 'Sci-Fi'
    },
    {
      id: 15,
      name: 'Slice of Life'
    },
    {
      id: 16,
      name: 'Sports'
    },
    {
      id: 17,
      name: 'Supernatural'
    },
    {
      id: 18,
      name: 'Suspense'
    },
    {
      id: 19,
      name: 'Explicit'
    },
  ];

  
  constructor() { }
}
