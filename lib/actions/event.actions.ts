"use server"

import { CreateEventParams } from "@/Types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.models";
import Event from "../database/models/event.model";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";




//Create event
export async function createEvent({event, userId, path}: CreateEventParams) {
try{
    await connectToDatabase()
    
    const organizer = await User.findById(userId)

    if (!organizer) throw new Error('Organizer not found')
    
  

    const newEvent = await Event.create({...event, categorey: event.categoreyId, organizer: userId})
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))


} catch(error) {
    handleError(error)
}
}