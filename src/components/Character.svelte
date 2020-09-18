
<script context="module">
export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch('https://swgoh.gg/api/characters/1', {mode: 'no-cors',  dataType:'jsonp'});
		const article = await res.json();
        console.log(article);
		return { article };
}
</script>

<script>
export let article;
</script>





{#await article}

    <p>...waiting</p>
{:then todo}
  
    
    <p>{article}</p>
    
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


