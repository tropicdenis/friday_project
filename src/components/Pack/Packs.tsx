import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    createCardsPackTC,
    deleteCardsPackTC,
    getCardsPackTC,
    initialCardsStateType,
    updateCardsPackTC
} from '../../Redux/packsReducer';
import {AppStateType} from '../../Redux/redux_store';
import style from '../Pack/Packs.module.css';
import {Search} from "../Search/Search";
import {Range} from "../Range/Range";
import {OnePack} from './OnePack/OnePack';
import UsePagination from "../Paginator/Paginator";

const Packs = () => {
    const dispatch = useDispatch();
    const cardsFromState = useSelector<AppStateType, initialCardsStateType>(state => state.packs);
    const cardPacksTotalCount = useSelector<AppStateType, number>( state => state.packs.cardPacksTotalCount)
    const cardPage = useSelector<AppStateType, number>( state => state.packs.page)
    const [titlePacks, setTitlePacks] = useState('');

    useEffect(() => {
        dispatch(getCardsPackTC(cardPage))
    }, [dispatch])


    const onChangeNewTitlePacks = (event: ChangeEvent<HTMLInputElement>) => {
        setTitlePacks(event.currentTarget.value);
    }

    const cardsPack = {
        name: titlePacks
    }

    const onClickCreateCardsPack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(createCardsPackTC({ cardsPack }, cardPage));
        setTitlePacks('')
    }
    const onClickDeletePack = useCallback((packId: string) => {
        dispatch(deleteCardsPackTC(packId, cardPage))
    }, [cardsFromState])

    const onClickUpdatePack = useCallback((packId: string) => {
        dispatch(updateCardsPackTC({
            cardsPack: {
                _id: packId,
                name: 'new name'
            }
        }, cardPage))
    }, [cardsFromState])

    const changePagePaginator = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(getCardsPackTC(page))
    }

    const allPacks = cardsFromState.cardPacks.map(pack => <OnePack
        packId={pack._id}
        name={pack.name}
        cardsCount={pack.cardsCount}
        updated={pack.updated}
        onClickDeletePack={onClickDeletePack}
        onClickUpdatePack={onClickUpdatePack}
    />
    )

    return (
        <div className={style.main}>
            <div className={style.components}>
                <Range />
                <Search />
            </div>
            <div><UsePagination cardPacksTotalCount={cardPacksTotalCount} cardPage={cardPage} onChange={changePagePaginator}/></div>
            <div>PacksPage</div>
            <div className={style.flexCardsTitle}>
                <div>name</div>
                <div>cardsCount</div>
                <div>updated</div>
                <div><input type="text" value={titlePacks} onChange={onChangeNewTitlePacks} /></div>
                <div>
                    <button onClick={onClickCreateCardsPack}>add</button>
                </div>
            </div>
            <div>{allPacks}</div>

        </div>
    )
}

export default Packs;


