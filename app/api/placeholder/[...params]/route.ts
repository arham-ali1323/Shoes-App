import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params;
  
  // Generate a simple SVG placeholder as a data URL
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af">
        ${width} x ${height}
      </text>
    </svg>
  `;

  const svgBase64 = Buffer.from(svg.trim()).toString('base64');
  const dataUrl = `data:image/svg+xml;base64,${svgBase64}`;

  // Redirect to the data URL
  return NextResponse.redirect(dataUrl);
}
