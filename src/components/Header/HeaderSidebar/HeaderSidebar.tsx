import { FC } from 'react'
import { isCurrPathName } from '../../../helpers/isCurrPathName'
import { SearchNav } from '../../SearchNav/SearchNav'
import { TopicList } from '../../TopicList/TopicList'

interface IHeaderSidebarProps {
  className?: string
}

const HeaderSidebar: FC<IHeaderSidebarProps> = ({ className }) => {
  return (
    <>
      {className ? (
        <div className={className}>{isCurrPathName('s') ? <SearchNav /> : <TopicList />}</div>
      ) : (
        <>{isCurrPathName('s') ? <SearchNav /> : <TopicList />}</>
      )}
    </>
  )
}

export default HeaderSidebar
