import { todos } from './seed';
const state = {todos:todos};

const getters = {
    findTodos () {
        return state.todos;
    }
};

const mutations = {
    ADD_TODO (state, payload) {
        state.todos.push(payload);
    },
    COMPLETED_TODO (state, payload) {
        const index = state.todos.findIndex(todo => todo.id === payload.id);
		state.todos[index].completed = true;
    },
    DELETE_TODO (state, payload) {
        const index = state.todos.findIndex(todo => todo.id === payload.id);
		state.todos.splice(index, 1);
    }
};

const actions = {
    addTodo (context, payload) {
        context.commit('ADD_TODO', payload);
    },
    completedTodo (context, payload) {
        context.commit('COMPLETED_TODO',payload);
    },
    deleteTodo (context, payload) {
        context.commit('DELETE_TODO',payload);
    }
};

export { state, getters, mutations, actions };