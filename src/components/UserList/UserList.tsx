import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/user'
import { LoaderSearchPageUsers } from '../UI/Loaders/Pages/Search/Users/SearchPageUsersLoader'
import cl from './UserList.module.css'
import UserPreviewPhotos from './UserPreviewPhotos'
import { useDisableScroll } from '../../hooks/useDisableScroll'

interface IUserListProps {
  users: IUser[]
  isLoading?: boolean
  loadMore?: () => void
}

export const UserList: FC<IUserListProps> = ({ users, loadMore, isLoading }) => {
  useDisableScroll('body', isLoading)

  return (
    <div className={cl.wrapper}>
      <ul className={cl.user_list}>
        {users.length === 0 ? (
          <LoaderSearchPageUsers />
        ) : (
          <>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={''} className={cl.user_item}>
                  <div className={cl.about_user}>
                    <div className={cl.user_img}>
                      <img src={user.profile_image.large} alt="avatar" />
                    </div>
                    <div className={cl.user_info}>
                      <h4>{user.first_name}</h4>
                      <h3>{user.username}</h3>
                    </div>
                  </div>

                  <UserPreviewPhotos userPhotos={user.photos} />
                </Link>
              </li>
            ))}

            {isLoading ? <LoaderSearchPageUsers /> : null}
          </>
        )}
      </ul>

      {loadMore && (
        <button onClick={loadMore} className={cl.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  )
}
