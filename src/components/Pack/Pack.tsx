import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsPackTC, initialCardsStateType } from '../../Redux/cardsReducer';
import { AppStateType } from '../../Redux/redux_store';
import style from '../Pack/Pack.module.css';




const Pack = () => {

	const dispatch = useDispatch();
	const cardsFromState = useSelector<AppStateType, initialCardsStateType>(state => state.cards);


	useEffect(() => {
		dispatch(getCardsPackTC())
	}, [])

	const allPacks = cardsFromState.cardPacks.map(pack => {
		return (
			<div className={style.flexCards}>
				<div>{pack.name}</div>
				<div>{pack.cardsCount}</div>
				<div>{pack.updated}</div>
				<div><button>delete</button></div>
				<div><button>update</button></div>
				<div><a href="#">cards</a></div>

			</div>
		)
	})

	return (
		<div className={style.main}>
			<div>PacksPage</div>
			<div className={style.flexCardsTitle}>
				<div>name</div>
				<div>cardsCount</div>
				<div>updated</div>
				<div><button>add</button></div>

			</div>
			<div>{allPacks}</div>
		</div>
	)
}

export default Pack;


