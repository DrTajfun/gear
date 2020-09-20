<script>
	import { genericDataUrl, fetchAvatar } from '../shared.js';
	// The fetchAvatar action is used on the <img> HTMLImageElement
	//   use:fetchAvatar={ url }
	//	
  let disabled = false;
	let promise = Promise.resolve([]);
	let genericAvatar = genericDataUrl();
	
	async function fetchUsers() {
		const response = await self.fetch('https://jsonp.afeld.me/?url=https://swgoh.gg/api/characters');

		if (response.ok) {
  		return response.json();
			
		} else {
			throw new Error(users);
		}
	}

  function handleClick() {
		// Now set it to the real fetch promise 
    promise = fetchUsers();
    disabled = true;
	}
</script>

<!-- Stop hitting GitHub on every source edit -->
<button on:click={ handleClick } { disabled } >
	Load Users
</button>

{#await promise}
	<p>...waiting</p>
{:then users}
  {#each users as {name, image, pk} (pk) }
    <h3>{name}</h3>
    <img height="100" src={ 'https://swgoh.gg' + image }	alt={ name } />
  {/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}