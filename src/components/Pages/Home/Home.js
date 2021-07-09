import React, { useState } from 'react';
import '../Pages.css';
import * as FaIcons from 'react-icons/fa';
import { Add, Delete, Remove } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux'
// import Chip from '@material-ui/core/Chip';
import Accordian from './Accordian'


function shoot() {
  alert("Great Shot!");
}

function Home() {

  const [inputProject, setInputProject] = useState('')
  const list = useSelector(state => state.todoReducer.projectList)
  const dispatch = useDispatch();
  // console.log(list)

  return (
    <div className='home'>

      <div className='home-search'>
        <input value={inputProject} onChange={(e) => setInputProject(e.target.value)} type="text" placeholder="New Project..." className='home-ip-search' />
        <button type="submit" className='home-btn-grad' onClick={() => dispatch(Add(inputProject),alert('Your Project is added successfully check "Recent Project"'), setInputProject(''))}>+New</button>
        
      </div>

      

      <div className='box'>
      <Accordian />
        {/* {
          list.map((list) => {
            return (


              <div className='project-list'>


                <div className='project-name'>
                  <button type="submit" className='project-btn-grad'>
                    <div className='bar'><FaIcons.FaTasks className='ba' /></div>
                    <div className='cross'><FaIcons.FaRegTimesCircle className='cr' onClick={() => dispatch(Delete(list.id))} /></div>
                  </button>
                  <h6>{list.data}</h6>
                </div>
                <Chip  onDelete={() => dispatch(Delete(list.id))} />

                <button type="submit" className='project-btn-grad' onClick={() => dispatch(Delete(list.id))}><FaIcons.FaRegTimesCircle /></button>

              </div>
            )
          }
          )
        } */}

        {/* <button type="submit" className='project-btn-grad' onClick={() => dispatch(Remove())}><FaIcons.FaTrash /></button> */}

      </div>




    </div>
  );
}

export default Home;
