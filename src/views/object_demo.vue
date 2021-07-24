<template>
    <div style="margin: 10px;">
        <input type="text" v-model="couse.title" /><br />
        <input type="number" v-model="couse.price" /><br />
        <button class="btn-submit" @click="addCourse">submit</button>

        <ul>
            <li v-for="({ title, price }, index) in $store.getters.Courses" :key="index">
                Title : {{ title }}, Price : {{ price }} <button class="btn-delete" @click="deleteCourse(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            couse: { title: "", price: 0 },
        };
    },
    methods: {
        addCourse() {
            this.$store.commit("setCourses", this.couse);
            // this.$store.commit('setCourses' , this.$store.getters.Courses.push(this.couse))
            // this.$store.dispatch("addCourses", this.couse)
            this.couse = { title: "", price: 0 };
        },
        deleteCourse(index) {
            // this.Courses.splice(index, 1);
            this.$store.commit("deleteCourse", index);
        },
    },
};
</script>

<style></style>
