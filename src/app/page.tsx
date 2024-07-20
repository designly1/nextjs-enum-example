'use client';

import React, { useState } from 'react';

import Select from '@/components/Select';
import GistView from '@/components/GistView';

import { FaCode } from 'react-icons/fa';

export default function MainPage() {
	const [showCode, setShowCode] = useState(false);
	return (
		<>
			<div className="w-full max-w-5xl m-auto flex flex-col gap-10 px-4">
				<div className="w-full max-w-sm m-auto">
					<Select />
					<button className="btn btn-primary mt-4" onClick={() => setShowCode(true)}>
						{' '}
						<FaCode /> Show Code
					</button>
				</div>
				<div className="flex flex-col items-center justify-center gap-6">
					<h1 className="text-2xl font-bold text-center m-auto">Plus Here&apos;s a Song!</h1>
					<iframe
						style={{ borderRadius: '12px' }}
						src="https://open.spotify.com/embed/album/6YcW8bRoFaewQyE54OPkQU?utm_source=generator"
						width="100%"
						height="352"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
			</div>
			{showCode ? <GistView id="aeab4a2d33164b93dc6be45a1fc758eb" setShow={setShowCode} /> : null}
		</>
	);
}
