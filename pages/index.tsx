import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard , Categories,  Postwidget, Header } from '../components'
const posts = [
  {title : "react lrea todolist" , excerpt:"learn react"},
  {title : "react vue todolist" , excerpt:"learn vue"}

]
const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
           
            <div className='lg:col-span-8 col-span-1'>
               {posts.map((post,index)  => (
                   <PostCard post={post} key={post.title}>

                   </PostCard>
                ))}
            </div>
            <div className='lg:col-span-4 col-span-1'>
                <div className='lg:sticky relatve top-8'>
                   <Postwidget/>
                   <Categories/>
                </div>
            </div>
      </div>
     
    </div>
  )
}

export default Home
