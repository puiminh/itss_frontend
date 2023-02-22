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
import { mapActions, mapState } from 'pinia'
import { useCourseCollectionStore } from '../../stores/course'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
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
    computed: {
      ...mapState(useCourseCollectionStore, ['getAllProgress']),
      label() {
        return this.getAllProgress.map(item => item.course.title)
      },
      data() {
        return this.getAllProgress.map(item => item.progress)
      },
      chartData() {
        return  {          
          labels: this.label,
          datasets: [
            { 
                data: this.data, 
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
            }
          ]}
      }
    },

    methods: {
        ...mapActions(useCourseCollectionStore,['getAllProgressAction'])
    },
    mounted() {
        const courseStore = useCourseCollectionStore();
        courseStore.getAllProgressAction().then(()=>{
          // this.chartData.datasets[0].data = courseStore.getAllProgress.map(item => item.progress);
          // this.chartData.labels = courseStore.allProgress.map(item => item.course.title);
        });
    }
  }
  </script>