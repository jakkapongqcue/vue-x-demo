<template>
    <div>
        <h2>{{ $store.state.count }}</h2>
        <button @click="add">Add</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            this.$store.dispatch("addAction");
        },
    },
};
</script>