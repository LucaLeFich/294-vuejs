<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'cat adoption day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'january 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee',
  },
  {
    id: 4582797,
    category: 'food',
    title: 'community gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora city',
    date: 'march 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin',
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'recycling workshop',
    description: 'Learn how to properly recycle and reduce waste.',
    location: 'Green Ville',
    date: 'april 22, 2022',
    time: '14:00',
    petsAllowed: false,
    organizer: 'Carey Wales',
  },
])
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
