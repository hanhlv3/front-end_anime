<template>
  <div class="logo">
    <a href="#" class="g_logo">
      <img :src="require('@/assets/logo.png')" alt="logo thuong hieu" />
    </a>
  </div>

  <div class="cover">
    <div class="search-bar">
      <form action="#">
        <input type="text" name="key" id="" class="" placeholder="Search..." required />
        <button><i class="ti-search"></i></button>
      </form>
    </div>
    <div>
      <div class="icon">
        <a href="" @click.prevent="toggleDrop" class="g_nav_btn p-lg-4 p-md-3 p-sm-2" id="bu"
          ><i class="ti-menu"></i
        ></a>
        <a href="{{ route('store.index') }}" class="g_nav_btn p-lg-4 p-md-3 p-sm-2"><i class="ti-bookmark-alt"></i></a>
        <a class="g_nav_btn p-lg-4 p-md-3 p-sm-2" href="#"><i class="ti-shift-right"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NarBar',
  setup(props, context) {
    const toggleDrop = () => context.emit('toggleDrop')
    return {
      toggleDrop,
    }
  },
}
</script>
<style></style>
// eslint-disable-next-line prettier/prettier
