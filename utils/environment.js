const postfixMode = {
    Development : "Dev-",
    Test:"Test-"
};

export const postfix = (title) => {
    const postfix = process.env.NODE_ENV && postfixMode[process.env.NODE_ENV.trim()];
    return postfix ? postfix + title : title;
};
