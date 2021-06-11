import React from 'react';
import style from '../OnePack/OnePack.module.css';

type OnePackType = {
	packId: string
	name: string
	cardsCount: number
	updated: string
	onClickDeletePack: (packId: string) => void
}

export const OnePack = (props: OnePackType) => {

	const onClickDeletePackOnButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		props.onClickDeletePack(props.packId)
	}

	return <div className={style.flexCards}>
		<div>{props.name}</div>
		<div>{props.cardsCount}</div>
		<div>{props.updated}</div>
		<div><button onClick={onClickDeletePackOnButton}>delete</button></div>
		<div><button>update</button></div>
		<div><a href="#">cards</a></div>
	</div>
}
