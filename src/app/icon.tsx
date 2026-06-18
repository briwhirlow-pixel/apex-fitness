import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a1628',
          borderRadius: 6,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 2L2 20h6l1.5-4h3L14 20h6L11 2z"
            fill="#4dd4ac"
          />
          <path
            d="M11 8l-2 5.5h4L11 8z"
            fill="#0a1628"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
