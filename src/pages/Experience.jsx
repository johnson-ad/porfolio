import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
     
      <VerticalTimeline lineColor ="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element-education" date="2018 - 2019"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            NIIT University, DAKAR 
          </h3>
          <p>Bachelor Degree 1</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor ="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element-education" date="2020 - 2021"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ISI High School, DAKAR  
          </h3>
          <p>Bachelor Degree 2</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor ="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element-education" date="2021 - 2022"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ISI High School, DAKAR  
          </h3>
          <p>Bachelor Degree 3</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor ="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element-education" date="2021 - 2022"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Developer Web Junoir , Digitalis , Dakar
          </h3>
          <p>Helped the team lauch 2 major features by working both in the front end back end.</p>

        </VerticalTimelineElement>
      </VerticalTimeline>   
      
    </div>
  )
}

export default Experience