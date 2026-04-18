import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Shri Shah Home Decor – Ramnagar, Nainital'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const SERVICES = ['PVC Panels', 'Wallpaper', '3D Wallpaper', 'False Ceiling', 'Gypsum Tiles', 'Grass Matting']

export default function Image() {
  const logoData = readFileSync(path.join(process.cwd(), 'public/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          backgroundColor: '#0d3d2e',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 420, height: 420, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -100, right: 120, width: 300, height: 300, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 200, left: -60, width: 200, height: 200, borderRadius: '50%', backgroundColor: 'rgba(201,162,39,0.06)', display: 'flex' }} />

        {/* Gold top border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#c9a227', display: 'flex' }} />

        {/* Main content row */}
        <div style={{ display: 'flex', flex: 1, padding: '58px 70px 50px 70px', gap: 60 }}>

          {/* Left: Logo card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 20,
              padding: '32px 36px',
              width: 370,
              flexShrink: 0,
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
          >
            <img src={logoSrc} width={310} height={98} style={{ objectFit: 'contain' }} />
            <div style={{ marginTop: 18, width: '100%', height: 1, backgroundColor: '#e8d5a3' }} />
            <div style={{ marginTop: 14, color: '#1d6b55', fontSize: 12, letterSpacing: 2.5, fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>
              Ramnagar · Nainital · Uttarakhand
            </div>
          </div>

          {/* Right: Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>

            {/* Tagline */}
            <div style={{ color: '#c9a227', fontSize: 14, letterSpacing: 3.5, fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: 14 }}>
              Premium Wall &amp; Ceiling Solutions
            </div>

            {/* Headline */}
            <div style={{ color: '#ffffff', fontSize: 50, fontWeight: 700, lineHeight: 1.15, marginBottom: 10, fontFamily: 'Georgia, serif' }}>
              Transform Your
            </div>
            <div style={{ color: '#ffffff', fontSize: 50, fontWeight: 700, lineHeight: 1.15, marginBottom: 30, fontFamily: 'Georgia, serif' }}>
              Home Today
            </div>

            {/* Service pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
              {SERVICES.map((service) => (
                <div
                  key={service}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.88)',
                    padding: '6px 15px',
                    borderRadius: 30,
                    fontSize: 14,
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  {service}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, fontFamily: 'Arial, sans-serif' }}>
                Near Sai Mandir, Ramnagar – 244715
              </div>
              <div style={{ color: '#c9a227', fontSize: 17, fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>
                +91 9548506887 · shreeshahhomedecor.com
              </div>
            </div>
          </div>
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, backgroundColor: '#c9a227', opacity: 0.5, display: 'flex' }} />
      </div>
    ),
    { ...size },
  )
}
