<template>
  <form @submit.prevent="handleUpdate">
    <label>Title: </label>
    <input type="text" v-model="title" required />
    <label>Details: </label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      url: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    handleUpdate() {
      let project = {
        title: this.title,
        details: this.details,
      };
      fetch(this.url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
