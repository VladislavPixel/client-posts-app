import PostLayot from "../../layots/postLayot"
import SmallMessage from "../../components/common/smallMessage"

const PostPage = ({ post }) => {
   const object = {}
   return (
      <PostLayot>
         <div className="container-content__post block-post">
            <div className="block-post__container _container">
               <div className="block-post__image-wrap">
                  <img className="block-post__img" src="/images/postImg.png" alt="Изображение на странице поста: человек читает книгу под деревом" />
               </div>
               {object.ID ?
                  <div className="block-post__content-post post-content">
                     <h2 className="post-content__title title">{post.Title}</h2>
                     <p className="post-content__text">{post.Description}</p>
                     <button type="button" className="post-content__btn">
                        <img className="post-content__icon-btn" src="/icons/pencilPink.svg" alt="Розовая иконка карандаша" />
                        Редактировать текст
                     </button>
                     <div className="post-content__comments block-comments">
                        <h3 className="block-comments__title">Комментарии</h3>
                     </div>
                  </div> :
                  <SmallMessage classesParent="block-post" altIcon="Иконка плачащего смайлика" iconPath="/icons/sadSmile.svg" title="Такого поста не существует" offer="Перейдите на главную сайта и выберете доступные посты или исправьте путь в адресной строке" />
               }
            </div>
         </div>
      </PostLayot>
   )
}

export async function getServerSideProps({ params }) {
   const { postId } = params
   const responcePost = await fetch(process.env.API_URL + "posts/" + postId)
   const jsonPost = await responcePost.json()
   return {
      props: { post: jsonPost},
   }
}

export default PostPage
