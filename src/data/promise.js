export const promesa = (prodlist) => {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res(prodlist)
        }, 3000);
    })
};

