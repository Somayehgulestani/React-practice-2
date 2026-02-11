export function App () {
  let users = [
    { Id: 1, Name: 'Sara', Age: 22, job: 'Teacher', src: '/img/img1.jpg' },
    { Id: 2, Name: 'Ali', Age: 24, job: 'Doctor', src: '/img/img2.jpg' },
    { Id: 3, Name: 'Ahmad', Age: 25, job: 'Police', src: '/img/img3.jpg' },
    { Id: 4, Name: 'Karim', Age: 29, job: 'Doctor', src: '/img/img4.jpg' },
    { Id: 5, Name: 'Hamid', Age: 21, job: 'Nurse', src: '/img/img5.jpg' },
    { Id: 6, Name: 'Shila', Age: 32, job: 'Manager', src: '/img/img6.jpg' },
    { Id: 7, Name: 'yasna', Age: 30, job: 'Teacher', src: '/img/img7.jpg' },
    { Id: 8, Name: 'Farid', Age: 33, job: 'Boss', src: '/img/img8.jpg' },
    { Id: 9, Name: 'Zainab', Age: 28, job: 'Doctor', src: '/img/img9.jpg' },
    { Id: 10, Name: 'Draya', Age: 32, job: 'Nurse', src: '/img/img10.jpg' }
  ]

  return (
    <div className='container'>
      {users.map(info => (
        <Details MyData={info} />
      ))}
    </div>
  )
}

function Details ({ MyData }) {
  return (
    <div>
      <img src={MyData.src} alt={MyData.Name} />
      <h2>{MyData.Name}</h2>
      <div className='MyData'>
        <h4>
          <span>ID: {MyData.Id}</span>
        </h4>
        <h4>
          <span>Job: {MyData.job}</span>
        </h4>
        <h4>
          <span>Age: {MyData.Age}</span>
        </h4>
      </div>
    </div>
  )
}
