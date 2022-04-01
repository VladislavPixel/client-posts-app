import PostsLayot from "../../layots/postsLayot"
import Search from "../../components/common/search"
import PostCard from "../../components/ui/postCard"

const PostsPage = ({ posts }) => {
   return (
      <PostsLayot>
         <div className="container-content__posts posts">
            <div className="posts__container _container">
               <h1 className="posts__title title">Посты</h1>
               <Search classesParent="posts" />
               <div className="posts__list">
                  {posts.map(post => <PostCard key={post.ID} {...post} />)}
               </div>
            </div>
         </div>
      </PostsLayot>
   )
}

export async function getStaticProps() {
	const responcePosts = await fetch(process.env.API_URL + "posts")
	const jsonPosts = await responcePosts.json()
	return {
		props: { posts: jsonPosts },
	}
}

export default PostsPage