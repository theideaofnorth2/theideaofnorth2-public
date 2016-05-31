const defaultState = {
	initialized: false,
	ready: false,
	centering: false,
	zooming: false,
	hoveredCitie: null,
	hoveredDestinationer: null,
	selectedOrigin: null,
	selectedInterview: null,
};

export default function reducer(state = defaultState, action = null) {
	switch (action.type) {
		case 'MAP_INITIALIZED':
			return {
				...state,
				initialized: true,
			};
		case 'MAP_READY':
			return {
				...state,
				ready: true,
			};
		case 'MAP_CENTERING_STARTED':
			return {
				...state,
				centering: true,
			};
		case 'MAP_CENTERING_FINISHED':
			return {
				...state,
				centering: false,
				zooming: true,
			};
		case 'MAP_ZOOMING_FINISHED':
			return {
				...state,
				zooming: false,
			};
		case 'CITIE_MOUSE_ENTER':
			return {
				...state,
				hoveredCitie: action.citie,
			};
		case 'CITIE_MOUSE_LEAVE':
			return {
				...state,
				hoveredCitie: null,
			};
		case 'DESTINATIONER_MOUSE_ENTER':
			return {
				...state,
				hoveredDestinationer: action.interview,
			};
		case 'DESTINATIONER_MOUSE_LEAVE':
			return {
				...state,
				hoveredDestinationer: null,
			};
		case 'DESTINATIONER_CLICK':
			return {
				...state,
				selectedOrigin: action.citie,
				selectedInterview: action.interview,
			};
		case 'ORIGIN_CLICK':
			return {
				...state,
				selectedOrigin: action.citie,
			};
		case 'ORIGIN_CLOSE':
			return {
				...state,
				selectedOrigin: null,
				selectedInterview: null,
			};
		case 'INTERVIEW_CLICK': {
			const selectedInterview = state.selectedInterview === action.interview ?
				null : action.interview;
			return {
				...state,
				selectedInterview,
			};
		}
		default:
			return state;
	}
}
