

export function doctorReducer(
	state = [
		{
			id: 1,
			name: 'loki',
		},
		{
			id: 2,
			name: 'press',
		},
		{
			id: 3,
			name: 'abi',
		},
	],
	action
) {
	switch (action.type) {
		case 'ADD_DOCTOR':
			return [...state, action.payload];
		case 'REMOVE_DOCTOR':
			return state.filter((doctor) => {
				return doctor.id !== action.payload; 
			});
		case 'EDIT_DOCTOR': {
			const index = state.findIndex((doc) => doc.id == action.payload.id); 
			const editedState = [...state];
			editedState[index].name = action.payload.name;
			return editedState	
		}
		default:
			return state;
	}
}
