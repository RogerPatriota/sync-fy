import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const url = request.url
    return NextResponse.json('Hello home url: ' + url)
}

// https://open.spotify.com/playlist/7eJYIP83pf7FzSXeascmmx?si=938713dd24b74404