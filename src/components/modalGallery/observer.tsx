import { BehaviorSubject } from 'rxjs';

export interface IitemGalleryObserver {
	image: string;
	group: string;
	title: string;
	key: string;
}

const observeGallery = new BehaviorSubject<IitemGalleryObserver>({
	image: '',
	group: '',
	title: '',
	key: '',
});

export default observeGallery;
