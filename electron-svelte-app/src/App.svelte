<script>
  import Header from './components/Header.svelte';
  import FolderDropZone from './components/FolderDropZone.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="flex flex-col h-screen bg-gray-800 text-white">
  <h1 class="text-4xl">Hello, Electron + Svelte</h1>
  <Header />
  <main class="flex-grow">
    <FolderDropZone />
  </main>
  <Footer />
</div>

