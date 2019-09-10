<template>
  <v-app>
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue Open Trials</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar> -->

    <v-content>
      <!-- Content -->
      <router-view></router-view>
    </v-content>    
  </v-app>  
</template>

<script>
import Trial from './components/Trial';
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Search,
    Trial
  },
  data: () => ({
    foo: 'bar'
  }),
};
</script>
