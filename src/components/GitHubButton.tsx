import React from 'react';
import { Link } from 'nextjs13-progress';
import Image from 'next/image';

import githubIcon from '@/assets/svg/github.svg';

export default function GitHubButton() {
	return (
		<Link className="angled-div" href="https://github.com/designly1/nextjs-enum-example" target="_blank">
			<div>
				<Image src={githubIcon} alt="Github Icon" width={60} height={60} />
			</div>
		</Link>
	);
}
