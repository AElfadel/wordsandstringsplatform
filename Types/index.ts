// ====== USER PARAMS

import { ICategory } from "@/lib/database/models/category.model"
import { IEvent } from "@/lib/database/models/event.model"

export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
  }
  
  export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
  }

  // Category params
  export type CreateCategoryParams = {
    categoryName: string;
  }


  //Event params
  export type CreateEventParams = {
    userId: string,
    event: {
      title: string;
      description: string;
      location: string;
      imageUrl: string;
      startDateTime: Date;
      endDateTime: Date;
      categoryId: string;
      price: string;
      isFree: boolean;
      url: string;
    },
    path: string,
  }

  //Search params

  export type SearchParamProps = {
    params: {
      id: string
    }
  }


  // Get all events params 

  export type getAllEventsParams = {
    query: string;
    category: string 
    limit : number;
    page: number; 
  }

  //Delete event params 

  export type DeleteEventParams = {
    eventId: string;
    path: string;

  }


  //Update event params

  export type UpdateEventParams = {
    userId: string;
    eventId: string;
    event: {
      _id: string
      title: string
      imageUrl: string
      description: string
      location: string
      startDateTime: Date
      endDateTime: Date
      categoryId: string
      price: string
      isFree: boolean
      url: string
    };
  path: string;}
