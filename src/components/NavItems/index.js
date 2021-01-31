import React from 'react'
import { ListItems, ListWrapper, PageLink } from './styles'
import MenuItems from './MenuItems'

export default function NavItems() {
  return (
    <ListWrapper>
      {MenuItems.map(item => {
        return (
          <ListItems>
            <PageLink to={item.url}>{item.title}</PageLink>
          </ListItems>
        )
      })}
    </ListWrapper>
  )
}
