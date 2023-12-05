<script>
import Card from './components/Card.vue';

let interval = null;

function shuffle(initialArr) {
  const array = structuredClone(initialArr);
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const defaultCards = [
  { idx: 1, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { idx: 2, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
  { idx: 3, type: 'Vue', img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { idx: 4, type: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
  { idx: 5, type: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
  { idx: 6, type: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
  { idx: 7, type: 'Vite', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png' },
  { idx: 8, type: 'Vite', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png' },
];

export default {
  components: {
    Card,
  },
  data() {
    return {
      def_timer: 60000,
      isStarted: false,
      timer: 0,
      selectedItem: [],
      guessedItems: [],
      hasWon: false,
      hasLost: false,
    };
  },
  computed: {
    cards() {
      if (this.isStarted) {
        return shuffle(defaultCards);
      }
      return defaultCards;
    },
  },
  watch: {
    selectedItem: {
      handler(newVal) {
        if (newVal.length === 2 && (newVal[0].type === newVal[1].type))
          this.guessedItems.push(newVal[0].type);
      },
      deep: true,
    },
    guessedItems: {
      handler(newVal) {
        if (this.cards.length / 2 === newVal.length) {
          this.hasWon = true;
          this.onStop();
        }
      },
      deep: true,
    },
  },
  methods: {
    formatTime(seconds) {
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
    },
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
      this.hasWon = false;
      this.hasLost = false;
      this.startGameTimer();
    },
    onStop() {
      this.isStarted = false;
      this.guessedItems = [];
      this.selectedItem = [];
      clearInterval(interval);
    },
    handleLostGame() {
      this.hasLost = true;
      this.onStop();
    },
    startGameTimer() {
      let seconds = this.def_timer;
      this.timer = seconds;
      interval = setInterval(() => {
        seconds -= 1000;
        this.timer = seconds;
        if (seconds === 0) {
          this.handleLostGame();
        }
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="container">
    <template v-if="isStarted">
      <button @click="onStop">
        Stop game
      </button>
      <span>{{ formatTime(timer) }}</span>
      <progress :value="`${timer}`" :max="`${def_timer}`" />
    </template>

    <button v-else @click="onStart">
      Start game
    </button>
  </div>

  <p v-if="hasWon" class="container">
    ✨ OH YES, you have won! ✨
  </p>

  <p v-if="hasLost" class="container">
    😥 OO NO, you have lost! 😥
  </p>

  <div class="container myGrid">
    <Card
      v-for="card in cards"
      :key="card.idx"
      :idx="card.idx"
      :img="card.img"
      :type="card.type"
      :active-items="selectedItem"
      :guessed-items="guessedItems"
      @on-click="handleSelect"
    />
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 2rem auto;
}

.myGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 1rem;
}
</style>
