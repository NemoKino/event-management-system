import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST() {
    // Check if portfolio mode is enabled
    if (process.env.NEXT_PUBLIC_PORTFOLIO_MODE !== 'true') {
        return NextResponse.json({ error: 'Demo mode is not enabled' }, { status: 403 });
    }

    // Sign a token for the demo user
    const token = await signToken({ username: 'portfolio_admin' });
    
    // Get cookies store
    const cookieStore = await cookies();

    // Set the session cookie
    cookieStore.set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
    });

    return NextResponse.json({ message: 'Logged in as demo admin' });
}
