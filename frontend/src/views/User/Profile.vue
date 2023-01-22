<template>
<div class="flex justify-center gap-12 -mt-8">
<div class="relative break-words bg-white mb-6 rounded-3xl mt-20 w-1/3 h-fit">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
            </div>
            <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">20</span>
                        <span class="text-sm text-slate-400">Course</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">5</span>
                        <span class="text-sm text-slate-400">Collection</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col">
    <Block key="2" data-index="2" data-direct="vertical" class="recommendClassWrap rounded-3xl moreGrayBG p-4 mt-8 w-fit pb-8" title="CLASS CREATED BY Mike Thompson" explain="We base on your recent learning and bookmark">
        <div class="grid grid-cols-2 gap-4 pt-5 h-52 pr-2 overflow-y-scroll">
            <CollectionFolder></CollectionFolder>
            <CollectionFolder></CollectionFolder>
            <CollectionFolder></CollectionFolder>
            <CollectionFolder></CollectionFolder>
        </div>
    </Block>

    <Block key="1" data-index="1" data-direct="vertical" class="recommendCourseWrap rounded-3xl moreGrayBG p-4 mt-4 w-fit h-fit pb-8" title="MAY BE YOU WILL LIKE THIS" explain="We base on your recent learning and bookmark">
        <div class="grid grid-cols-2 gap-4 pt-5 h-36 pr-2 overflow-y-scroll">
          <CourseFolder showStar="true"></CourseFolder>
          <CourseFolder showStar="true"></CourseFolder>
          <CourseFolder showStar="true"></CourseFolder>
          <CourseFolder showStar="true"></CourseFolder>
          <CourseFolder showStar="true"></CourseFolder>
          <CourseFolder showStar="true"></CourseFolder>
        </div>
    </Block>
</div>
</div>



</template>

<script>
import Block from '../../components/block/Block.vue';
import CollectionFolder from '../../components/folder/CollectionFolder.vue';
import CourseFolder from '../../components/folder/CourseFolder.vue';


export default {
    components: { Block, CollectionFolder, CourseFolder }
}

</script>