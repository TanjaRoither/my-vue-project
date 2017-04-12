<template>
  <section class="steps">
    <main>
      <h1>Step: {{$route.query.step}} - {{ page }}</h1>
    </main>
  </section>
</template>

<script>
export default {
  data () {
    return {
      step: ''
    }
  },
  computed: {
    step: '$route.query.step'
  }

}

</script>

<style lang="scss" scoped>
</style>

