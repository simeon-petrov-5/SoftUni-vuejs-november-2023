<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import CardComposition from './components/CardComposition.vue';
import defaultCards from './mocks/cardsArray';
import { shuffle } from './utils/shuffle';
import { formatTime } from './utils/time';

let interval = null;
const def_timer = ref(60000);
const timer = ref(0);
const selectedItem = ref([]);
const guessedItems = ref([]);
const game = reactive({
  isStarted: false,
  hasWon: false,
  hasLost: false,
});

// Game states
function onStart() {
  game.isStarted = true;
  game.hasWon = false;
  game.hasLost = false;
  startGameTimer();
}
function onStop() {
  game.isStarted = false;
  guessedItems.value = [];
  selectedItem.value = [];
  clearInterval(interval);
}
function handleLostGame() {
  game.hasLost = true;
  onStop();
}
function startGameTimer() {
  let seconds = def_timer.value;
  timer.value = seconds;
  interval = setInterval(() => {
    seconds -= 1000;
    timer.value = seconds;
    if (seconds === 0) {
      handleLostGame();
    }
  }, 1000);
}

// Cards to play
const cards = computed(() => {
  if (game.isStarted) {
    return shuffle(defaultCards);
  }
  return defaultCards;
});

// Handle selection
function handleSelect(idx, type) {
  if (!game.isStarted)
    return;

  if (selectedItem.value.length < 2)
    selectedItem.value.push({ idx, type });

  else if (selectedItem.value.length === 2)
    selectedItem.value = [{ idx, type }];
}

watch(selectedItem, (newVal) => {
  if (newVal.length === 2 && (newVal[0].type === newVal[1].type))
    guessedItems.value.push(newVal[0].type);
}, { deep: true });

watch(guessedItems, (newVal) => {
  if (cards.value.length / 2 === newVal.length) {
    game.hasWon = true;
    onStop();
  }
}, { deep: true });

onMounted(() => {
  console.log('App was mounted');
});
</script>

<template>
  <div class="container">
    <template v-if="game.isStarted">
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

  <p v-if="game.hasWon" class="container">
    ✨ OH YES, you have won! ✨
  </p>

  <p v-if="game.hasLost" class="container">
    😥 OO NO, you have lost! 😥
  </p>

  <div class="container myGrid">
    <CardComposition
      v-for="card in cards"
      :key="card.idx"
      :card="card"
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
