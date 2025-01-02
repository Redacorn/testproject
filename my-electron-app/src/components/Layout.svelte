<script>
    // 나중에 필요한 컴포넌트 불러오기
    // import Header from './Header.svelte';
    // import FolderDropZone from './FolderDropZone.svelte';
    // import Sidebar from './Sidebar.svelte';
    // import StatusBar from './StatusBar.svelte';
</script>

<div class="flex flex-col h-screen bg-gradient-to-br from-custom-blue to-custom-purple">
  <!-- 상단 헤더 -->
  <header class="bg-gray-800 text-white p-4">
    <h1 class="text-2xl">My App</h1>
    <p class="text-sm">Organize and manage your files</p>
  </header>

  <!-- 중앙 및 사이드 레이아웃 -->
  <main class="flex flex-grow">
    <!-- 드래그 앤 드롭 영역 -->
    <section class="flex-grow flex items-center justify-center bg-gray-100">
      <!-- Placeholder: 나중에 FolderDropZone 컴포넌트로 교체 -->
      <div class="border-2 border-dashed border-gray-400 w-3/4 h-3/4 flex items-center justify-center">
        <p class="text-gray-500">Drop Folder Here</p>
      </div>
    </section>

    <!-- 우측 사이드바 -->
    <aside class="w-1/4 bg-gray-200 p-4">
      <!-- Placeholder: 나중에 Sidebar 컴포넌트로 교체 -->
      <button class="block w-full bg-blue-500 text-white py-2 px-4 mb-2 rounded">Generate File Hash</button>
      <button class="block w-full bg-green-500 text-white py-2 px-4 mb-2 rounded">Compare Hashes</button>
      <button class="block w-full bg-gray-500 text-white py-2 px-4 rounded">About</button>
    </aside>
  </main>

  <!-- 하단 상태 표시 바 -->
  <footer class="bg-gray-800 text-white p-2 text-center">
    <p class="text-sm">Ready</p>
  </footer>
</div>

<style>
  /* 필요하면 추가 스타일 정의 */
</style>
