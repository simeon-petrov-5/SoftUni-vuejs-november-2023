<script>
export default {
  data() {
    return {
      timerValue: '00:00:30',
      isStarted: false,
      currentTime: 0,
    };
  },
  methods: {
    onChange(event) {
      this.timerValue = event.target.value;
    },
    onStart() {
      this.isStarted = true;
      const [h, m, s] = this.timerValue.split(':');
      this.currentTime = Number(s) + (Number(m) * 60) + (Number(h) * 3600);
      this.trackTime();
    },
    trackTime() {
      const interval = setInterval(() => {
        this.currentTime -= 1;
        // eslint-disable-next-line curly
        if (this.currentTime === 0) {
          clearInterval(interval);
        }
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="container">
    <article>
      <h1>Timer APP</h1>

      <template v-if="isStarted">
        <h1>{{ currentTime }}</h1>
        <h1>{{ timerValue }}</h1>
        <progress value="25" max="100" />
        <button @click="onStop">
          Stop timer
        </button>
      </template>
      <template v-else>
        <input :value="timerValue" placeholder="00:01:30" @type="text" @input="onChange">
        <button @click="onStart">
          Start timer
        </button>
      </template>
    </article>
  </div>
</template>
