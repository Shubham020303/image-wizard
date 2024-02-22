import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='flex size-full flex-col gap-4'>
				<Link href="/" className='sidebar-logo !gap-1'>
					<svg
						fill="currentColor"
						viewBox="0 0 256 256"
						className='text-white w-8 h-8'
					>
						<path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
					</svg>
					<p className='text-white text-4xl font-protest-strike'>ImageWizard</p>
				</Link>
			</div>
		</aside>
	)
}

export default Sidebar