import React, { useState, useEffect } from 'react'

export default function ListExtender (props) {
  const [listContents, setListContents] = useState([])
  const [focusEl, setFocusEl] = useState(null)
  useEffect(() => {
    setListContents(props.listContents)
  }, [props.listContents])
  useEffect(() => {
    if (focusEl) {
      focusEl.focus()
    }
  }, [focusEl])

  const updateItem = (index, event) => {
    const newListContents = [...listContents]
    newListContents[index] = <input type='text' value={event.target.value} onChange={(event) => updateItem(index, event)} />
    setListContents(newListContents)
  }

  const toInput = (item, index) => {
    const newListContents = [...listContents]
    if (item.type !== 'input') {
      const input = <input type='text' value={item} onChange={(event) => updateItem(index, event)} ref={(input) => setFocusEl(input)} />
      newListContents[index] = input
    }
    setListContents(newListContents)
  }

  const toItem = (item, index) => {
    const newListContents = [...listContents]
    if (item.type === 'input') {
      newListContents[index] = item.props.value
    }
    setListContents(newListContents)
    setFocusEl(null)
  }

  return (
    <ul>
      {
        listContents.map((item, index) => (
          <li
            key={index}
            draggable
            onDoubleClick={() => toInput(item, index)}
            onBlur={() => toItem(item, index)}
          >
            {item}
          </li>
        ))
      }
    </ul>
  )
}
