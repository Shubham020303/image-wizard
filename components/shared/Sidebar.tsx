"use client";
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

import { navLinks } from '@/constants'
import { Button } from "../ui/button"

const Sidebar = () => {

	const pathname = usePathname()

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

				<nav className='sidebar-nav'>
					<SignedIn>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(0, 6).map((item, index) => {
								const isActive = item.route === pathname;
								return (
									<li key={index} className={'sidebar-nav_element group ' + (isActive ? 'bg-black-900 shadow-[#FFFFFF_0px_0px_0px_1px] font-bold text-white' : 'text-gray-500')}>
										<Link href={item.route} className='sidebar-link'>
											<Image
												src={item.icon}
												width={20}
												height={20}
												alt={item.label}
												className={`${isActive && 'brightness-200'}`}
											/>
											{item.label}
										</Link>
									</li>
								)
							})}
						</ul>

						<ul className='sidebar-nav_elements'>
							{navLinks.slice(6).map((item, index) => {
								const isActive = item.route === pathname;
								return (
									<li key={index} className={'sidebar-nav_element group ' + (isActive ? 'bg-black-900 shadow-[#FFFFFF_0px_0px_0px_1px] font-bold text-white' : 'text-gray-500')}>
										<Link href={item.route} className='sidebar-link'>
											<Image
												src={item.icon}
												width={20}
												height={20}
												alt={item.label}
												className={`${isActive && 'brightness-200'}`}
											/>
											{item.label}
										</Link>
									</li>
								)
							})}
							<li className="sidebar-nav_element cursor-pointer gap-2">
								<UserButton afterSignOutUrl="/" showName />
							</li>
						</ul>
					</SignedIn>
					<SignedOut>
						<Button asChild className="button bg-purple-gradient bg-cover">
							<Link href="/sign-in">Login</Link>
						</Button>
					</SignedOut>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar