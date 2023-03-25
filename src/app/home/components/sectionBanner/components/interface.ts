export interface IItemSlider {
	img: any;
	imgMobile: any;
	alt: string;
}

export interface IItemSliderTypology extends IItemSlider {
	id: number;
	sketch: string;
	name: string;
	dorms: number;
	id_name: string;
	studio?: boolean;
	paragraph: string;
	area: number;
}

export interface IListSlider {
	list: IItemSlider[];
}
