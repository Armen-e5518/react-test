const select = (car) => {

    return {
        type: 'CAR_SELECTED',
        payload: car
    }
};

export default select