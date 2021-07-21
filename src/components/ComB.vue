<template>
    <div>
        <h2>{{ $store.state.count }}</h2>
        <button @click="del">Delete</button>
    </div>
</template>

<script>
export default {
    methods: {
        del() {
            this.$store.dispatch("delAction");
        },
    },
};
</script>