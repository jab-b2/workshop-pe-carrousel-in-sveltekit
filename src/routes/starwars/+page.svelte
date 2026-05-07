<script>
  
  const { data } = $props()
  
  const characters = data.swCharactersData.results
</script>

<main>
 
 <h1>Hello World</h1>

 

 <ul>
    {#each characters as character}
    <li>{character.name}</li>
    {/each}
 </ul>
</main>

<style>
  :global(body){
    background-color:rgb(75,169,188);
    color: #fff;
    padding:2rem;
  }

  main{
    border: 20px solid pink;
  }
  ul{
    list-style:none;
  }

</style>