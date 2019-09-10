<template>
  <v-container>
    <v-row>
      <v-card v-if="trial">
        <v-card-title>{{trial.public_title}}</v-card-title>
        <v-card-text>
          <ul>
            <li>Registration: {{ trial.registration_date | moment("dddd, MMMM Do YYYY") }}</li>
            <li>Status: {{trial.status}}</li>
            <li>Phase: {{trial.study_phase}}</li>
          </ul>

          <div class="my-4">
            <h3>Summary</h3>
            {{trial.brief_summary}}
          </div>

          <div class="my-4">
            <h3>Conditions</h3>
            <ul>
              <li v-for="item in trial.conditions" :key="item.name">{{item.name}}</li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    name: "Trial",
    apollo: {
      trial: {
        // gql 
        query: gql`query Trial($trialId: String!){
          trial(id: $trialId) {
            public_title
            brief_summary
            status
            study_phase
            registration_date,
            conditions {
              name
            }
          }
        }`,
        variables: {
          trialId: "7d3a039e-46b8-11e7-ba62-0242ac12000d"
        }
      },
    }
  };
</script>
