<template>
  <div>
    <p>{{ $route.params.group }} - {{ $route.params.service }}</p>
  </div>
</template>

<script setup>
  useMeta({
    title: 'Service page'
  });
  
  definePageMeta({
    layout: "default",
  });
  </script>