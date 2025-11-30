import { NextRequest, NextResponse } from 'next/server';
import { shoesData } from '@/data/shoes-data';

export async function GET(request: NextRequest) {
  return NextResponse.json(shoesData);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields: name, price, category" },
        { status: 400 }
      );
    }
    
    // Create a new shoe with a unique ID
    const newShoe = {
      id: (shoesData.length + 1).toString(),
      ...body,
    };
    
    return NextResponse.json(newShoe, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
