const HomeModule = {

    namespaced: true,

    state: {
        student: {
            name: '麦迪',
            sex: '男',
            number: 175
        }
    },
    
    mutations: {
        changeStudent(state, payload) {
            return state.student = {
                ...state.student,
                number: payload.value
            }
        }
    }

}

export default HomeModule;