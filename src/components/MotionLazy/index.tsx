'use client';

import { LazyMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const loadFeaturesAsync = async() =>
	import('./features').then(res => res.default);

const MotionLazy: React.FC<Props> = ({ children }) => {
	return (
		<LazyMotion
			strict
			features={ loadFeaturesAsync }>
			{ children }
		</LazyMotion>
	);
};

export default MotionLazy;
