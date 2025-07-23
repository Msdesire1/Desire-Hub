
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
  const token = await req.headers.get("Authorization");

    console.log("Received token:", payload);

    const newPayload = {
        fullname: payload.fullname,
        emailaddress: payload.emailaddress,
        serviceneeded: payload.serviceneeded,
        message: payload.message,
    }

    console.log(newPayload)

    // console.log("Received payload:", payload);

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/waiting-list/send-message`, newPayload, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        const result = response.data;

        console.log(result)

        if(result.statuCode ==="00" || result.statuscode === "00") {
            return NextResponse.json(result)
        }else{
            return NextResponse.json(result)
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}