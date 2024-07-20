'use client';

import React, { useState } from 'react';

import Select from '@/components/Select';
import GistView from '@/components/GistView';

import { FaCode } from 'react-icons/fa';

export default function MainPage() {
	const [showCode, setShowCode] = useState(false);
	return (
		<>
			<div className="w-full max-w-sm m-auto">
				<Select />
				<button className="btn btn-primary mt-4" onClick={() => setShowCode(true)}>
					{' '}
					<FaCode /> Show Code
				</button>
			</div>
			{showCode ? <GistView id="aeab4a2d33164b93dc6be45a1fc758eb" setShow={setShowCode} /> : null}
		</>
	);
}
