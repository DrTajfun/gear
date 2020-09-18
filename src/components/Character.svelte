
<script>
export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch('https://swgoh.gg/api/characters/1', {mode: 'no-cors',  dataType:'json'});
		const article = await res.json();
        console.log(article);
		return { article };
}

export let article;
</script>





{#await article}

    <p>...waiting</p>
{:then todo}
  
    
    <p>{article}</p>
    
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


