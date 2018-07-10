import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getList
} from '../../modules/counter'

// const Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Count: {props.count}</p>

//     <p>
//       <button onClick={props.increment} disabled={props.isIncrementing}>
//         Increment
//       </button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
//         Increment Async
//       </button>
//     </p>

//     <p>
//       <button onClick={props.decrement} disabled={props.isDecrementing}>
//         Decrement
//       </button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
//         Decrement Async
//       </button>
//     </p>

//     <p>
//       <button onClick={() => props.changePage()}>
//         Go to about page via redux
//       </button>
//       <button onClick={() => props.changePage()}>
//         Get List
//       </button>
//     </p>
//   </div>
// )

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  getList () {
    const { getList } = this.props
    getList ();
  }

  render () {
    const { list } = this.props;
    return (
      <div>
        <button onClick={() => this.getList()}>
          Get List
        </button>
        <ul>
          {list.length>0 ? list.map((data,i)=>
          <li key={i}>{data.title}</li>
          ): null}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  list: state.counter.carList
})


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getList
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
