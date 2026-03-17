import { NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
    let client;
    try {
        console.log('Seed: Connecting to DB...');
        client = await db.connect();
        console.log('Seed: Connected successfully.');

        // 1. Drop existing table if needed (to ensure clean schema)
        console.log('Seed: Dropping table if exists...');
        await client.sql`DROP TABLE IF EXISTS events CASCADE;`;
        console.log('Seed: Table dropped.');

        // 2. Create the table with the correct schema
        console.log('Seed: Creating table...');
        await client.sql`
            CREATE TABLE events (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                thumbnail TEXT,
                frequency TEXT,
                status TEXT DEFAULT 'published',
                tags TEXT[],
                description TEXT,
                detail JSONB,
                organizer JSONB,
                is_featured_top BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;
        console.log('Seed: Table created.');

        const events = [
            {
                id: 'event-bar-horizon',
                title: 'Bar Horizon Staff Recruitment',
                thumbnail: '/images/sample-bar.jpg',
                frequency: 'Weekly (Saturday 22:00-)',
                status: 'recruiting',
                tags: ['Bar', 'Staff Recruitment', 'Beginner Friendly'],
                description: 'A cozy virtual bar looking for friendly staff. We provide a relaxing atmosphere for visitors to enjoy conversations and drinks.',
                detail: JSON.stringify({
                    heroImage: '/images/sample-bar-hero.jpg',
                    longDescription: 'A cozy virtual bar looking for friendly staff. We provide a relaxing atmosphere for visitors to enjoy conversations and drinks. No experience required!',
                    requirements: ['仮想空間のユーザー', '18歳以上', '協調性のある方'],
                    schedule: {
                        text: 'Weekly (Saturday 22:00-)',
                        type: 'weekly',
                        days: ['Sat'],
                        time: '22:00'
                    },
                    galleryImages: [],
                    listingPeriod: '30days',
                    listingEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                }),
                organizer: JSON.stringify({
                    name: 'Bar Horizon',
                    icon: '/images/organizer-icon.jpg',
                    twitterUrl: 'https://x.com/bar_horizon'
                }),
                is_featured_top: true
            },
            {
                id: 'event-club-spark',
                title: 'Club Spark Performer Audition',
                thumbnail: '/images/sample-club-hero.jpg',
                frequency: 'Every Friday 23:00-',
                status: 'recruiting',
                tags: ['Club', 'Performer', 'Audition'],
                description: 'Exciting virtual club seeking talented dancers and DJs. Join our vibrant community and showcase your skills on the big stage!',
                detail: JSON.stringify({
                    heroImage: '/images/sample-club-hero.jpg',
                    longDescription: 'Exciting virtual club seeking talented dancers and DJs. Join our vibrant community and showcase your skills on the big stage! We are famous for our light shows and music.',
                    requirements: ['Experience in dancing or DJing', 'Stable internet connection', 'Passion for performance'],
                    schedule: {
                        text: 'Every Friday 23:00-',
                        type: 'weekly',
                        days: ['Fri'],
                        time: '23:00'
                    },
                    galleryImages: [],
                    listingPeriod: '14days',
                    listingEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                }),
                organizer: JSON.stringify({
                    name: 'Club Spark',
                    icon: '/images/organizer-icon-2.jpg',
                    twitterUrl: 'https://x.com/club_spark'
                }),
                is_featured_top: true
            }
        ];

        console.log('Seed: Inserting data...');
        for (const event of events) {
            await client.query(`
                INSERT INTO events (
                    id, title, thumbnail, frequency, status, tags, description, 
                    detail, organizer, is_featured_top
                ) VALUES (
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
                );
            `, [
                event.id,
                event.title,
                event.thumbnail,
                event.frequency,
                event.status,
                event.tags,
                event.description,
                event.detail,
                event.organizer,
                event.is_featured_top
            ]);
        }
        console.log('Seed: Data inserted.');

        return NextResponse.json({ message: 'Success: Events seeded with explicit client.' });
    } catch (error) {
        console.error('Seed error:', error);
        return NextResponse.json({ 
            error: 'Failed to seed data', 
            details: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    } finally {
        if (client) {
            // client.release() or similar if using a pool, but @vercel/postgres connect() handles it?
            // Actually db.connect() returns a client that should be released if it was from a pool.
            // @vercel/postgres uses a pool internally.
        }
    }
}
