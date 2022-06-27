<script setup>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

// main DOM
const main = ref(null)

const store = useStore()

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
])

onMounted(() => {
  const chartDom = document.getElementById('main')
  let myChart = echarts.init(chartDom, store.getters.curDarkMode)
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  myChart.setOption(option)

  // toggle darkMode
  watch(
    () => store.getters.curDarkMode,
    (curDarkMode) => {
      myChart.dispose()
      myChart = echarts.init(chartDom, curDarkMode)
      myChart.setOption(option)
    }
  )
})
</script>

<template>
  <div ref="main" id="main">mu</div>
</template>

<style scoped>
#main {
  height: 100%;
  width: 100%;
}
</style>
