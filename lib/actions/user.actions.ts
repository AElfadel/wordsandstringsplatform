"use server"

import { UpdateUserParams, CreateUserParams } from "@/Types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.models";
import Event from "../database/models/event.model";
import Order from "../database/models/order.model";

import { revalidatePath } from "next/cache";


//Create user
export async function createUser(user: CreateUserParams) {

    try {
        await connectToDatabase();
        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser))

    } catch (error) {
        handleError(error)
    }
}

//UPDATE USER
export async function updateUser( clerkId: string, user: UpdateUserParams) {
    try {
        await connectToDatabase();
        const updatedUser = await User.findOneAndUpdate( {clerkId}, user, {new: true})

        if (!updatedUser) throw new Error ('User update failed')
        
        return JSON.parse(JSON.stringify(updateUser))

    } catch (error) {
        handleError(error)
    }
}


//DELETE USER

export async function deleteUser (clerkId: string) {
    try {
        await connectToDatabase();

        //Find the user to delete
        const userToDelete = await User.findOne( {clerkId})

        if (!userToDelete) throw new Error ("User not found")
         
        //Unlink relationships
        await Promise.all([
            //Update the events collection to remove references to the user
            Event.updateMany(
                {
                _id: { $in: userToDelete.events} },
                {$pull: {organizer: userToDelete._id}
            }),
       

        //Update the 'orders' collection to remove reference to the user

        Order.updateMany(
            {_id: {$in: userToDelete.Orders}},
            {$unset: { buyger: 1}}),
        ])

        //Delete User
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)

        revalidatePath('/')
        return deletedUser ? JSON.parse(JSON.stringify(deleteUser)) : null

    } catch(error) {
        handleError(error)
    }
}