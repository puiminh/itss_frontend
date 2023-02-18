<template>
    <div class=" w-full px-8">
        <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        class="bg-white rounded-md shadow-md p-8"
        />
    </div>

  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Course 1', 'Course 2', 'Course 3','Course 1', 'Course 2', 'Course 3','Course 1', 'Course 2', 'Course 3', 'Course 1', 'Course 2', 'Course 3','Course 1', 'Course 2', 'Course 3','Course 1', 'Course 2', 'Course 3' ],
          datasets: [{ 
                data: [40, 20, 12,40, 20, 12,40, 20, 12,40, 20, 12,40, 20, 12,40, 20, 12,40, 20, 12,40, 20, 12], 
                backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'
                ],
                label: '',
                barPercentage: 0.5,
                }],
        },
        chartOptions: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Your progress'
            }
          },
          scales: {
            x: {
                min: 0,
                max: 100,
            }
          }
        }
      }
    },

    methods: {
        
    }
  }
  </script>