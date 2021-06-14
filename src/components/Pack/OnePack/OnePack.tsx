import React from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getCardsTC} from '../../../Redux/cardsReducer';
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
	const dispatch = useDispatch();

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
		<div><NavLink to={`/cards/${props.packId}`} onClick={() => {
			dispatch(getCardsTC(props.packId))
		}}>cards</NavLink></div>
	</div>
}
