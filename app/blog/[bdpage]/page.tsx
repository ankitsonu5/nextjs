 

function Page ({params}:{params:{bdpage:string}}) {
  const {bdpage} =  params ;
 
  return (
    <div>This is blog destil page for {bdpage}</div>
  )
}

export default Page