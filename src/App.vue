<template>
    <div style="border:solid; padding:10px; ">
        <span>Store: </span>
        <h1 style="text-align: center">{{ $store.state.count }}</h1>
        <hr />
        <span>ComA:</span>
        <ComA></ComA>
        <hr />
        <span>ComB:</span>
        <ComB></ComB>
    </div>
</template>

<script>
import ComA from "./components/ComA.vue";
import ComB from "./components/ComB.vue";
export default {
    components: {
        ComA,
        ComB,
    },
};
</script>

<style></style>
