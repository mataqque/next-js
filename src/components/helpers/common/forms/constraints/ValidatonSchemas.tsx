import * as Yup from 'yup';

export const BaseInterestedConstraints = {
	fname: Yup.string().required(),
	lname: Yup.string().required(),
	email: Yup.string().email().required(),
	phone: Yup.number()
		.integer()
		.test('len', (val: any) => val.toString().length >= 7 && val.toString().length <= 15)
		.required(),
};

export const formSchema = (values: any) =>
	Yup.object().shape({
		fname: Yup.string().required(),
		lname: Yup.string().required(),
		phone: Yup.number()
			.integer()
			.test('len', (val: any) => val.toString().length >= 9 && val.toString().length <= 9)
			.required(),
		email: Yup.string().email().required(),
		salary: Yup.string().required(),
		motive: Yup.string().required(),
		terms: Yup.bool().oneOf([true]).required(),
	});

export const ComplaintsBookValidatonSchema = (values: any) =>
	Yup.object().shape({
		...BaseInterestedConstraints,
		mlname: Yup.string().required(),
		idType: Yup.string().required(),
		idNumber: Yup.number().required(),
		region: Yup.string().required(),
		province: Yup.string().required(),
		district: Yup.string().required(),
		address: Yup.string().required(),
		typeOfGood: Yup.string().required(),
		orderNumber: Yup.number().required(),
		amount: Yup.number().required(),
		goodDescription: Yup.string().required(),
		complaintType: Yup.string().required(),
		complaintDetail: Yup.string().required(),
		consumerPetition: Yup.string().required(),
		sellerAction: Yup.string().required(),
		terms: Yup.bool().oneOf([true]).required(),
	});
