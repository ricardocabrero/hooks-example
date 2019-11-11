import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import 'bulma/css/bulma.css'
import  * as auxFns  from  './assets/auxfns'
import Header from './components/header'
import Form from './components/form'
import List from './components/list'

const styles = {
  messageTop: {
    position: "absolute",
    width: "100%",
    top: "4.85em",
    textTransform: 'uppercase',
    fontSize: '0.95em'
  },
  message: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    paddingTop: ".35em"
  }
}

function App({ items }) {
  const itemsToLowercase = auxFns.transformArr(items),
        initialItems = !!localStorage.getItem('items')
        ? JSON.parse(localStorage.getItem('items'))
        : itemsToLowercase,
        initialSelected = !!localStorage.getItem('selected')
        ? JSON.parse(localStorage.getItem('selected'))
        : []
  const [ itemList, setItemList ] = useState(initialItems),
        [ itemExist, setItemExist ] = useState(false),
        [ selectedItems, setSelectedItem ] = useState(initialSelected)

  const handleItems = (input) => {
    const inputTolowerCase = auxFns.lowerCase(input),
          exist = auxFns.filterIncludes(itemList, inputTolowerCase);
          if(exist){
            setItemExist(true)
            setTimeout(() => {setItemExist(false)},3000)
          }
          else{
            setItemList([...itemList, input])
            setItemExist(false)
          }
  } 

  const handleRemove = (item) => {
    const updatedList = auxFns.filterElements(itemList, item),
          updatedSelected = auxFns.filterElements(selectedItems, item)
          setItemList(updatedList)
          setSelectedItem(updatedSelected)
  }

  const handleSelected = (item) => {
    const selectedFilter = auxFns.filterIncludes(selectedItems, item),
          selectedList = auxFns.filterElements(selectedItems, item)
          return !selectedFilter 
          ? setSelectedItem([...selectedItems, item])
          : setSelectedItem([...selectedList])  
  }

  const handleClass = (item) => {
    const selected = auxFns.filterIncludes(selectedItems, item)
    return selected
    ? 'button is-danger is-light'
    : 'button is-primary is-light'
  }

  useEffect(() => {
    return (
      handleClass,
      localStorage.setItem("items", JSON.stringify(itemList)),
      localStorage.setItem("selected", JSON.stringify(selectedItems))
      )
  })
  
  return (
    <div className="App">
      <Header title={"React Shopping List"}/>
      {itemList.length !== 0 && itemList.length === selectedItems.length && 
      <p style={styles.messageTop} 
      className="has-text-info">Completed purchase!</p>}
      <Form handleInput={handleItems}/>
      {itemExist && itemList.length !== 0 &&
      <p style={styles.message}
      className="has-text-danger" >This item already exist</p>}
      {itemList.length === 0 && 
      <p style={styles.message} 
      className="has-text-info">Shopping list is empty</p>}
      <List 
      items={itemList} 
      itemForRemove={handleRemove}
      itemSelected={handleSelected}
      theClass={handleClass}
      />
    </div>
  );
}

App.propTypes = {
  items: PropTypes.array.isRequired
}

App.defaultProps = {
  items: ['Chocolate', 'Milk', 'Cereals']
}

export default App;
