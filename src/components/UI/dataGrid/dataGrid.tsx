import SwapVertIcon from '@mui/icons-material/SwapVert';
import { InputChecked } from '../inputs/inputChecked';
import { IconAvatar } from '../GlobalComponents/IconAvatar/IconAvatar';
import { convertToDate } from '../../helpers/helpers';
import { BtnTag } from '../GlobalComponents/buttons/buttonBase';
import { IconMask } from '../inputs/styled/IconDownStyleSelect';
import { ProgressBar } from '../progressBar/progressBar';
import { DataGridStyled } from './dataGridStyled';

interface IPropsDataGrid {
	data: any;
}
export const DataGrid = (props: IPropsDataGrid) => {
	const { data } = props;
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<div className='grid-head grid'>
				<div className='checked py-2 text-left'>
					<InputChecked name=''></InputChecked>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex'>
						Nombre
						<SwapVertIcon className='ml-auto' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex'>
						Uso
						<SwapVertIcon className='ml-auto' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex'>
						Última actualización
						<SwapVertIcon className='ml-auto' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex'>
						Etiquetas
						<SwapVertIcon className='ml-auto' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</div>
			<div className='grid-body scroll'>
				{data.map((user: any, index: number) => {
					return (
						<div className='grid-table-row flex text-gray-700 hover:bg-gray-10 border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<IconAvatar name={user.name} photo={user.image} />
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1  '>{user.name}</h1>
									<p className='text-letter text-sm leading-3	'>{user.lname}</p>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center'>
								<div className='w-full '>
									<ProgressBar progress={user.percent} height='6px' color={user.color}></ProgressBar>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm   flex items-center align-center'>{convertToDate(user.dateUpate)}</div>
							<div className='grid-table-cell px-4 py-2 text-sm w-40 flex items-center align-center'>
								<div className='flex'>
									{user.tags.map((tag: any, index: number) => {
										return (
											<div key={index + 'tag'} className='mr-1'>
												<BtnTag color='#0091ff' className='text-xsm'>
													{tag}
												</BtnTag>
											</div>
										);
									})}
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm  w-40 flex items-center align-center'>
								<div className='flex items-center align-center'>
									<button className='p-1 flex mr-2 opacity-80	hover:opacity-100'>
										<IconMask className='icon-edit bg-info w-4 h-4 ' />
									</button>
									<button className='p-1 flex opacity-80	hover:opacity-100'>
										<IconMask className='icon-delete bg-danger w-5 h-5 ' />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</DataGridStyled>
	);
};
