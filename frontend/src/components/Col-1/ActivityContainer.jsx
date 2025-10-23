import ActivityCard from "./ActivityCard";
import changeplusplusLogo from "../../assets/activity/changeplusplus-logo.jpeg";
import wallacelabLogo from "../../assets/activity/wallace-lab-logo.jpg";
import vuceptLogo from "../../assets/activity/vucept-logo.jpg";
import vucsLogo from "../../assets/activity/vucs-logo.png";
import lexmedLogo from "../../assets/activity/lexmed-logo.jpg";
import wondryLogo from "../../assets/activity/wondry-logo.png";
import proteligenceLogo from "../../assets/activity/proteligence-logo.png";
import wflogo from "../../assets/activity/wf-logo.png";

export default function ActivityContainer() {
  return (
    <div>
      <ActivityCard
        img={vucsLogo}
        position={"CS2201 Teaching Assistant"}
        organization={"Vanderbilt CS Department"}
        startDate={"Aug. 2025"}
        endDate={"present"}
        location={"Nashville, TN"}
        description={
          "TA for Vanderbilt's Data Structures and Algorithms course."
        }
      />
      <ActivityCard
        img={proteligenceLogo}
        position={"Software Development Intern"}
        organization={"Proteligence"}
        startDate={"May 2025"}
        endDate={"present"}
        location={"Columbia, SC"}
        description={
          "Software development intern at Proteligence, a Blue Cross and Blue Shield solutions provider."
        }
      />
      <ActivityCard
        img={changeplusplusLogo}
        position={"Developer"}
        organization={"Change Plus Plus"}
        startDate={"Sept. 2024"}
        endDate={"present"}
        location={"Nashville, TN"}
        description={
          "Currently working with nonprofit Miracle Flights to implement and refine user-facing features utilizing modern technologies like React, Airtable, and Typescript."
        }
      />
      <ActivityCard
        img={wallacelabLogo}
        position={"Research Assistant"}
        organization={"Wallace Lab: Brain-Inspired AI"}
        startDate={"Aug. 2024"}
        endDate={"Aug. 2025"}
        location={"Nashville, TN"}
        description={
          "In the Wallace Lab, I conducted comparative research on language evolution in large language models and humans, analyzing developmental linguistics across different ages and sensory modalities through the use of representational similarity analysis and participant-based study."
        }
      />
      <ActivityCard
        img={vucsLogo}
        position={"Social Media Assistant"}
        organization={"Vanderbilt CS Department"}
        startDate={"Aug. 2024"}
        endDate={"present"}
        location={"Nashville, TN"}
        description={
          "I personally oversee the social media accounts for Vanderbilt’s computer science department, which totals over 1000 followers."
        }
      />
      <ActivityCard
        img={vuceptLogo}
        position={"Student VUceptor"}
        organization={"Vanderbilt VUcept"}
        startDate={"Mar. 2024"}
        endDate={"Oct. 2024"}
        location={"Nashville, TN"}
        description={
          "As a VUceptor, I am the first point of contact for many first-year students when it comes to resources and information about Vanderbilt during this period of adapting to college life."
        }
      />
      <ActivityCard
        img={wondryLogo}
        position={"Social Innovation Intern"}
        organization={"Wond'ry Social Innovation"}
        startDate={"Jan. 2024"}
        endDate={"May 2024"}
        location={"Nashville, TN"}
        description={
          "I participated in a 10-week innovation program at Wond’ry where I worked closely with a team of 5 to develop deliverables for a standardized case management pipeline by conducting interviews with medical professionals and working closely with stakeholders to gather requirements and design effective workflows."
        }
      />
      <div className="pb-2">
        <ActivityCard
          img={lexmedLogo}
          position={"Student Intern"}
          organization={"Lexington Medical Center"}
          startDate={"Jun. 2021"}
          endDate={"July 2021"}
          location={"Columbia, SC"}
          description={
            "I participated in a medical shadowing internship program where I directly coordinated with and assisted medical professionals in the emergency department and the pulmonary and critical care departments at Lexington Medical Center, learning how to triage, assess, and document patients effectively. "
          }
        />
      </div>
    </div>
  );
}
