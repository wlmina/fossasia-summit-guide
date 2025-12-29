<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  links: Array
})
</script>

<template>
  <div class="food-card">
    <img :src="image" :alt="title" class="food-img" />
    <div class="food-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li v-for="(link, i) in links" :key="i">
          <a :href="link.url" target="_blank" rel="noopener">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
