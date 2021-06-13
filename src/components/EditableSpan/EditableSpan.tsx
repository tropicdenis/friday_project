import React, { ChangeEvent, useState } from 'react';

type EditableSpanPropsType = {
	value: string
	onChangeTitle: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
	console.log("EditableSpan called");
	let [editMode, setEditMode] = useState(true);
	let [title, setTitle] = useState(props.value);

	const activateEditMode = () => {
		setEditMode(true);
		setTitle(props.value);
	}
	const activateViewMode = () => {
		setEditMode(false);
		props.onChangeTitle(title);
	}
	const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	return editMode
		? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
		: <span onDoubleClick={activateEditMode}>{props.value}</span>
});
