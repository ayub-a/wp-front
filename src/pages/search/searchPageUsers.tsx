import { FC, useEffect } from 'react'
import { UserList } from '../../components'
import { useAppDispatch } from '../../hooks/store'
import { fetchUsersBySearch } from '../../store/thunk/search'
import { IUser } from '../../types/user'
import cl from './SearchPage.module.css'

interface SearchPageUsersProps {
  users: IUser[]
  searchQuery: string
  newSearchQuery: string
  isLoading: boolean
  page: number
}

const SearchPageUsers: FC<SearchPageUsersProps> = ({
  users,
  searchQuery,
  newSearchQuery,
  isLoading,
  page,
}) => {
  const dispatch = useAppDispatch()

  const getUsers = (page: number = 1) => {
    dispatch(fetchUsersBySearch({ query: newSearchQuery, page }))
  }

  const loadMore = () => getUsers(page + 1)

  useEffect(() => {
    if (users.length === 0 || searchQuery !== newSearchQuery) getUsers(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchQuery])

  return (
    <div className={cl.user_list}>
      <UserList users={users} isLoading={isLoading} loadMore={loadMore} />
    </div>
  )
}

export default SearchPageUsers
