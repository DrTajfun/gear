
<script>




//https://swgoh.gg/api/characters/1/
let data2;

 let myTodo = getTodo();

 async function getTodo() {



  const response = await fetch('https://swgoh.gg/api/characters', {mode: 'no-cors',  dataType:'jsonp'})
  .then(function(response) {
    return response.json();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });

    console.log(await response.json());
    return await response.json()

     

    
 }

</script>




{#await myTodo}

    <p>...waiting</p>
{:then todo}
    {@debug myTodo}
    
    <p>{myTodo}</p>
    
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


