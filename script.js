var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","col-sm-4");

container.append(row);

 
  async function fetchJobs() {
    try {
      const response = await fetch('https://www.arbeitnow.com/api/job-board-api');
      const data = await response.json();
      console.log(data);
    //   data.data.forEach(job => console.log(job.company_name));
    console.log(data.data);
    
    data.data.forEach((job) => {

        row.innerHTML+=`
        <div class="col-sm-4">
        <div class="card border-primary mb-3 >
    <h2 class="company">Company: ${job.company_name}</h2>
    <p class="jobtype">Field: ${job.tags[0]}</p>
    <p class="jobtitle">Job Title: ${job.title}</p>
    <p class="joblocation">Location: ${job.location}</p>
    <button class="apply">Apply Now</button>
    
    
  </div>
</div>

`;
document.body.append(container);
        
    });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchJobs();
