import React, { useState, useEffect } from 'react'

export default function ListExtender(props) {
  const [listContents, setListContents] = useState([])
  useEffect(() => {
    setListContents(props.listContents)
  }, [])

  const updateItem = (item, event) => {
    console.log('item', item, 'event', event)
  }

  const toInput = (item) => {
    const newListContents = [...listContents]
    if (item.type !== 'input') {
      const input = <input type='text' value={item} onChange={(event) => updateItem(item, event)} />
      newListContents[listContents.indexOf(item)] = input
    }
    setListContents(newListContents)
  }

  const toItem = (item) => {
    const newListContents = [...listContents]
    if (item.type === 'input') {
      newListContents[listContents.indexOf(item)] = item.props.value
    }
    setListContents(newListContents)
  }

  return (
    <ul>
      {
        listContents.map(item => (
          <li
            draggable
            onDoubleClick={() => toInput(item)}
            onBlur={() => toItem(item)}
          >
              {item}
          </li>
        ))
      }
    </ul>
  )
}

