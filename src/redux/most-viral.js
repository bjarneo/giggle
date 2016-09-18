import fetch from 'isomorphic-fetch';

const VIRAL_REQUESTED = 'VIRAL_REQUESTED';
const VIRAL_SUCCEEDED = 'VIRAL_SUCCEEDED';
const VIRAL_FAILED = 'VIRAL_FAILED';

const defaultState = {
    error: null,
    fetching: false,
    initial: true,
    items: [],
};

export default function mostViral(state = defaultState, action) {
    switch (action.type) {
    case VIRAL_REQUESTED:
        return {
            ...state,
            fetching: true,
        };
    case VIRAL_SUCCEEDED:
        return {
            ...state,
            fetching: false,
            initial: false,
            items: action.items,
        };
    case VIRAL_FAILED:
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
                type: VIRAL_SUCCEEDED,
                items: json.data,
            }))
            .catch(error => dispatch({
                type: VIRAL_FAILED,
                error,
            }));
    };
}
