'use client';

import React, { useState } from 'react';

enum E_PreciousStones {
	diamond = 'Diamond',
	ruby = 'Ruby',
	sapphire = 'Sapphire',
	emerald = 'Emerald',
	amethyst = 'Amethyst',
	opal = 'Opal',
	topaz = 'Topaz',
	aquamarine = 'Aquamarine',
	garnet = 'Garnet',
	peridot = 'Peridot',
	turquoise = 'Turquoise',
	tanzanite = 'Tanzanite',
	citrine = 'Citrine',
	alexandrite = 'Alexandrite',
	spinel = 'Spinel',
	tourmaline = 'Tourmaline',
}

type T_PreciousStones = keyof typeof E_PreciousStones;

export default function Select() {
	const [selectedStone, setSelectedStone] = useState<T_PreciousStones | undefined>(undefined);

	return (
		<div className="flex flex-col gap-6">
			<label htmlFor="stone" className="label">
				Select a precious stone:
			</label>
			<select
				id="stone"
				className="select select-bordered"
				value={selectedStone}
				onChange={e => setSelectedStone(e.target.value as T_PreciousStones)}
			>
				<option value="">Select a stone</option>
				{Object.values(E_PreciousStones).map(stone => (
					<option key={stone} value={stone}>
						{stone}
					</option>
				))}
			</select>
			{selectedStone && (
				<div className="alert alert-info">
					You have selected <strong>{selectedStone}</strong>.
				</div>
			)}
		</div>
	);
}
