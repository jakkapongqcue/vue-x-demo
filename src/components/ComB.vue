<template>
    <div>
        <h2>{{ $store.getters.getCount }}</h2>
        <button @click="del">Delete</button>
    </div>
</template>

<script>
export default {
    methods: {
        del() {
            this.$store.commit('setCount', this.$store.getters.getCount - 1);
        },
    },
};
</script>