type stateProps = {
    Mode: string,
    Theme: object
};

type actionProps = {
    type: string,
    payload?: any,
};


export type { stateProps, actionProps };