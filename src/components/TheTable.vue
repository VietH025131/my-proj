<template>
  <v-main class="ma-5">
    <v-container class="grey lighten-3">
      <v-card flat class="pa-3" justify="space-between">
        <!-- Table to display -->
        <!-- <table class="table">
          <thead>
            <tr>
              <th
                class="text-left"
                v-for="column in columns"
                :key="column.dataKey"
              >
                <v-btn
                  text
                  block
                  x-large
                  depressed
                  @click="sortBy(column.dataKey)"
                >
                  <span class="caption text-capitalize">
                    <h2>{{ column.name }}</h2>
                  </span>
                  <v-icon right>mdi-sort</v-icon>
                </v-btn>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rowfilters" :key="row.code">
              <td
                v-for="column in columns"
                :key="column.dataKey"
                :class="column.align"
              >
                {{ row[column.dataKey] }}
              </td>
            </tr>
          </tbody>
        </table> -->

        <!-- Another way to display the data table by using <v-simple-table> -->

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <th
                class="text-left"
                v-for="column in columns"
                :key="column.dataKey"
              >
                <v-btn
                  text
                  depressed
                  disabled
                  class="white"
                  @click="sortBy(column.dataKey)"
                >
                  <span class="caption text-capitalize">{{ column.name }}</span>
                </v-btn>
              </th>
            </thead>
            <tbody>
              <tr v-for="row in rowfilters" :key="row.code">
                <td
                  v-for="column in columns"
                  :key="column.dataKey"
                  :class="column.align"
                >
                  {{ row[column.dataKey] }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

      </v-card>

      <!-- Bottom Pagination -->
      <div class="text-center">
        <v-container>
          <v-row justify="start">
            <v-col cols="auto">
              <v-container calss="red">
                <v-layout row warp>
                  <v-pagination
                    v-model="currentPage"
                    :length="numberPages"
                    total-visible="9"
                    @input="onPageChange"
                  ></v-pagination>
                </v-layout>
              </v-container>
            </v-col>
            <v-layout shrink class="align-center">
            </v-layout>
            <v-layout shrink class="align-center ml-3">
              <v-flex warp>
                <div> {{ rows.length }} entries</div>
              </v-flex>
            </v-layout>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  components: {},

  props: {
    columns: Array,
    rows: Array,
    perpage: Number,
  },

  data() {
    return {
      formatrow: this.rows,
      sort: "Asc",
      currentPage: 1,
      currentindex: 0,
    };
  },

  computed: {
    // retrun the total page number
    numberPages() {
      return Math.ceil(this.rows.length / this.perpage);
    },

    // get the row data for specific page
    rowfilters() {
      return this.formatrow.slice(this.currentindex, this.currentindex + this.perpage);
    },
  },

  methods: {
    onPageChange(value) {
      this.currentPage = value;
      this.currentindex = value * this.perpage - this.perpage;
    },
  },
};
</script>

<style scoped>
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}

th {
  border-bottom: 2px solid #ddd;
  text-align: left;
}

td.left {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.right {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
td.center {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>