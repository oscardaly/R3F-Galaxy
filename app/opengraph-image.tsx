import { ImageResponse } from 'next/server'

export const runtime = 'edge'
export const alt = 'R3F Galaxy — Interactive WebGL Solar System'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(900px 600px at 78% -12%, #2b2566, transparent), radial-gradient(800px 600px at 6% 115%, #173a52, transparent), #05060a',
          color: '#e8eaf0',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: '#FFC53D',
              boxShadow: '0 0 70px 24px rgba(255,197,61,0.45)',
            }}
          />
          <div style={{ fontSize: 24, letterSpacing: 6, color: '#8ab4ff' }}>
            INTERACTIVE · WEBGL
          </div>
        </div>
        <div style={{ fontSize: 86, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>
          The Milky Way Galaxy
        </div>
        <div style={{ fontSize: 32, color: '#9aa3b2', marginTop: 20 }}>
          A real-time solar system, built with React Three Fiber.
        </div>
        <div style={{ fontSize: 26, color: '#6b7280', marginTop: 'auto' }}>
          galaxy.oscardaly.tech · Oscar Daly
        </div>
      </div>
    ),
    { ...size },
  )
}
