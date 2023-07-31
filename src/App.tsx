import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Header, PhotoItem } from './components'
import { Modal } from './components/Modal/Modal'
import { useAppDispatch, useAppSelector } from './hooks/store'
import CollectionPage from './pages/collection/Collection'
import HomePage from './pages/home/HomePage'
import PhotoPage from './pages/photo/Photo'
import SearchPage from './pages/search/Search'
import TopicPage from './pages/topic/Topic'
import { fetchTopicList } from './store/thunk/topic'

function App() {
  const dispatch = useAppDispatch()
  const { topicList } = useAppSelector((state) => state.topicSlice)

  useEffect(() => {
    if (!topicList.length) dispatch(fetchTopicList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let location = useLocation()
  let previousLocation = location.state?.previousLocation

  return (
    <div className="App">
      <Header />

      <Routes location={previousLocation || location}>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/photos/:id" element={<PhotoPage />} />

        <Route path="/s">
          <Route index element={<Navigate to="/" />} />
          <Route path="photos/:searchQuery" element={<SearchPage type="PHOTOS" />} />
          <Route path="collections/:searchQuery" element={<SearchPage type="COLLECTIONS" />} />
          <Route path="users/:searchQuery" element={<SearchPage type="USERS" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route path="/t">
          <Route index element={<Navigate to="/" />} />
          <Route path=":slug" element={<TopicPage />} />
        </Route>

        <Route path="/collections">
          <Route index element={<Navigate to="/" />} />
          <Route path=":id/:collect_title" element={<CollectionPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {previousLocation && (
        <Routes>
          <Route
            path="/photos/:id"
            element={
              <Modal>
                <PhotoItem />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  )
}

export default App
