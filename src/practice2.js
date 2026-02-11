export function App2 () {
  let fruits = [
    {
      Name: 'Apple',
      src: '/fruits/img1.jpg',
      price: '$12/kg',
      available: true,
      import: true,
      benefit: 'Improves digestion and supports heart health.'
    },
    {
      Name: 'Grape',
      src: '/fruits/img2.jpg',
      price: '$13/kg',
      available: true,
      import: false,
      benefit: 'Supports heart health and improves blood circulation.'
    },
    {
      Name: 'Pomegranate',
      src: '/fruits/img3.jpg',
      price: '$17/kg',
      available: false,
      import: false,
      benefit:
        'Contains powerful antioxidants that reduce inflammation and protect the heart.'
    },
    {
      Name: 'Fig',
      src: '/fruits/img4.jpg',
      price: '$18/kg',
      available: false,
      import: true,
      benefit: 'Helps digestion and is beneficial for bone health.'
    },
    {
      Name: 'Orange',
      src: '/fruits/img5.jpg',
      price: '$16/kg',
      available: true,
      import: false,
      benefit: 'Boosts the immune system and helps the body absorb iron.'
    },
    {
      Name: 'Strawberry',
      src: '/fruits/img6.jpg',
      price: '$15/kg',
      available: false,
      import: true,
      benefit:
        'Rich in vitamin C and antioxidants that support immunity and skin health.'
    }
  ]
  let randomIndex = Math.floor(Math.random() * fruits.length)
  let randomfruit = fruits[randomIndex]

  return (
    <div className='container'>
      {fruits.map(fruit => (
        <Card MyFruit={fruit} />
      ))}
      <div className='random'>
        <img src={randomfruit.src} alt={randomfruit.Name}></img>
        <h3>{randomfruit.Name}</h3>
        <p>{randomfruit.benefit}</p>
      </div>
    </div>
  )
}

function Card ({ MyFruit }) {
  return (
    <div className='card'>
      <img src={MyFruit.src} alt={MyFruit.Name}></img>
      <div className='details'>
        <h3>{MyFruit.Name}</h3>
        <h4>PRICE: {MyFruit.available ? MyFruit.price : 'SOLD OUT'}</h4>
        <h4>TYPE: {MyFruit.import ? 'Imported' : 'Domestic'}</h4>
      </div>
      <button>BUY</button>
    </div>
  )
}
