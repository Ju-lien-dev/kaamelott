
export default async function Page() {
  let data = await fetch('https://kaamelott.chaudie.re/api/random')
  let posts = await data.json()
  console.log(posts);
  
  return (
    <>
    <ul>
        <li className="text-center font-semibold">{posts.citation.infos.personnage}</li>
        <li>{posts.citation.citation}</li>
    </ul>
    </>
  )
}
