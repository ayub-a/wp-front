import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import { LoaderTopicList } from '../UI/Loaders/TopicList/TopicListLoader'
import SvgIcon from '../UI/SvgIcon/SvgIcon'
import cl from './TopicList.module.css'

export const TopicList = () => {
  const path = window.location.pathname.match(/[\w-]{1,}/g)?.[1]
  const { topicList } = useAppSelector((state) => state.topicSlice)

  const disableScroll = useDisableScroll('el', topicList.length)
  const scrollToElem = useRef<null | HTMLAnchorElement>(null)

  const [refPrev, inViewPrev] = useInView({
    threshold: 0.99,
  })

  const [refNext, inViewNext] = useInView({
    threshold: 0.99,
  })

  useEffect(() => {
    if (scrollToElem.current)
      scrollToElem.current.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToElem.current, path])

  return (
    <div className={cl.sub_header}>
      <div
        className={`${cl.topics_wrap} ${cl.left_smooth_block} ${cl.right_smooth_block} ${
          inViewPrev ? '' : cl.active_left_block
        } ${inViewNext ? '' : cl.active_right_block}`}
      >
        <ul className={cl.topics} ref={disableScroll}>
          {inViewPrev ? null : <SvgIcon icon="ARROW_LEFT" />}
          {topicList.length ? (
            topicList.map((topic, i) => (
              <li
                key={topic.id}
                className={`${cl.topic_item} ${topic.slug === path ? cl.active_topic : ''}`}
                ref={i === 0 ? refPrev : topicList.length - 1 === i ? refNext : null}
              >
                <Link to={`/t/${topic.slug}`} ref={topic.slug === path ? scrollToElem : null}>
                  {topic.title}
                </Link>
              </li>
            ))
          ) : (
            <LoaderTopicList />
          )}
          {inViewNext ? null : <SvgIcon icon="ARROW_RIGHT" />}
        </ul>
      </div>
    </div>
  )
}
