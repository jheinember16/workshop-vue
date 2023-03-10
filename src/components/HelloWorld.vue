<template>
  <div class="hello">   
    {{mivariable}}
    <ul>
      <li v-for="(job, index) in jobs" :key="index">
        {{ job.name + " " +  job.company + " " +job.salary  }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    numero: Number
  },
  data(){
    return{
      jobs: [
        {
          name: "Digital Marketing Specialist",
          company: "Bankuish",
          salary: "$ 3M - 4M COP"
        },
        {
          name: "Arquitecto de TI",
          company: "Data Tools",
          salary: "$ 4M - 5M COP"
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
