

function Skills() {
  return (
    {data.careers.map(career => { 
        return( 
                <Card 
                name={career.name}  
                description={career.description}
               img ={career.image}
                  skills ={career.skill}
                /> 
        );
  })}
  </ul>
</div>
</div>

);

export default Skills;