
<script>




//https://swgoh.gg/api/characters/1/
let data2;

 let myTodo = getTodo();

 async function getTodo() {

await fetch('https://swgoh.gg/api/characters/1',  {mode: 'no-cors'}).then(function(response) {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));

    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);
});


  const response = await fetch('https://swgoh.gg/api/characters', {mode: 'no-cors',  dataType:'jsonp'})
  .then(function(response) {
    return response.text();
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
    
    
    <p>{myTodo}</p>
    
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


