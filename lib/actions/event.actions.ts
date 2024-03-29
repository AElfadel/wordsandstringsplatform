"use server"

import { CreateEventParams, DeleteEventParams, UpdateEventParams, getAllEventsParams } from "@/Types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.models";
import Event from "../database/models/event.model";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import Category from "../database/models/category.model";
import { string } from "zod";


//Create event
export async function createEvent({event, userId, path}: CreateEventParams) {
try{
    await connectToDatabase()
    
    const organizer = await User.findById(userId)

    if (!organizer) throw new Error('Organizer not found')
    
  

    const newEvent = await Event.create({...event, category: event.categoryId, organizer: userId})
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))


} catch(error) {
    handleError(error)
}
}

//Populat Event data

export async function populateEvent(query: any) {
    return query
    .populate({path: 'organizer', model: User, select: '_id firstName lastName'})
    .populate({path: 'category', model: Category, select: '_id name'})
    }

    


//Get Single Event by ID

export async function getEventByID(eventId: string){
    try{
        await connectToDatabase()

        const event = await  populateEvent(Event.findById(eventId));

        if (!event) {
            throw new Error("Event not found")
        }

        return JSON.parse(JSON.stringify(event))
    } catch(error) {
        console.log(error)
    }
}


//Get all events

export async function getAllEvents({query, limit = 6 , page, category} : getAllEventsParams) {
    try{
        await connectToDatabase()

        const conditions = {}
        
        const eventsQuery = Event.find(conditions)
        .sort({createdAt: 'desc'})
        .skip(0)
        .limit(limit)

        const events = await populateEvent(eventsQuery)

        const eventsCount = await Event.countDocuments(conditions);

        return {
            data: JSON.parse(JSON.stringify(events)),
            totalPages: Math.ceil(eventsCount / limit)
        }

    } catch(error) {
        console.log(error)
    }
}


//Delete Event 

export async function deleteEvent({eventId, path} : DeleteEventParams) {
try {
await connectToDatabase()

const deletedEvent = await Event.findByIdAndDelete(eventId)

if (deletedEvent) revalidatePath(path);

} catch (error) {
    console.log(error)
}
}


//Update Event 

export async function updateEvent({event, userId, path}: UpdateEventParams) {

try {
    await connectToDatabase()

    const updatedEvent = await Event.findByIdAndUpdate(event._id,  { ...event, category: event.categoryId },
        { new: true })

        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedEvent))

} catch(error) {
    console.log(error)
}}