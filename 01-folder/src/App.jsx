import React from 'react';
import Card from './components/card.jsx';
import { ChartLine } from 'lucide-react';
import { Globe } from 'lucide-react';

export default function App() {
  const sampleJob = [
    {
      category: 'Finance',
      title: 'Financial Analyst',
      location: 'Mumbai, India',
      jobType: 'Internship',
      date: '2 Days ago',
      company: 'Google',
      imageSrc:
        'https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png',
    },
    {
      category: 'Software Development',
      title: 'Frontend Developer',
      location: 'Bangalore, India',
      jobType: 'Full-time',
      date: '1 Day ago',
      company: 'Accenture',
      imageSrc:
        'https://toppng.com/uploads/preview/accenture-logo-transparent-accenture-greater-than-logo-11562971252rdqqagrmhw.png',
    },
    
      {
        category: 'Information Technology',
        title: 'Backend Developer',
        location: 'Bangalore, India',
        jobType: 'Full-time',
        date: '2 Days ago',
        company: 'Infosys',
        imageSrc:
          'https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg',
      },
      {
        category: 'Data Science',
        title: 'Full Stack Engineer',
        location: 'Noida, India',
        jobType: 'Full-time',
        date: '3 Days ago',
        company: 'Wipro',
        imageSrc:
          'https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png',
      },
      {
        category: 'Web Development',
        title: 'ReactJS Developer',
        location: 'Bangalore, India',
        jobType: 'Full-time',
        date: '1 Day ago',
        company: 'TCS',
        imageSrc:
          'https://brandlogovector.com/wp-content/uploads/2022/10/TCS-Icon-Logo.png',
      },
      {
        category: 'Cloud Computing',
        title: 'Angular Developer',
        location: 'Chennai, India',
        jobType: 'Full-time',
        date: '4 Days ago',
        company: 'Capgemini',
        imageSrc:
          'https://www.liblogo.com/img-logo/ca4474a981--logo-about-our-company-.png',
      },
      {
        category: 'Enterprise Software',
        title: 'Java Developer',
        location: 'Bangalore, India',
        jobType: 'Full-time',
        date: '2 Days ago',
        company: 'Cognizant',
        imageSrc:
          'https://cdn.brandfetch.io/cognizant.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed',
      },
      {
        category: 'Artificial Intelligence',
        title: 'Python Developer',
        location: 'Hyderabad, India',
        jobType: 'Full-time',
        date: '5 Days ago',
        company: 'Mindtree',
        imageSrc:
          'https://companieslogo.com/img/orig/MINDTREE.NS-54bd2372.png?t=1604054256',
      },
      {
        category: 'Mobile Development',
        title: 'Mobile App Developer',
        location: 'Bangalore, India',
        jobType: 'Full-time',
        date: '3 Days ago',
        company: 'HCL Technologies',
        imageSrc:
          'https://vectorseek.com/wp-content/uploads/2023/04/HCL-Tech-Logo-Vector.jpg',
      },
      {
        category: 'UI/UX Design',
        title: 'UI/UX Engineer',
        location: 'Pune, India',
        jobType: 'Full-time',
        date: '1 Day ago',
        company: 'Tech Mahindra',
        imageSrc:
          'https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png',
      },
  
  ];

  return (
    <div className="parent">
      {sampleJob.map((job, idx) => (
        <Card
          key={idx}
          category={job.category}
          title={job.title}
          location={job.location}
          jobType={job.jobType}
          date={job.date}
          company={job.company}
          imageSrc={job.imageSrc}
          LeftIcon={ChartLine}
          CenterIcon={Globe}
        />
      ))}
    </div>
  );
}
