import cl from './LoaderCollectionPage.module.css'

export const LoaderCollectionPage = () => {
  return (
    <div>
      <div className={cl.collection}>
        <div className={cl.collection_bg} />

        <div className={cl.collection_about}>
          <div className={cl.collection_title}></div>
          <div className={cl.collection_user}>
            <div className={cl.user_photo} />
            <div className={cl.user_name}></div>
          </div>
        </div>
        <div className={cl.collection_total_photos}></div>
      </div>
    </div>
  )
}
