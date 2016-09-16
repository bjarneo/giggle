import fetch from 'isomorphic-fetch';

const VIRAL_REQUESTED = 'VIRAL_REQUESTED';
const VIRAL_SUCCESS = 'VIRAL_SUCCESS';
const VIRAL_FAILURE = 'VIRAL_FAILURE';

const defaultState = {
    error: null,
    fetching: false,
    items: [],
};

export default function mostViral(state = defaultState, action) {
    switch (action.type) {
    case VIRAL_REQUESTED:
        return {
            ...state,
            fetching: true,
        };
    case VIRAL_SUCCESS:
        return {
            ...state,
            fetching: false,
            items: action.items,
        };
    case VIRAL_FAILURE:
        return {
            ...state,
            error: action.error,
            fetching: false,
        };
    default:
        break;
    }

    return state;
}

function mostViralRequested() {
    return {
        type: VIRAL_REQUESTED,
    };
}

export function requestMostViral(page = 0) {
    return (dispatch) => {
        dispatch(mostViralRequested());

        return fetch(`/api/hot/viral/${page}`)
            .then(response => response.json())
            .then(json => dispatch({
                type: VIRAL_SUCCESS,
                items: json.data,
            }))
            .catch(error => dispatch({
                type: VIRAL_FAILURE,
                error,
            }));
    };
}
