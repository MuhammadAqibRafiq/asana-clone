import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Add, Delete, Remove } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {

    const [inputProject, setInputProject] = useState('')
  const list = useSelector(state => state.todoReducer.projectList)
  const dispatch = useDispatch();

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
     
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Recent Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {
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

              </div>
            )
          }

          )
        }
       <div className='project-name'>
        <button type="submit" className='delete-btn-grad' onClick={() => dispatch(Remove())}><FaIcons.FaTrash /></button>
        <h6>Delete All</h6>
        
        </div>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

