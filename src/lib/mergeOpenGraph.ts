import type { Metadata } from 'next';

export const SITEURL = 'https://google.com';

export const defaultOpenGraph: Metadata['openGraph'] = {
title: 'Booking Online Airplane.',
	description:
    'Welcome to Booking Online Airplane.',
	images: [
		{
			url: SITEURL + '/meta/PP.jpg',
		},
	],
	siteName: 'Booking Online Airplane.',
	type: 'website',
};

export const mergeOpenGraph = (
	og?: Metadata['openGraph'] & { image?: string }
): Metadata['openGraph'] => {
	return {
		...defaultOpenGraph,
		images: og?.image
			? [
				{
					url: SITEURL + og.image,
				},
			]
			: defaultOpenGraph.images,
		...og,
	};
};
