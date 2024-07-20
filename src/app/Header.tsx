import React from 'react';

import Logo from '@/components/Logo';
import { Link } from 'nextjs13-progress';
import GitHubButton from '@/components/GitHubButton';

export default function Header() {
	return (
		<div className="bg-base-100 py-2 grid grid-cols-12">
			<div className="col-span-4">
				<Link href="/">
					<Logo width={180} />
				</Link>
			</div>
			<div className="col-span-4 hidden md:flex">
				<h1 className="text-2xl font-bold text-center m-auto">Type-safe ENUM Select Example</h1>
			</div>
			<div className="col-span-4 flex items-center justify-end">
				<GitHubButton />
			</div>
		</div>
	);
}
