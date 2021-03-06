/* eslint-disable */

import React, { Component } from 'react';
import Web3 from 'web3';
import './style.css';
import Deadline from './Deadline';
import ElectionInstanceABI from './ABI/ElectionInstanceABI'


export default class ElectionCards extends Component {


	constructor(props) {
		super(props)
			this.state = {
            electionFactory:'',
            electionABI:[],
            title:'',
            deadline:'',
            unixTime:'',
            account:[],
            blockNumber:'',
                     
        }
      
	}


	componentDidMount(){
      this._isMounted = true;
      this.loadBlockchain();
    }

    
    //Loads Blockain Data
    async loadBlockchain(){
    
        let ethereum= window.ethereum;
        let web3=window.web3;

        if(typeof ethereum !=='undefined'){
         await ethereum.enable();
         web3 = new Web3(ethereum);       
        }
 
        else if (typeof web3 !== 'undefined'){
        console.log('Web3 Detected!')
        window.web3 = new Web3(web3.currentProvider);
        }
     
        else{console.log('No Web3 Detected')
        window.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/72e114745bbf4822b987489c119f858b'));  
        }             
            const network = await web3.eth.net.getNetworkType();
            const accounts = await web3.eth.getAccounts();
       
             if (this._isMounted){
            this.setState({account: accounts[0]}); 
             }

            const electionContract = new web3.eth.Contract(ElectionInstanceABI,this.props.Address);
            if (this._isMounted){
                this.setState({electionContract:electionContract},()=>console.log());
            }
            const title = await electionContract.methods.snowflakeName().call()
            if (this._isMounted){
                this.setState({title:title},()=>console.log());
            }

            const deadline = await electionContract.methods.getDeadline().call()
            if (this._isMounted){
                this.setState({unixTime:deadline.slice(0,10),
                    deadline:new Date(parseInt(deadline.slice(0,10),10)*1000)});
            }

        }

  render() {
    

    return (
        
        <div className="electionCard">
            <h3 className="card-header small">
            <strong>
            {this.state.title} 
            </strong>
            </h3>
                <div className="card-list">
					
					<ul className="list-group list-group-flush">
						<Deadline deadline={this.state.deadline} unixTime={this.state.unixTime}/>
						
					</ul>
                    	
				</div>          
        
            </div>
		);
	}
}
