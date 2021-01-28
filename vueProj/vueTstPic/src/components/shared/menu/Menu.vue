
<template>
    <nav>
      <ul>       
          <li v-for="route in rotas" :key="route.path">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props: {
        rotas: {
            type: Array, 
            required: true
        }
    }
}
</script>

<style>
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
 
</style>
