import observeGallery from './observer';

export interface IitemGallery {
	children: any;
	group: string;
	title?: string;
}

export const IitemGallery = (props: IitemGallery) => {
	const item = {
		group: props.group,
		image: props.children.props.src,
		title: props.title || '',
		key: props.children.key,
	};

	observeGallery.next(item);
	return <>{props.children}</>;
};
