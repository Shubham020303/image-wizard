"use client";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from '@/constants';
import { Button } from '../ui/button';

const MobileNav = () => {

	const pathname = usePathname()

	return (
		<header className='header'>
			<Link href='/' className='flex items-center gap-2 md:py-2'>
				<svg
					fill="currentColor"
					viewBox="0 0 256 256"
					className='text-white w-7 h-7'
				>
					<path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
				</svg>
				<p className='text-white text-2xl font-protest-strike'>ImageWizard</p>
			</Link>
			<nav className='flex items-center gap-2'>
				<SignedIn>
					<UserButton afterSignOutUrl='/' />
					<Sheet>
						<SheetTrigger>
							<Image
								src='/assets/icons/menu.svg'
								alt='menu'
								width={25}
								height={25}
								className='cursor-pointer'
							/>
						</SheetTrigger>
						<SheetContent className='sheet-content sm:w-full !bg-the-black text-white w-full border-0'>
							<>
								<Link href='/' className='flex items-center gap-2 md:py-2'>
									<svg
										fill="currentColor"
										viewBox="0 0 256 256"
										className='text-white w-7 h-7'
									>
										<path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
									</svg>
									<p className='text-white text-2xl font-protest-strike'>ImageWizard</p>
								</Link>

								<ul className='header-nav_elements'>
									{navLinks.map((item, index) => {
										const isActive = item.route === pathname;
										return (
											// <li key={index} className={(isActive ? 'gradient-text' : 'text-gray-500') + ' p-18 flex whitespace-nowrap text-dark-700'}>
											<li key={index} className={'sidebar-nav_element group ' + (isActive ? 'bg-black-900 shadow-[#FFFFFF_0px_0px_0px_1px] font-bold text-white' : 'text-gray-500')}>
												<Link href={item.route} className='sidebar-link cursor-pointer'>
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
							</>
						</SheetContent>
					</Sheet>

				</SignedIn>
				<SignedOut>
					<Button asChild className="button bg-purple-gradient bg-cover">
						<Link href="/sign-in">Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	)
}

export default MobileNav