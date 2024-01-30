// ====== USER PARAMS

import { ICategory } from "@/lib/database/models/category.model"

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
      categoreyId: string;
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