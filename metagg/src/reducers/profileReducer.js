import { SETTING_OVERVIEW, SETTING_OVERVIEW_SUCCESS, SETTING_OVERVIEW_FAILURE,
    SETTING_RANKED, SETTING_RANKED_SUCCESS, SETTING_RANKED_FAILURE,
    GETTING_MATCH_HISTORY, GETTING_MATCH_HISTORY_SUCCESS, GETTING_MATCH_HISTORY_FAILURE
} from '../actions';

const initialState = {
    overview: {},
    region: 'naW',
    rankedData: {},
    matchHistory: [],
    settingOverview: false,
    settingRanked: false,
    gettingMatchHistory: false,
    error: null
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTING_OVERVIEW:
        return {...state,
                settingOverview: true};
        case SETTING_OVERVIEW_SUCCESS:
            return {...state, 
                    overview: action.payload,
                    settingOverview: false};
        case SETTING_OVERVIEW_FAILURE:
            return {...state, 
                error: action.payload,
                settingOverview: false};
        case SETTING_RANKED:
            return {...state,
                settingRanked: true};
        case SETTING_RANKED_SUCCESS:
            return {...state, 
                    rankedData: action.payload,
                    settingRanked: false};
        case SETTING_RANKED_FAILURE:
            return {...state, 
                error: action.payload,
                settingRanked: false};
        case GETTING_MATCH_HISTORY:
            return {...state,
                gettingMatchHistory: true};
        case GETTING_MATCH_HISTORY_SUCCESS:
            return {...state, 
                    matchHistory: action.payload,
                    gettingMatchHistory: false};
        case GETTING_MATCH_HISTORY_FAILURE:
            return {...state, 
                error: action.payload,
                gettingMatchHistory: false};
        default:
            return state;
    }
  };
