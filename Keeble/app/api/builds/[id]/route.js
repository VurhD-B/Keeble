import { connectToDB } from "@utils/database";
import Build from "@models/build";

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();
        await Build.findByIdAndRemove(params.id);
        return new Response('Successfully deleted the build', {status: 200});
    } catch (error) {
        return new Response('Failed to delete build', {status: 500})
    }
}