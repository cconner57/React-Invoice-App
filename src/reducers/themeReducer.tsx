import {
	THEME_CHANGE_REQUEST,
	THEME_CHANGE_SUCCESS,
	THEME_CHANGE_FAIL,
} from '../constants/themeConstants';

interface Reducer {
	type: string;
	payload: object;
}

export const themeChangeReducer = (
	state = { theme: false },
	action: Reducer
) => {
	switch (action.type) {
		case THEME_CHANGE_REQUEST:
			return { ...state, loading: true };
		case THEME_CHANGE_SUCCESS:
			return { loading: false, theme: !state.theme };
		case THEME_CHANGE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
