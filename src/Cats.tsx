
import { useFetch } from "./useFetch"

export function Cats(){
  const url = 'https://cat-fact.herokuapp.com/facts'
  const {data} = useFetch(url)

  return (
    <div className="bg-gray-900/75">
      {
        data.map((cat: any) => (
          
          <div key={cat._id}>
            <div className="list-decimal">
              <p className="text-sky-400/90 font-semibold italic antialiased py-10 px-3 tracking-tighter">{cat.text}</p>
            </div>
          </div>
          
        ))
      }
    </div>
  )
}