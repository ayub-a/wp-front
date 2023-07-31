import cl from './LoaderPhotoList.module.css'

export const LoaderPhotoList = () => {
  return (
    <>
      {new Array(6).fill('Do magic..').map((_, i) => (
        <div key={i} className={cl.skeleton}></div>
      ))}
    </>
  )
}
