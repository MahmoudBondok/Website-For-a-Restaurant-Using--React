import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Category from './components/Category'
import ItemsList from './components/ItemsList'
import { items } from './data'

function App() {
  const [ItemData, setItemData] = useState(items);

  // Filter By Category
  const FilterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemData(items)
    } else {
      const NewArr = items.filter((item) => item.category === cat)
      setItemData(NewArr)
    }
  }
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category FilterByCategory={FilterByCategory} />
        <ItemsList ItemData={ItemData} />
      </Container>
    </div>
  );
}

export default App;