import voteTotal from '';

export const voteIncrease = (state, action) => {
    switch (action.type) {
        case 'ADD_VOTE': {
            return{
                ...state,
                voteTotal: newVoteTotal,
            };
        }
    }
};
