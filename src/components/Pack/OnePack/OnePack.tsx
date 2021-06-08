import React from 'react';
import { EditableSpan } from '../../EditableSpan/EditableSpan';
import style from '../OnePack/OnePack.module.css';

type OnePackType = {
	packId: string
	name: string
	cardsCount: number
	updated: string
	onClickDeletePack: (packId: string) => void
	onClickUpdatePack: (packId: string) => void
}

export const OnePack = (props: OnePackType) => {
	console.log('one pack');

	const onClickDeletePackOnButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		props.onClickDeletePack(props.packId)
	}

	const onClickUpdatePackOnButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		props.onClickUpdatePack(props.packId)
	}

	return <div className={style.flexCards}>
		<div>{props.name}</div>
		<div>{props.cardsCount}</div>
		<div>{props.updated}</div>
		<div><button onClick={onClickDeletePackOnButton}>delete</button></div>
		<div><button onClick={onClickUpdatePackOnButton}>update</button></div>
		<div><a href="#">cards</a></div>
	</div>
}