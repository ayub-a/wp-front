import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ITags } from '../../types/collection'
import { LoaderTagList } from '../UI/Loaders/TagList/TagListLoader'
import cl from './TagList.module.css'

interface ITagListProps {
  tags: ITags[]
  isLoading?: boolean
}

export const TagList: FC<ITagListProps> = ({ tags, isLoading }) => {
  const navigate = useNavigate()

  const clickHandler = (tag: any) => navigate(`/s/photos/${tag.title}`)

  return (
    <div className={cl.tags}>
      {isLoading ? (
        <LoaderTagList elQty={5} />
      ) : (
        <>
          {tags.map((tag, i) => (
            <div
              key={tag.title + i}
              onClick={(e) => {
                e.stopPropagation()
                clickHandler(tag)
              }}
              className={cl.tag_item}
            >
              {tag.title}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
