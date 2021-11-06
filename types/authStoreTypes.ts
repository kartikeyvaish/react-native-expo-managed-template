type stateProps = {
    User: object | null
};

type actionProps = {
    type: string,
    payload?: any,
};


export type { stateProps, actionProps };