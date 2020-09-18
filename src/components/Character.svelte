
<script>
 let myTodo = getTodo();

 async function getTodo() {
   const response = await fetch("https://swgoh.gg/api/characters/1/");
   const todo = await response.json();

   if (response.ok) {
     return todo;
   } else {
       console.log(todo);
     throw new Error(todo);
   }
 }

</script>




{#await myTodo}

    <p>...waiting</p>
{:then todo}
    {@debug myTodo}
    {#each todo as td}
    <p>{td.name}</p>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


