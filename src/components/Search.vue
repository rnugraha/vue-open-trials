<template>
  <v-container>
    <v-layout text-center wrap>
      <v-text-field solo label="Search" append-icon="search"></v-text-field>
    </v-layout>
    <SearchResult />
  </v-container>
</template>

<script>
import SearchResult from "./SearchResult";
export default {
  name: "Search",
  components: { SearchResult },
};
</script>
