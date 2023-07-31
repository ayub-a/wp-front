import cl from './LoaderTagList.module.css'

export const LoaderTagList = ({ elQty = 3 }) => {
  return (
    <div className={cl.loader_wrap}>
      {new Array(elQty).fill('Do magic..').map((_, i) => (
        <div key={i} className={cl.loader_item}></div>
      ))}
    </div>
  )
}
