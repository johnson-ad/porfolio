import React from 'react'
import { VerticalTimeLine, VerticalTimeLineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeLine lineColor ="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element--education" date="2018 - 2019"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            NIIT High School, DAKAR 
          </h3>
          <p>Hign School Diploma</p>

        </VerticalTimeLineElement>
      </VerticalTimeLine>
      <VerticalTimeLine lineColor ="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element--education" date="2020 - 2021"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ISI High School, DAKAR  
          </h3>
          <p>Hign School Diploma</p>

        </VerticalTimeLineElement>
      </VerticalTimeLine>
      <VerticalTimeLine lineColor ="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element--education" date="2020 - 2021"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ISI High School, DAKAR  
          </h3>
          <p>Hign School Diploma</p>

        </VerticalTimeLineElement>
      </VerticalTimeLine>
      <VerticalTimeLine lineColor ="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element--education" date="2018 - 2019"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Developer Web Junoir , Digitalis , Dakar
          </h3>
          <p>Helped the team lauch 2 major features by working both in the front end back end.</p>

        </VerticalTimeLineElement>
      </VerticalTimeLine>  
    </div>
  )
}

export default Experience