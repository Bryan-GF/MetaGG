import { SETTING_OVERVIEW, SETTING_OVERVIEW_SUCCESS, SETTING_OVERVIEW_FAILURE,
    SETTING_RANKED, SETTING_RANKED_SUCCESS, SETTING_RANKED_FAILURE
} from '../actions';

const initialState = {
    overview: {},
    region: 'naW',
    rankedData: {},
    settingOverview: false,
    settingRanked: false,
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
        default:
            return state;
    }
  };
