import cl from './LoaderTopicPage.module.css'

export const LoaderTopicPage = () => {
  return (
    <div className={`${cl.skeleton} ${cl.topic_main}`}>
      <div className={cl.topic_about}>
        <div className={cl.topic_title}></div>
        <div className={cl.topic_descr_wrap}>
          <div className={cl.topic_descr}></div>
          <div className={cl.topic_descr}></div>
          <div className={cl.topic_descr}></div>
        </div>
      </div>
    </div>
  )
}
