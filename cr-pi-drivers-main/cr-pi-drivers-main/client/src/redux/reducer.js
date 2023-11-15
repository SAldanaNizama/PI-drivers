const pilotosReducer = (state = [], action) => {
    switch (action.type) {
        case 'AGREGAR_PILOTO':
            return [...state, action.payload];
        // Otros casos según tus necesidades
        default:
            return state;
    }
};

  export default pilotosReducer;