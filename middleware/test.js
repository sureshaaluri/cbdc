const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('./index');


chai.use(chaiHttp);

describe('POSITIVE TEST CASES',() => {
  //    it('To insert user to register  ',()=>{        // insert user to register
      
    
  //      chai.request(server)
  //    .post('/register')
  //   .send({
  //       username:'priya',
  //       firstname:'sai',
  //       lastname:'patient',
  //       password:'laxmi'
  //   })
  //  .end((err,res) =>{
  //    res.should.have.status(201);
  
  //   })
     
  //   })

  //    it('To login the user   ',()=>{    // to login the user 
  
  //     chai.request(server)
  //     .post('/login')
  //    .send({
  //        username:'priya',
  //        password:'laxmi'
  //    })
  //   .end((err,res) =>{
  //     res.should.have.status(201);
   
  //    })
      
  //    })





//      it('To create the patient/insurer to mint   ',()=>{    // To create the patient/insurer to mint 

//       let patient={
       
//       name:"teja",
//       password:"teja",
//       email:"teja@gmail.com",
//       nOutputs:1000,
//       outputValue:1000,
//       slt_pat_agent:"patient",
//       mempool:"mempool6.dat",
//       wallet: "wallet6.dat"}
    
    
//       let insurer={
           
//       name:"icic",
//       password:"icic",
//       email:"icic@gmail.com",
//       nOutputs:1000,
//       outputValue:100,
//       slt_pat_agent:"insurance_agent",
//       mempool:"mempool7.dat",
//       wallet: "wallet7.dat"
//       }
  
// let sarray=[patient,insurer];


// let i = 0, n = 2;


// while (i < n) {
//     console.log(sarray[i]); 
//      chai.request(server)
//     .post('/mint')


//     .send(sarray[i])
//   .end((err,res) =>{
//     res.should.have.status(200);
//   })
//     i += 1;
 
// }
// })

    //  it('To CREATE THE SERVICE PROVIDER  ',()=>{    // To CREATE THE SERVICE PROVIDER
    //   chai.request(server)
    //   .post('/newAddress')
    //  .send({
    //   name:"kims",
    //   password:"kims",
    //   email:"kims@gmail.com",
    //   mempool:"mempool5.dat",
    //   wallet: "wallet5.dat",
    //   role:"Provider"
      
    //  })
    // .end((err,res) =>{
    //   res.should.have.status(201);
   
    //  })
      
    // })
    
    //  it('To CREATE THE SERVICE PROVIDER  ',()=>{    // to login the user 

    //     chai.request(server)
    //     .post('/balance')
    //    .send({  "getMempoolWallet":"mempool3.dat-wallet3.dat"})
    //   .end((err,res) =>{
    //     res.should.have.status(201);
     
    //    })
        
    //    })

    //    it('To CREATE THE SERVICE PROVIDER  ',()=>{    // to login the user 

    //     chai.request(server)
    //     .post('/balance')
    //    .send({  "getMempoolWallet":"mempool4.dat-wallet4.dat"})
    //   .end((err,res) =>{
    //     res.should.have.status(201);
     
    //    })
        
    //    })
    //    it('To CREATE THE SERVICE PROVIDER  ',()=>{    // to login the user 

    //     chai.request(server)
    //     .post('/balance')
    //    .send({  "getMempoolWallet":"mempool5.dat-wallet5.dat"})
    //   .end((err,res) =>{
    //     res.should.have.status(201);
     
    //    })
        
    //    })


    it('To CREATE THE SERVICE PROVIDER  ',()=>{    // to login the user 
      chai.request(server)
      .post('/sendCurrency')
     .send({
      currency:"10",
     toAccAddr:"usd1qr94m4ps9h5pthw6mkqz6m3mj80hdey82daz2hymyzswlhs8fx0f6dfj6ms-tejaswinireddy.ponnagandla@gmail.com",
     accAddr_patient:"6cac0a0c4e5cfedcef0273c88e7fdd0a70ed0b52d4f72ee81e09d2a858a87ac8-mempool0.dat-wallet0.dat-sureshaaluri@gmail.com",
     accAddr_InsAgent:"a5dd0d98c33f2fe7ae26f0aed56c9e054b90626cec5b2e79c27b341bae2b8904-mempool1.dat-wallet1.dat-tejaswinireddy008@gmail.com",
     amount_per_ins:"50",
     amount_per_pat:"50",
  
  })
    .end((err,res) =>{
      res.should.have.status(201);
   
     })
    
    })
  })
