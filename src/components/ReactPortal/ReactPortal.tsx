import React, {FC, JSX, useState, useLayoutEffect, useEffect} from 'react';
import { createPortal } from 'react-dom';

type ReactPortalPropTypes = {
	children: JSX.Element | JSX.Element[];
	wrapperId: string;
}

const ReactPortal: FC<ReactPortalPropTypes> = ({ children, wrapperId }) => {
	const [isDOMReady, setIsDOMReady] = useState<boolean>(false);
	const [wrapperElement, setWrapperElement] = useState<Element | null>(null);

	const createWrapperAndAppendToBody = (wrapperId: string) => {
		const wrapperElement = document.createElement('div');
		wrapperElement.setAttribute("id", wrapperId);
		document.body.appendChild(wrapperElement);
		return wrapperElement;
	}

	useEffect(() => {
		setIsDOMReady(true);
		document.body.classList.add('modal-open');

		return () => {
			document.body.classList.remove('modal-open');
		}
	}, []);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let isAppendToBody = false;

		if (!element) {
			isAppendToBody = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}

		setWrapperElement(element);

		return () => {
			if (isAppendToBody && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		}
	}, [wrapperId]);

	if (!isDOMReady) return null;

	return createPortal(children, wrapperElement);
}
export default ReactPortal;