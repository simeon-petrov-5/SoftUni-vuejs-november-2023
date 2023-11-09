<script>
import Card from './components/Card.vue';

let interval = null;
function formatTime(seconds) {
  if (Number.isNaN(seconds) || seconds < 0)
    return '';

  const date = new Date(seconds);

  // Use Intl.DateTimeFormat to format the time
  const formatter = new Intl.DateTimeFormat('en', {
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });

  return formatter.format(date);
};

export default {
  components: {
    Card,
  },
  data() {
    return {
      isStarted: false,
      timer: '',
      cards: [
        { idx: 1, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
        { idx: 2, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
        { idx: 3, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
        { idx: 4, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
      ],
      selectedItem: [],
      guessedItems: [],

    };
  },
  watch: {
    selectedItem: {
      handler(newVal) {
        if (newVal.length === 2 && (newVal[0].type === newVal[1].type))
          this.guessedItems.push(newVal[0].type);
      },
      deep: true,
    },
  },
  methods: {
    handleSelect(idx, type) {
      if (!this.isStarted)
        return;

      if (this.selectedItem.length < 2)
        this.selectedItem.push({ idx, type });

      else if (this.selectedItem.length === 2)
        this.selectedItem = [{ idx, type }];
    },
    onStart() {
      this.isStarted = true;
      this.startGameTimer();
    },
    onStop() {
      this.isStarted = false;
      clearInterval(interval);
    },
    startGameTimer() {
      let seconds = 60000;
      this.timer = formatTime(seconds);
      interval = setInterval(() => {
        console.log('tic');
        seconds -= 1000;
        this.timer = formatTime(seconds);
        if (seconds === 0)
          clearInterval(interval);
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="myGrid">
    <button v-if="!isStarted" @click="onStart">
      Start game
    </button>
    <span v-else>{{ timer }}</span>

    <button v-if="isStarted" @click="onStop">
      Stop game
    </button>
  </div>
  <div class="myGrid">
    <Card
      v-for="card in cards" :key="card.idx" :idx="card.idx" :img="card.img" :type="card.type"
      :active-items="selectedItem" :guessed-items="guessedItems" @on-click="handleSelect"
    />
  </div>
</template>

<style scoped>
.myGrid {
  max-width: 400px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 1rem;
}
</style>
