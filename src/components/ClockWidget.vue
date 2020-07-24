<template>
  <div v-if="showTime">
    <span class="clock-format">{{fullDateString}}</span>
  </div>
</template>

<script>
    export default {
        name: 'ClockWidget',
        data () {
          return {
            month_names: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            day_names: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            options: {},
            dayOfWeekString: '',
            monthString: '',
            dayString: '',
            yearString: '',
            hourString: '',
            minuteString: '',
            ampmString: '',
            fullDateString: '',
            showTime: false,
            dateTimeIntervalId: null
          }
        },
      created () {
        let that = this
        this.formatCurrentDate()
        this.showTime = true
        this.dateTimeIntervalId = setInterval(() => {
          that.formatCurrentDate()
        }, 15000)
      },
      methods: {
        formatCurrentDate () {
          const currentDate = new Date()
          let hourString = ''
          let ampmString = ''

          if (currentDate.getHours() > 12) {
            hourString = currentDate.getHours() - 12
            ampmString = 'PM'
          } else {
            hourString = currentDate.getHours()
            ampmString = 'AM'
          }

          this.fullDateString =
            this.day_names[currentDate.getDay()] + ', ' +
            this.month_names[currentDate.getMonth()] + ', ' +
            currentDate.getDate() + ', ' +
            currentDate.getFullYear() + ' ' +
            hourString + ':' +
            this.padNumber(currentDate.getMinutes(), 2) + ' ' +
            ampmString
        },
        padNumber (number, padSize) {
          let s = number + ''
          while (s.length < padSize) s = '0' + s
          return s
        }
      }
    }
</script>

<style scoped>
  .clock-format{

  }
</style>
