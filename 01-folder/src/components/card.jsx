import React from "react";
import { ChartLine } from 'lucide-react';
import { Globe } from 'lucide-react';

export default function Card({category, title, location, jobType, date, company, leftIcon,CenterIcon, imageSrc}) {
  return (
    <article className="card"> 

    
      <div className="top">
        <div className="icon">
          {leftIcon ?<ChartLine size={18}/>:null}
          <span className="category-text">{category}</span>
        </div>
      </div>

      <div className="center">
        <h3 className="job-title">{title}</h3>
        <div className="centericon" style={{display:"flex", alignItems:"center", gap:8}}>
          {CenterIcon ?  <Globe size={12} />:null}
          <span className="location-text">{location}</span> 
          <span className="dot">.</span>
          <span className="job-type">{jobType}</span>
          </div>
      </div>

      <div className="bottom" style={{display:"flex", justifyContent:"space-between",
        alignItems:"center", marginTop:"auto"}}>
          <div>
            <span className="date">{date}</span>
            <h3 className="company" style={{fontWeight: 600, marginTop: 6}}>{company}</h3>
          </div>
          <div>
            <img src={imageSrc} alt="job-card-icon" style={{ width: "56px", height: "56px", borderRadius: "12px", objectFit:"cover", boxShadow: "0 6px 18px rgba(16,24,40,0.06)"}}/>
          </div>

      </div>
    
    </article>
  )}    