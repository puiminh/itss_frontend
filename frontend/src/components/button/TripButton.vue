<template>

<div class="multi-button shadow-lg">
  <RouterLink to="/user/me">
    <button class="button rounded-l-md" id="account"><span>      Account</span></button>
  </RouterLink>
  <RouterLink to="/manager">
  <button class="button" id="course"><span>      Manager</span></button>
  </RouterLink>

  <RouterLink to="bookmark">
  <button class="button rounded-r-md" id="bookmark"><span>      Bookmark</span></button>
  </RouterLink>

</div>
</template>

<style scoped>
.multi-button {
  background-color: white;
  border: 1px solid rgba(232, 232, 232, 0.8);
  border-radius: 14px;
  padding: 7px;
    place-items: center;
}

#account {
  background-color: rgb(85,131,241);
  border: 1px solid rgb(85,131,241);
  
}

#account {
  background-color: rgb(85,131,241);
  border: 1px solid rgb(85,131,241);
  
}

#course {
  background-color: rgb(39,166,75);
  border: 1px solid rgb(39,166,75);
  
}

#bookmark {
  background-color: rgb(242,185,42);
  border: 1px solid rgb(242,185,42);
  
}


.button { 
  padding: 7px 8px 7px 8px;
    font: 12px Ubuntu;
  color: white;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

#account span:after {
  font-family: FontAwesome;
  content: "\f007";
}

#course span:after {
  font-family: FontAwesome;
  content: "\f07c";
}

#bookmark span:after {
  font-family: FontAwesome;
  content: "\f02e";
}

</style>

<script>

</script>