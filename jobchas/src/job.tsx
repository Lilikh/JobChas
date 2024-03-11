import { useEffect, useState } from 'react';
import { getData } from './GetData';



const urlGeographicalArea: string =
  'https://jobsearch.api.jobtechdev.se/search?q=Flen';

// Interface ---------------------------
  interface Job {
  id: string;
  employer: {
    name: string;
  };
  headline: string;
  workplace_address: {
    city: string;
  };
  logo_url?: string; // Optional property
}


// Jobs -----------------------------------
export function Jobs(): JSX.Element {
  const [jobs, setJobs] = useState<Job[]>([]);

  
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data: any = await getData(urlGeographicalArea);
        setJobs(data.hits as Job[]);
        console.log(data.hits[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


 

  
  // Render jobs
  const renderedJobs = jobs.map((job: Job) => (
    <div key={job.id} className='job-card'>
      <div className='logo'>
        <img
          className='logo-image'
          src={job.logo_url ? job.logo_url : './src/images/JobChaser-SVG.svg '}
          alt=''
        />
      </div>
      <div className='company-info'>
        <h2>{job.employer.name}</h2>
        <p>Position: {job.headline}</p>
        <p>Location: {job.workplace_address.city}</p>
        <p>ID: {job.id}</p>

      </div>
      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag2</div>
        <div className='tag-btn'>tag3</div>
      </div>
    </div>
  ));

  return (
    <>
      <div className='card-wrapper'> {renderedJobs}</div>

    
      
    </>
  );
}
