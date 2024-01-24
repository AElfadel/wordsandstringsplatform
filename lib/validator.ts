import * as z from "zod";

export const eventFormSchema = z.object({
    title: z.string().min(3,  {
      message: "Event title must be at least 3 characters",
    }),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400,"Description must be less than 400 characters ")
  ,
  location: z.string().min(3, "Location must be at least 3 characters").max(400,"Location must be less than 400 characters"),
  imageUrl: z.string().min(3,'ImageURL must be at least 3 characters').max(400,"ImageURL must be less than 400 characters"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoreyId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})


export const perfomerFormSchema = z.object({
    name: z.string().min(3,  {
      message: "Event title must be at least 3 characters",
    }),
    performanceBackground: z.string().min(3, 'Description must be at least 3 characters').max(400,"Description must be less than 400 characters ")
  ,
  funFact: z.string().min(3, "Fun fact must be at least 3 characters").max(400,"Fun fact must be less than 400 characters"),
  email: z.string().min(3,'Email must be at least 3 characters').max(400,"ImageURL must be less than 400 characters"),
  phoneNumber: z.number().min(8,'Phone number must be at least 8 numbers.')

})