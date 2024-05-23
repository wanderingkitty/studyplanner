import { useStore } from '../../data/store.js';
import { useState } from 'react';

const Item = ({ item }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [text, setText] = useState(item.text);
	
	const deleteTodo = useStore(state => state.deleteTodo);
	const toggleTodo = useStore(state => state.toggleTodo);
	const updateTodo = useStore(state => state.updateTodo);
	
	const handleChange = () => { 
		toggleTodo(item.id);
	};
	
	const handleDelete = () => {
		deleteTodo(item.id);
	};
	
	const handleEdit = () => {
		setIsEdit(true);
	};
	
	const handleTextChange = (e) => {
		setText(e.target.value);
	};
	
	const handleSave = () => {
		updateTodo(item.id, text); // Make sure this updates the state
		setIsEdit(false); // This should trigger a re-render
	};
	
	
	const handleCancel = () => {
		setText(item.text);
		setIsEdit(false);
	};
	
	let itemClass = '';
	if (item.done) itemClass += 'done ';
	if (item.late) itemClass += 'due';
	

	return (
		<div className="item" data-testid={`item-${item.id}`}>
		<input type="checkbox" checked={item.done} onChange={handleChange} />
		{isEdit ? (
			
			<div>
			{/* <input type="checkbox" checked={item.done} onChange={handleChange} /> */}
			<input
			type="text"
			value={text}
			onChange={handleTextChange}
			/>
			<button className='save-btn' title="Spara" onClick={handleSave}>Spara</button>
			<button onClick={handleCancel}>Cancel</button>
			</div>
			) : (
				<label className={itemClass} onClick={handleChange}>
				{item.text}
				</label>
				)}
				
				<span className='edit-icon' title="Ändra" onClick={handleEdit}>✍️</span>
				<span className="delete-icon" title="Ta bort" onClick={handleDelete}>🗑️</span>
				</div>
				);
			};
			
			export default Item;
			