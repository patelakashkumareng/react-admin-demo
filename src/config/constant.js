export const PER_PAGE = 5
export const CRICKET_SPORTS_ID = 1

export const ADMIN_STATUS = {
    'active': 1,
    'inactive': 0,
    'all': null
}

export const LOCAL_STORAGE = {
    USER_DATA: 'UserData',
    AUTH_TOKEN: 'AuthToken'
}



export const SPORTS = {
    CRICKET :{
        NAME: 'cricket',
        ID: 1
    }, 
    FOOTBALL: {
        NAME: 'football',
        ID: 2
    },
    BASKETBALL: {
        NAME: 'basketball',
        ID: 3
    }
}
export const SPORTSLIST = [
   {
    value: 1,
    label: 'Cricket'
   },
   {
    value: 2,
    label: 'Football'
   },
]


const Constant = Object.freeze({

    SCREEN_IDS : {
        DEPOSITE: 1,
        KYC: 2,
        MATCH_DETAILS: 3,
        CONTEST_DETAIL: 4
    },

    BANNER: {
        USED_IN: {
            WEB: 0,
            APP: 1
        },
        TYPE: {
            LOBBY_BANNER : 0,
            APP_BANNER: 1
        },
        SPORT_TYPE: {
            GENERAL: 0,
            NORMAL:1,
            RETRO: 2
        }
    }

})



export default Constant
