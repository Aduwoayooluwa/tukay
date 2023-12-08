import React from 'react'

const Logo = () => {
  return (
      <div className=''>
           <div className="w-full">
                <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
                <svg width="100" height="50" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="10" x2="50" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="50" y1="50" x2="10" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="60" y1="10" x2="100" y2="50" stroke="url(#gradient)" strokeWidth="4"/>
                    <line x1="100" y1="50" x2="60" y2="90" stroke="url(#gradient)" strokeWidth="4"/>
                    <text x="110" y="60" fontFamily="Space Mono" fontSize="50" fill="url(#gradient)">tukay</text>
                </svg>
            </div>
    </div>
  )
}

export default Logo