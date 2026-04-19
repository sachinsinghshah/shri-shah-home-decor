import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'
import sharp from 'sharp'

export const runtime = 'nodejs'
export const alt = 'Shri Shah Home Decor – Ramnagar, Nainital'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(path.join(process.cwd(), 'public/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  const bgData = await sharp(path.join(process.cwd(), 'public/images/gallery/pvc-1.jpg'))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 80 })
    .toBuffer()
  const bgSrc = `data:image/jpeg;base64,${bgData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <img
          src={bgSrc}
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Left dark overlay for text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 620, height: '100%', backgroundColor: 'rgba(10,30,20,0.82)', display: 'flex' }} />
        {/* Feathered edge */}
        <div style={{ position: 'absolute', top: 0, left: 500, width: 200, height: '100%', backgroundColor: 'rgba(10,30,20,0.40)', display: 'flex' }} />

        {/* Bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: 'rgba(0,0,0,0.60)', display: 'flex' }} />

        {/* Gold top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: '#c9a227', display: 'flex' }} />

        {/* Content layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '44px 56px 0 56px',
          }}
        >
          {/* Logo card */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'rgba(255,255,255,0.96)',
              borderRadius: 14,
              padding: '14px 26px',
              alignSelf: 'flex-start',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <img src={logoSrc} width={270} height={86} style={{ objectFit: 'contain' }} />
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ color: '#c9a227', fontSize: 15, letterSpacing: 3.5, textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>
              Premium Wall &amp; Ceiling Solutions
            </div>
            <div style={{ color: '#ffffff', fontSize: 58, fontWeight: 700, lineHeight: 1.15, fontFamily: 'Georgia, serif' }}>
              Transform Your
            </div>
            <div style={{ color: '#ffffff', fontSize: 58, fontWeight: 700, lineHeight: 1.15, fontFamily: 'Georgia, serif' }}>
              Home Today
            </div>
          </div>

          {/* Bottom info bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 80,
              marginLeft: -56,
              marginRight: -56,
              paddingLeft: 56,
              paddingRight: 56,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontFamily: 'Arial, sans-serif', letterSpacing: 0.5 }}>
                PVC Panels · Wallpaper · False Ceiling · Gypsum Tiles · Wall Stickers
              </div>
              <div style={{ color: '#ffffff', fontSize: 16, fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                Near Sai Mandir, Ramnagar · Nainital · Uttarakhand
              </div>
            </div>
            <div style={{ color: '#c9a227', fontSize: 20, fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>
              +91 9548506887
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
