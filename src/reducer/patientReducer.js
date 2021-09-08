export function patientReducer(state = [], action) {
	switch (action.type) {
		case 'PATIENT_ADDED':
			return [...state,action.payload];
		case 'PATIENT_REMOVE':
			return action.payload;
		default:
			return state;
	}
}
