import { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

const useGlobalResponsive = () => {
	const [isOpen, setOpen] = useState(false);
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

	useMemo(() => {
		if (isDesktop) {
			setOpen(true);
		}
	}, [isDesktop]);

	return [isOpen, setOpen];
};

export default useGlobalResponsive;
