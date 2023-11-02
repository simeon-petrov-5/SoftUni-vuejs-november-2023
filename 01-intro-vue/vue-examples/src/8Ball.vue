<script>
export default {
    data() {
        return {
            isThinking: false,
            hasAnswer: false,
            answer: '',
            possibleAnswers: ['Yes', 'No', 'Maybe'],
        };
    },
    methods: {
        startThinking() {
            this.answer = '';
            this.hasAnswer = false;
            this.isThinking = true;
            setTimeout(() => {
                this.isThinking = false;
                this.hasAnswer = true;
                this.answer = this.possibleAnswers[1];
            }, 2000);
        },
    },
};
</script>

<template>
    <div>
        <img src="https://magic-8ball.com/wp-content/uploads/ball.png" alt="">
        <h1 v-if="isThinking">
            Thinking ...
        </h1>

        <h1 v-if="hasAnswer">
            {{ answer }}
        </h1>
        <button @click="startThinking">
            Ask me any question
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
