import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/app/lib/db";

import AdminData from "@/app/lib/model/admin";


export async function GET() {
    try {
        await connectDB();
        const data = await AdminData.find({});
        console.log(JSON.stringify(data))

        return NextResponse.json({ data: data });

    } catch (error) {
        console.log(error);
    }
}