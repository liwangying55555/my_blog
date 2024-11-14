<template>
  <a
    class="vp-repo-link"
    href="https://www.travellings.cn/go.html"
    rel="noopener noreferrer"
    target="_blank"
    aria-label="开往"
    data-balloon-pos="down"
  >
    <img
      class="train_svg"
      src="/assets/svg/train.svg"
      alt=""
    />
    <!-- <font-icon icon="bus"></font-icon> -->
  </a>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const addBusuanzi = () => {
  const script = window.document.createElement('script')
  script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  window.document.head.appendChild(script)
}
onMounted(() => {
  addBusuanzi()
})

</script>

<style scoped>
.vp-repo-link {
  width: 24px;
  .train_svg {
    margin-top: 2px;
    width: 100%;
  }
}
</style>
