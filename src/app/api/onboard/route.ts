import {createKindeManagementAPIClient} from "@kinde-oss/kinde-auth-nextjs/server";
import { type NextRequest, type NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const userID = searchParams.get("id") || "";

    try {
        const client = await createKindeManagementAPIClient();
        const userData = await client.usersApi.getUserData({ id: userID });

        return Response.json(userData, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Error fetching user data" }, { status: 500 });
    }

    
}