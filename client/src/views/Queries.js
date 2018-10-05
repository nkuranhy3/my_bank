import { gql } from "apollo-boost";

const addNewBorrower = gql`mutation($name: String!, $colaterel: String, $credit:String!, $paymentDate:String!, $varificationEmail:String!, $lenderNameId: ID!, $picture:String){ 
    createBorrower(name:$name, colaterel:$colaterel, credit:$credit, paymentDate:$paymentDate, varificationEmail:$varificationEmail, lenderNameId:$lenderNameId, picture:$picture ){
      id
      name
      lenderName{
        id
        name
      }
      colaterel
      createdAt
      credit
      picture
      varificationEmail
    }
  }`

const addNewLender = gql`mutation($name:String!,$deposit: String!,$varificationEmail: String!){
    createLender(name:$name, deposit:$deposit, varificationEmail:$varificationEmail){
      id
      name
      createdAt
      deposit
      varificationEmail
      borrowers{
        id
        name
        picture
        credit
      }
    }
  }`

const getAllBorrowers = gql`{
 allBorrowers{
    id
    name
    colaterel
    createdAt
    credit
    paymentDate
    picture
    varificationEmail
    lenderName{
      name
    }
  }
}`


const getAllLenders = gql`{
  allLenders{
    id
    name
    createdAt
    deposit
    varificationEmail
    borrowers{
      id
      name
      createdAt
      colaterel
      credit
      paymentDate
      picture
    }
  }
}`

  export {addNewBorrower, addNewLender, getAllBorrowers, getAllLenders}