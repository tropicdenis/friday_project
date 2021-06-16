import React, {useEffect} from "react";
import style from "./Cards.module.css"
import {Range} from "../Range/Range";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {createCardTC, deleteCardTC, getCardsTC, InitialStateCards, updateCardTC} from "../../Redux/cardsReducer";
import {Search} from "../Search/Search";
import {useParams} from "react-router-dom";
import {OneCard} from "./OneCard/OneCard";

export const Cards = () => {
    const dispatch = useDispatch()
    const allCards = useSelector<AppStateType, InitialStateCards>(state => state.cards)

    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()

    useEffect(() => {
        dispatch(getCardsTC(cardsPack_id))
    }, [dispatch, cardsPack_id])

    const onClickCreateCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(createCardTC({
            card: {
                cardsPack_id
            }
        }, cardsPack_id))
    }

    const onClickDeleteCard = (cardId: string) => {
        dispatch(deleteCardTC(cardId, cardsPack_id))
    }
    const onClickUpdateCard = (cardId: string) => {
        dispatch(updateCardTC({
            card: {
                _id: cardId,
                question: 'new question'
            }
        }, cardsPack_id))
    }

    return (
        <div className={style.main}>
            <div className={style.components}>
                <Range/>
                <Search/>
            </div>
            <div className={style.table}>Table Cards
                <div className={style.borderTable}>
                    <span>Question</span>
                    <span>Answer</span>
                    <span>Grade</span>
                    <span>Updated</span>
                    <span>Url</span>
                    <button onClick={onClickCreateCard}>Add</button>
                </div>
            </div>

            <div className={style.bodyTable}>
                <div className={style.borderTable}>
                    {allCards.cards.map(c => (<OneCard
                            cardId={c._id}
                            question={c.question}
                            created={c.created}
                            deleteCard={onClickDeleteCard}
                            updateCard={onClickUpdateCard}/>
                    ))}
                </div>
            </div>
        </div>
    );
}