const initialState = {
    potato: "wheee"
};

const weather = (state = initialState, action: { type: string; }) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default weather;
