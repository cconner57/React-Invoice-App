import {
	THEME_CHANGE_REQUEST,
	THEME_CHANGE_SUCCESS,
	THEME_CHANGE_FAIL,
} from '../constants/themeConstants';

export const themeChange = () => async (dispatch: Function) => {
	try {
		dispatch({ type: THEME_CHANGE_REQUEST });

		dispatch({ type: THEME_CHANGE_SUCCESS });
	} catch (error) {
		dispatch({
			type: THEME_CHANGE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
