export default {
  namespace: 'charts',
  state: {
    options: {
      sdoption: {
        title: {
          text: '堆叠图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        toolbox: {
          feature: {
          }
        },
        grid: {
          left: '1%',
          right: '3%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      eeoption: {
        title: {
          text: '某站点用户访问来源',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      eaoption: {
        title: {
          text: '漏斗图'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
        },
        legend: {
          data: ['展现', '点击', '访问', '咨询', '订单']
        },
        series: [
          {
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
              normal: {
                formatter: '{b}预期'
              },
              emphasis: {
                position: 'inside',
                formatter: '{b}预期: {c}%'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.7
              }
            },
            data: [
                        {value: 60, name: '访问'},
                        {value: 40, name: '咨询'},
                        {value: 20, name: '订单'},
                        {value: 80, name: '点击'},
                        {value: 100, name: '展现'}
            ]
          },
          {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
              normal: {
                position: 'inside',
                formatter: '{c}%',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                position: 'inside',
                formatter: '{b}实际: {c}%'
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.5,
                borderColor: '#fff',
                borderWidth: 2
              }
            },
            data: [
                        {value: 30, name: '访问'},
                        {value: 10, name: '咨询'},
                        {value: 5, name: '订单'},
                        {value: 50, name: '点击'},
                        {value: 80, name: '展现'}
            ]
          }
        ]
      },
      tcoption: {
        title: {
          text: '阶梯瀑布图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: {show: false},
          data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', '11月11日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'bottom'
              }
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      },
      gaugeoption: {
        backgroundColor: '#1b1b1b',
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 3,
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {            // 坐标轴小标记
              textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: {           // 分隔线
              length: 25,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {           // 分隔线
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5
            },
            title: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5,
              offsetCenter: [0, '50%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
              }
            },
            data: [{value: 40, name: 'km/h'}]
          },
          {
            name: '转速',
            type: 'gauge',
            center: ['25%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                width: 2,
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {            // 坐标轴小标记
              textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 5,
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, '-30%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            detail: {
                  // backgroundColor: 'rgba(30,144,255,0.8)',
                 // borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5,
              width: 80,
              height: 30,
              offsetCenter: [25, '20%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
              }
            },
            data: [{value: 1.5, name: 'x1000 r/min'}]
          },
          {
            name: '油表',
            type: 'gauge',
            center: ['75%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                width: 2,
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {
              textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              },
              formatter: function (v) {
                switch (v + '') {
                  case '0' : return 'E'
                  case '1' : return 'Gas'
                  case '2' : return 'F'
                }
              }
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 2,
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{value: 0.5, name: 'gas'}]
          },
          {
            name: '水表',
            type: 'gauge',
            center: ['75%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                width: 2,
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              show: false
            },
            axisLabel: {
              textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              },
              formatter: function (v) {
                switch (v + '') {
                  case '0' : return 'H'
                  case '1' : return 'Water'
                  case '2' : return 'C'
                }
              }
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 2,
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{value: 0.8, name: 'gas'}]
          }
        ]
      }
    }
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {
    * query ({ payload }, { put, call }) {
    }
  },
  reducers: {
  }
}
