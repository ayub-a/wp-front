import cl from './LoaderTopicList.module.css'

export const LoaderTopicList = () => {
  return (
    <>
      {new Array(17).fill('Do Magic..').map((_, i) => (
        <div key={i} className={cl.preloader_item}>
          <div className={cl.topic_item}>Do Magic..</div>
        </div>
      ))}
    </>
  )
}
