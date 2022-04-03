<template>
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li v-for="finished in todos" :key="finished.id">
                {{finished.title}}
                <button class="remove-item btn btn-default btn-xs pull-right" @click="removeTodo(finished.id)">
                    <i class="fa fa-trash"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'FinishedTodo',
	props: {
		todos: {
			type: Array,
			required: true,
		},
	},
    methods:{
        removeTodo(id){
            this.$store.dispatch('deleteTodo',{ id: id })
            // EventBus.$emit('delete-todo',{id:id})
        }
    }
};
</script>

<style>
</style>
