/* eslint-disable */

const abi = [{constant:!1,inputs:[{name:"ownerId",type:"uint256"},{name:"chipId",type:"string"},{name:"petType",type:"string"},{name:"name",type:"string"},{name:"desc",type:"string"},{name:"imgUrl",type:"string"}],name:"addPet",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"petId",type:"uint256"},{name:"claimerHydroId",type:"uint256"}],name:"claimLostReport",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"",type:"uint256"},{name:"petId",type:"uint256"}],name:"confirmReward",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"ein",type:"uint256"},{name:"",type:"uint256"},{name:"extraData",type:"bytes"}],name:"onAddition",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"",type:"uint256"},{name:"",type:"bytes"}],name:"onRemoval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"ownerId",type:"uint256"},{name:"petId",type:"uint256"},{name:"sceneDesc",type:"string"},{name:"reward",type:"uint256"}],name:"putLostReport",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"ownerId",type:"uint256"},{name:"petId",type:"uint256"}],name:"removeLostReport",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_snowflakeAddress",type:"address"}],name:"setSnowflakeAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"petId",type:"uint256"}],name:"unclaimLostReport",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"ownerId",type:"uint256"},{name:"petId",type:"uint256"},{name:"sceneDesc",type:"string"},{name:"reward",type:"uint256"}],name:"updateLostReport",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"ownerId",type:"uint256"},{name:"contactName",type:"string"},{name:"contactData",type:"string"}],name:"updateOwner",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"petId",type:"uint256"},{name:"chipId",type:"string"},{name:"petType",type:"string"},{name:"name",type:"string"},{name:"desc",type:"string"},{name:"imgUrl",type:"string"}],name:"updatePet",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"snowflakeAddress",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"petId",type:"uint256"},{indexed:!1,name:"chipId",type:"string"},{indexed:!1,name:"date",type:"uint256"},{indexed:!1,name:"status",type:"uint8"},{indexed:!1,name:"sceneDesc",type:"string"},{indexed:!1,name:"reward",type:"uint256"},{indexed:!1,name:"claimerEin",type:"uint256"}],name:"LostReportChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[],name:"callOnAddition",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"callOnRemoval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getAllLostReportKeys",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"petId",type:"uint256"}],name:"getLostReport",outputs:[{name:"status",type:"uint8"},{name:"sceneDesc",type:"string"},{name:"reward",type:"uint256"},{name:"claimerHydroId",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"ownerId",type:"uint256"}],name:"getOwner",outputs:[{name:"contactName",type:"string"},{name:"contactData",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"ownerId",type:"uint256"}],name:"getOwnerPets",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"petId",type:"uint256"}],name:"getPet",outputs:[{name:"chipId",type:"string"},{name:"petType",type:"string"},{name:"name",type:"string"},{name:"desc",type:"string"},{name:"imgUrl",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"petId",type:"uint256"}],name:"getPetOwner",outputs:[{name:"ownerId",type:"uint256"},{name:"contactName",type:"string"},{name:"contactData",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"snowflakeAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"snowflakeDescription",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"snowflakeName",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}];

/* eslint-enable */

export default abi;