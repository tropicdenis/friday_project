import React from "react";


type OneCardType = {
	cardId: string
	question: string
	created: string
	deleteCard: (cardId: string) => void
	updateCard: (card: any) => void
}


export const OneCard = (props: OneCardType) => {

	const deleteOneCard = () => {
		props.deleteCard(props.cardId)
	}
	const updateOneCard = () => {
		props.updateCard(props.cardId)
	}



	return (<div>
		<span>{props.created}{props.question}</span>
		<button onClick={deleteOneCard}>delete</button>
		<button onClick={updateOneCard}>update</button>
	</div>
	)
}


