<template>
    <div v-if="(result/total) >= 0.5" class="bg-white py-8 px-16 flex flex-col justify-center items-center rounded-md gap-4">
            <p class="text-gray-700 text-lg font-bold">You did a great job!</p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
            <rect x="142.853" y="486.511" style="fill:#56361D;" width="225.654" height="24.763"/>
            <path style="fill:#CCA400;" d="M223.069,256.172v50.773l0,0c8.126,0,14.712,6.587,14.712,14.712v96.74h36.49v-96.74  c0-8.126,6.587-14.712,14.712-14.712l0,0v-50.773H223.069z"/>
            <rect x="223.064" y="251.211" style="opacity:0.16;fill:#664400;enable-background:new    ;" width="65.919" height="40.689"/>
            <path style="fill:#EEBF00;" d="M274.378,271.341h-36.756c-50.613,0-91.644-41.03-91.644-91.644V0h220.043v179.697  C366.022,230.311,324.991,271.341,274.378,271.341z"/>
            <g>
                <path style="fill:#664400;" d="M334.827,463.284H177.483V430.71c0-6.801,5.513-12.314,12.314-12.314h132.715   c6.801,0,12.314,5.513,12.314,12.314v32.574H334.827z"/>
                <rect x="142.853" y="452.842" style="fill:#664400;" width="225.779" height="58.726"/>
            </g>
            <g>
                <path style="fill:#56361D;" d="M310.42,430.732l0.109,22.353l24.403-0.046l-0.109-22.307c-0.013-6.801-5.536-12.305-12.338-12.291   l-23.489,0.044C305.369,418.942,310.408,424.239,310.42,430.732z"/>
                <polygon style="fill:#56361D;" points="368.616,452.85 344.213,452.896 344.324,511.573 142.951,511.954 142.951,512    368.727,511.573  "/>
            </g>
            <g>
                <path style="fill:#EEBF00;" d="M99.268,40.707c-35.955,0-65.102,29.147-65.102,65.102s29.147,65.102,65.102,65.102h46.71V40.707   H99.268z M120.57,137.625H97.327c-17.89,0-32.393-14.502-32.393-32.393S79.437,72.84,97.327,72.84h23.242v64.785H120.57z"/>
                <path style="fill:#EEBF00;" d="M412.732,40.707h-46.71v130.203h46.71c35.955,0,65.102-29.147,65.102-65.102   S448.687,40.707,412.732,40.707z M414.672,138.778H391.43V73.993h23.242c17.89,0,32.393,14.502,32.393,32.393   S432.562,138.778,414.672,138.778z"/>
            </g>
            <rect x="145.974" y="75.284" style="fill:#CCA400;" width="219.828" height="77.612"/>
            <path style="fill:#FFEB99;" d="M189.004,184.953c-4.324,0-7.83-3.506-7.83-7.83V27.75c0-4.324,3.506-7.83,7.83-7.83  s7.83,3.506,7.83,7.83v149.373C196.835,181.447,193.329,184.953,189.004,184.953z"/>
            <g>
                <rect x="366.022" y="40.707" style="opacity:0.16;fill:#664400;enable-background:new    ;" width="14.996" height="129.113"/>
                <rect x="130.982" y="40.667" style="opacity:0.16;fill:#664400;enable-background:new    ;" width="14.996" height="129.113"/>
                <path style="opacity:0.31;fill:#664400;enable-background:new    ;" d="M335.941,0v157.465c0,50.613-41.03,91.644-91.644,91.644   h-36.756c-13.653,0-26.606-2.99-38.246-8.344c16.782,18.763,41.172,30.576,68.326,30.576h36.756   c50.613,0,91.644-41.03,91.644-91.644V0H335.941z"/>
            </g>
            <rect x="177.483" y="439.03" style="fill:#56361D;" width="136.025" height="14.046"/>
            </svg>
            <p class="font-black text-2xl text-green-500">
                {{ result }}/<span class="pb-2 font-semibold text-lg text-gray-600">{{ total }}</span> 
            </p>
    </div>
    <div v-else class="bg-white py-8 px-16 flex flex-col justify-center items-center rounded-md gap-4">
            <p class="text-gray-700 text-lg font-bold">Let try that again!</p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse fill="#664500" cx="11.5" cy="16.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24.5" cy="16.5" rx="2.5" ry="3.5"/><path fill="#664500" d="M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379a.496.496 0 0 0 .232.544a.51.51 0 0 0 .596-.06c.009-.007 1.013-.863 4.657-.863c3.59 0 4.617.83 4.656.863a.496.496 0 0 0 .59.073a.5.5 0 0 0 .239-.557z"/><path fill="#5DADEC" d="M10 30c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10z"/><path fill="#664500" d="M30 13c-5.554 0-7.802-4.367-7.895-4.553a1 1 0 0 1 1.787-.899C23.967 7.694 25.713 11 30 11a1 1 0 1 1 0 2zM6 13a1 1 0 0 1 0-2c5.083 0 5.996-3.12 6.033-3.253c.145-.528.69-.848 1.219-.709c.53.139.851.673.718 1.205C13.921 8.437 12.704 13 6 13z"/></svg>
            <p class="font-black text-2xl text-red-500">
                {{ result }}/<span class="pb-2 font-semibold text-lg text-gray-600">{{ total }}</span> 
            </p>
    </div>
</template>

<script>

export default {
    props: {
        result: {
            default: 0
        },
        total: {
            default: 1
        }
    }
}

</script>