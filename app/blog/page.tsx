import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    
    <div>This is blog page

        <ul>
           <li> <Link href="/blog/myblogforindia">Blog 1</Link></li> 
           <li> <Link href="/blog/bdpage2">Blog 2</Link></li> 
           <li> <Link href="/blog/bdpage3">Blog 3</Link></li> 
           <li> <Link href="/blog/bdpage4">Bloig 4</Link></li> 
        </ul>
    </div>
  )
}

export default Page