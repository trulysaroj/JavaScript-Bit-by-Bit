

///////////////////////////////////////////////////////////////////////////////////////////


// we have an object as follows
const studentDetails = {
    name: 'Hari Thapa',
    roll: 12,
    age: 46,
    favSubjects:['math','science', 'computer'],
    favSubjectsScores:[99,80,78],
    nonFavSubjectsScores:[55,66],
    allSubjects:['math', 'science', 'social', 'sanskrit', 'computer']
  }
  


  
  // Q6) write a code that gives following as the expected output: ---> HT
  // Soln:
  let first = studentDetails.name.charAt(0);
  let second = studentDetails.name.charAt(5);
  console.log(first + second);
  

///////////////////////////////////////////////////////////////////////////////////////////

  

  // Q7) Calculate total number of favSubjects, output should be ---> 3
  const favSubjectsNUM = studentDetails.favSubjects.length;
  console.log(favSubjectsNUM);
  


///////////////////////////////////////////////////////////////////////////////////////////

  
  //Hard Question sets
  // Q8) find which subjects are not his fav subject.Expected output ---> ['social','sanskrit']
  
  
  const favSubjects = studentDetails.favSubjects;
  const allSubjects = studentDetails.allSubjects; 
  
  const nonFavSubjects = allSubjects.filter(subject => !favSubjects.includes(subject));
  console.log(nonFavSubjects);
  
 
///////////////////////////////////////////////////////////////////////////////////////////
  


  //09) calculate total marks hari scored in all 5 subjects
  // soln:
  
  const favSubScore = studentDetails.favSubjectsScores;
  const nonFavSubScore = studentDetails.nonFavSubjectsScores;
  
  const totalScoreArr = favSubScore.concat(nonFavSubScore);
  console.log(totalScoreArr);
  let totalScore = 0;
  for (let i = 0; i < totalScoreArr.length; i++) {
      totalScore += totalScoreArr[i];
  }
  
  console.log(totalScore);
  
  

///////////////////////////////////////////////////////////////////////////////////////////
  
   
  //10) calculate the percentage of marks hari scored in all 5 subjects
  const percentOfHari = totalScore / (5 * 100) * 100;
  console.log(percentOfHari);

  
///////////////////////////////////////////////////////////////////////////////////////////
