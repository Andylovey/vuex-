const HomeModule = {

    namespaced: true,

    state: {
        student: {
            name: '麦迪',
            sex: '男',
            number: 175
        },
        count: 0
    },

    // 同步
    mutations: {
        changeStudent(state, payload) {
            return state.student = {
                ...state.student,
                number: payload.value
            }
        },
        changeCount(state, payload) {
            return state.count = payload.count
        }
    },

    // 异步
    actions: {
        // 第一种
        asyncChangeCount({ commit }) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    // 异步改变状态值count 也可以传给页面'执行结束'
                    commit('changeCount',{
                        count: 123
                    })
                    resolve('执行结束')
                },3000)
            })
        }

        // 第二种(少用这种)
        // asyncChangeCount({ commit }) {
        //     setTimeout(async () => {
        //         await commit('changeCount', {
        //             count: 123
        //         })
        //         console.log('执行结束')
        //     }, 3000)
        // }
    }

}

export default HomeModule;