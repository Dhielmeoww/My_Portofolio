<template id="postingan">
<div>
    <h1>Postingan</h1>
    <div>
        <a v-for="post in posts" href="#">{{ post }}</a>
    <span>
        <button class="bg-blue-500 w-[10px] h-[10px]">
            <span></span>
        </button>
        <button class="bg-orange-500 w-[10px] h-[10px]">
            <span></span>
        </button>
    </span>
    </div>
</div>
</template>

