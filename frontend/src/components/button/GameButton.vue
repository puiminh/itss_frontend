<template>
    <span class='start-btn select-none'>
        <slot></slot>
    </span>
</template>

<script>

export default {
    props: {
    }
}

</script>

<style scoped>

.start-btn{
    text-align: center;
	display: inline-block;
	margin:5px;
    padding: 10px 10px 10px 10px ;
    background-color: white;
    color: rgb(21, 15, 15);
    -webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	-o-border-radius: 7px;
	border-radius: 7px;
    box-shadow: 0 .2em gray; 
    cursor: pointer;

}
.video-game-button:active, .start-btn:active {
	box-shadow: none;
	position: relative;
	top: .2em;
}
</style>