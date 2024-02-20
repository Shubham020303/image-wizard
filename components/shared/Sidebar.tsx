import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className='flex size-full flex-col gap-4'>
				<Link href="/" className='sidebar-logo'>
					<p className='text-white text-4xl font-protest-strike'>ImageWizard</p>
				</Link>
			</div>
		</aside>
	)
}

export default Sidebar