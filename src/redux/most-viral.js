import fetch from 'isomorphic-fetch';

import host from '../utils/host';

export const VIRAL_REQUESTED = 'VIRAL_REQUESTED';
export const VIRAL_SUCCEEDED = 'VIRAL_SUCCEEDED';
export const VIRAL_FAILED = 'VIRAL_FAILED';

const defaultState = {
    error: null,
    fetching: false,
    initial: true,
    items: [],
    page: 0,
};

export default function mostViral(state = defaultState, action) {
    switch (action.type) {
    case VIRAL_REQUESTED:
        return {
            ...state,
            fetching: true,
        };
    case VIRAL_SUCCEEDED:
        const items = [...state.items, ...action.items];

        return {
            ...state,
            fetching: false,
            initial: false,
            page: ++state.page,
            items,
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

export function fetchMostViral(page = 0) {
    return fetch(`${host()}/api/hot/viral/${page}`)
        .then(response => response.json())
        .then(json => json.data)
        .catch(console.error);
}

export function requestMostViral(page = 0) {
    return (dispatch) => {
        dispatch(mostViralRequested());

        return fetchMostViral(page)
            .then(data => dispatch({
                type: VIRAL_SUCCEEDED,
                items: data,
            }))
            .catch(error => dispatch({
                type: VIRAL_FAILED,
                error,
            }));
    };
}
