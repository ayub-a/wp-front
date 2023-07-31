import cl from './LoaderSearchPageUsers.module.css'

export const LoaderSearchPageUsers = () => {
  return (
    <>
      {new Array(10).fill('Do magic..').map((_, i) => (
        <li key={i} className={cl.user_item}>
          <div className={cl.about_user}>
            <div className={cl.user_img}></div>
            <div className={cl.user_info}>
              <div className={cl.user_name}></div>
              <div className={cl.user_username}></div>
            </div>
          </div>

          <div className={cl.preview_photos}>
            <div className={cl.preview_img}></div>
            <div className={cl.preview_img}></div>
            <div className={cl.preview_img}></div>
          </div>
        </li>
      ))}
    </>
  )
}
